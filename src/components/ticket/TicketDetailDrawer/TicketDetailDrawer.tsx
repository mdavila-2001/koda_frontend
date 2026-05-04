import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { httpClient } from '../../../api/httpClient';
import { useAuth } from '../../../hooks/useAuth';
import type { Project, Ticket, User } from '../../../types';
import styles from './TicketDrawer.module.css';

interface TicketDetailDrawerProps {
  ticket: Ticket;
  members: User[];
  onClose: () => void;
  onUpdate: () => void;
}

export function TicketDetailDrawer({ ticket, members, onClose, onUpdate }: Readonly<TicketDetailDrawerProps>) {
  const { user } = useAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;

      setIsLoadingData(true);
      try {
        const projectData = await httpClient<Project>(`/projects/${projectId}`);
        setProject(projectData);
      } catch (error) {
        console.error('Failed to fetch project data', error);
      } finally {
        setIsLoadingData(false);
      }
    };

    void fetchProject();
  }, [projectId]);

  const assignedUser = ticket.assigned_user_id
    ? members.find((member) => member.id === ticket.assigned_user_id) || null
    : null;

  const handleAssignUser = async (userId: string) => {
    setIsUpdating(true);
    try {
      await httpClient(`/tickets/${ticket.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ assigned_user_id: userId }),
      });
      onUpdate();
    } catch (error) {
      console.error('Failed to assign ticket', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAssignToMe = () => {
    if (!user) return;

    void handleAssignUser(user.id);
  };

  const handleUpdateStatus = async (newStatus: Ticket['status']) => {
    setIsUpdating(true);
    try {
      await httpClient(`/tickets/${ticket.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });
      onUpdate();
    } catch (error) {
      console.error('Failed to update ticket', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteTicket = async () => {
    if (!globalThis.confirm('¿Estás seguro de que deseas eliminar este ticket?')) return;

    setIsDeleting(true);
    try {
      await httpClient(`/tickets/${ticket.id}`, { method: 'DELETE' });
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Failed to delete ticket', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const isPending = ticket.status === 'PENDING';

  const renderAssigneeSection = () => {
    if (isLoadingData) {
      return <div className={styles.loadingText}>Cargando...</div>;
    }

    if (user?.id === project?.owner_id) {
      return (
        <select
          id="assignee-select"
          value={ticket.assigned_user_id || ''}
          onChange={(e) => void handleAssignUser(e.target.value)}
          disabled={isUpdating}
          className={styles.assigneeSelect}
        >
          <option value="" disabled>Elige un responsable...</option>
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name} ({member.email})
            </option>
          ))}
        </select>
      );
    }

    if (assignedUser) {
      return (
        <div className={styles.assigneeInfo}>
          <span className="material-symbols-outlined">person_check</span>
          <span>{assignedUser.name} ({assignedUser.email})</span>
        </div>
      );
    }

    if (ticket.assigned_user_id) {
      return (
        <div className={styles.assigneeInfo}>
          <span className="material-symbols-outlined">person_check</span>
          <span>Asignado a un miembro del equipo</span>
        </div>
      );
    }

    return (
      <button
        type="button"
        onClick={handleAssignToMe}
        disabled={isUpdating}
        className={styles.assignButton}
      >
        <span className="material-symbols-outlined">person_add</span>
        {' '}Asignarme
      </button>
    );
  };

  const getStatusActionLabel = () => {
    if (isUpdating) return 'Actualizando...';
    if (isPending) return 'Empezar';
    return 'Marcar como Completado';
  };

  return (
    <aside className={styles.drawer}>
      <div className={styles.drawerHeader}>
        <div className={styles.drawerHeaderLeft}>
          <span className={styles.drawerTicketId}>
            {ticket.id.substring(0, 8)}
          </span>
          <div className={styles.drawerStatusBadge}>
            <div className={styles.drawerStatusDot}></div>
            <span className={styles.drawerStatusText}>{ticket.status}</span>
          </div>
        </div>
        <button type="button" onClick={onClose} className={styles.drawerCloseButton} aria-label="Cerrar panel">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className={styles.drawerBody}>
        <div className={styles.fieldGroup}>
          <label htmlFor="ticket-title" className={styles.fieldLabel}>Título</label>
          <input id="ticket-title" readOnly className={styles.fieldInput} type="text" value={ticket.title} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="ticket-description" className={styles.fieldLabel}>Descripción</label>
          <textarea id="ticket-description" readOnly className={styles.fieldTextarea} value={ticket.description || ''}></textarea>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="assignee-select" className={styles.fieldLabel}>Responsable</label>
          {renderAssigneeSection()}
        </div>

        <div className={styles.metaSection}>
          <div className={styles.metaRow}>
            <span>Creado</span>
            <span className={styles.metaValue}>{new Date(ticket.created_at).toLocaleDateString('es-ES')}</span>
          </div>
        </div>
      </div>

      <div className={styles.drawerFooter}>
        <button
          type="button"
          onClick={() => void handleUpdateStatus(isPending ? 'IN_PROGRESS' : 'COMPLETED')}
          disabled={isUpdating || ticket.status === 'COMPLETED' || !ticket.assigned_user_id}
          className={styles.actionButtonPrimary}
        >
          <span className="material-symbols-outlined">
            {isPending ? 'play_arrow' : 'done'}
          </span>
          {getStatusActionLabel()}
        </button>
        <button type="button" onClick={handleDeleteTicket} disabled={isDeleting} className={styles.deleteButton}>
          <span className={`material-symbols-outlined ${styles.deleteIcon}`}>delete</span>
          {' '}Eliminar Ticket
        </button>
      </div>
    </aside>
  );
}