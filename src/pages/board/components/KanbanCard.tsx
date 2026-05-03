import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Ticket, User } from '../../../types';
import styles from './Kanban.module.css';

interface KanbanCardProps {
  ticket: Ticket;
  members: User[];
  onClick: (id: string) => void;
  isOverlay?: boolean;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({ ticket, members, onClick, isOverlay = false }) => {
  const isBlocked = ticket.status === 'PENDING' && !ticket.assigned_user_id;

  const assignedUser = ticket.assigned_user_id
    ? members.find(m => m.id === ticket.assigned_user_id) || null
    : null;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: ticket.id,
    disabled: isBlocked
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : 'auto',
  };

  const formattedDate = new Date(ticket.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const cardClasses = [
    styles.card,
    styles.cardAsButton, // Added class for button reset
    isBlocked ? styles.cardBlocked : '',
    isDragging && !isOverlay ? styles.cardDragging : '',
    isOverlay ? styles.cardOverlay : '',
  ].filter(Boolean).join(' ');

  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(ticket.id);
    }
  };

  // Render helpers to reduce cognitive complexity and avoid nested ternaries
  const renderBadge = () => {
    if (isBlocked) {
      return <span className={`${styles.cardBadge} ${styles.cardBadgeCritical}`}>PENDIENTE</span>;
    }
    if (ticket.status === 'COMPLETED') {
      return (
        <span className={`${styles.cardBadge} ${styles.cardBadgeDone}`}>
          <span className={`material-symbols-outlined ${styles.badgeIcon}`}>check_circle</span>
          {' '}COMPLETADO
        </span>
      );
    }
    return <span className={`${styles.cardBadge} ${styles.cardBadgeDefault}`}>EN PROGRESO</span>;
  };

  const renderAvatar = () => {
    if (isBlocked) {
      return (
        <div className={styles.cardLock}>
          <span className={`material-symbols-outlined ${styles.cardLockIcon}`}>lock</span>
          <div className={styles.cardLockTooltip}>
              Asigna un responsable primero
              <div className={styles.cardLockTooltipArrow}></div>
          </div>
        </div>
      );
    }
    
    if (assignedUser) {
      return (
        <div className={styles.cardAvatar} title={assignedUser.name}>
          {getInitials(assignedUser.name)}
        </div>
      );
    }

    if (ticket.assigned_user_id) {
      return (
        <div className={styles.cardAvatar}>
          {ticket.assigned_user_id.substring(0, 2).toUpperCase()}
        </div>
      );
    }

    return null;
  };

  return (
    <button 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      onKeyDown={handleKeyDown}
      onClick={() => onClick(ticket.id)}
      className={cardClasses}
      aria-label={`Ticket: ${ticket.title}`}
      type="button"
    >
      <div className={styles.cardHeader}>
        {renderBadge()}
        <span className={`${styles.cardId} ${ticket.status === 'COMPLETED' ? styles.cardIdCompleted : ''}`}>
          {ticket.id.substring(0, 8)}
        </span>
      </div>

      <h4 className={styles.cardTitle}>{ticket.title}</h4>
      <p className={styles.cardDescription}>{ticket.description || 'No description provided'}</p>
      
      <div className={styles.cardFooter}>
        <div className={styles.cardDate}>
          <span className={`material-symbols-outlined ${styles.cardDateIcon}`}>calendar_today</span>
          {' '}<span className={styles.cardDateText}>{formattedDate}</span>
        </div>
        
        {renderAvatar()}
      </div>
    </button>
  );
};
