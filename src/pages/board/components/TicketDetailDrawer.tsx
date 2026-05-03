import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { httpClient } from '../../../api/httpClient';
import type { Ticket, User, Project } from '../../../types';
import { useAuth } from '../../../hooks/useAuth';
import styles from './TicketDrawer.module.css';

interface TicketDetailDrawerProps {
  ticket: Ticket;
  members: User[];
  onClose: () => void;
  onUpdate: () => void;
}

export const TicketDetailDrawer: React.FC<TicketDetailDrawerProps> = ({ ticket, members, onClose, onUpdate }) => {
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
    fetchProject();
  }, [projectId]);

  const assignedUser = ticket.assigned_user_id
    ? members.find(m => m.id === ticket.assigned_user_id) || null
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
    if (user) handleAssignUser(user.id);
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
    if (!confirm('Are you sure you want to delete this ticket?')) return;
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
        <button onClick={onClose} className={styles.drawerCloseButton}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className={styles.drawerBody}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Title</label>
          <input readOnly className={styles.fieldInput} type="text" value={ticket.title} />
        </div>
        
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Description</label>
          <textarea readOnly className={styles.fieldTextarea} value={ticket.description || ''}></textarea>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Assignee</label>
          {isLoadingData ? (
             <div className={styles.loadingText}>Loading assignees...</div>
          ) : user?.id === project?.owner_id ? (
             <select
                value={ticket.assigned_user_id || ''}
                onChange={(e) => handleAssignUser(e.target.value)}
                disabled={isUpdating}
                className={styles.assigneeSelect}
             >
                <option value="" disabled>Select an assignee...</option>
                {members.map(member => (
                   <option key={member.id} value={member.id}>
                     {member.name} ({member.email})
                   </option>
                ))}
             </select>
          ) : assignedUser ? (
             <div className={styles.assigneeInfo}>
                <span className="material-symbols-outlined">person_check</span>
                <span>{assignedUser.name} ({assignedUser.email})</span>
             </div>
          ) : ticket.assigned_user_id ? (
             <div className={styles.assigneeInfo}>
                <span className="material-symbols-outlined">person_check</span>
                <span>Assigned to Team Member</span>
             </div>
          ) : (
             <button
                onClick={handleAssignToMe}
                disabled={isUpdating}
                className={styles.assignButton}
             >
                <span className="material-symbols-outlined">person_add</span>
                Assign to me
             </button>
          )}
        </div>

        <div className={styles.metaSection}>
          <div className={styles.metaRow}>
            <span>Created</span>
            <span className={styles.metaValue}>{new Date(ticket.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className={styles.drawerFooter}>
        <button 
          onClick={() => handleUpdateStatus(isPending ? 'IN_PROGRESS' : 'COMPLETED')}
          disabled={isUpdating || ticket.status === 'COMPLETED' || !ticket.assigned_user_id}
          className={styles.actionButtonPrimary}
        >
          <span className="material-symbols-outlined">
            {isPending ? 'play_arrow' : 'done'}
          </span>
          {isUpdating ? 'Updating...' : isPending ? 'Start Progress' : 'Mark as Completed'}
        </button>
        <button onClick={handleDeleteTicket} disabled={isDeleting} className={styles.deleteButton}>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>delete</span>
          {isDeleting ? 'Deleting...' : 'Delete Ticket'}
        </button>
      </div>
    </aside>
  );
};
