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

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      onClick={() => onClick(ticket.id)}
      className={cardClasses}
    >
      <div className={styles.cardHeader}>
        {isBlocked ? (
          <span className={`${styles.cardBadge} ${styles.cardBadgeCritical}`}>CRITICAL</span>
        ) : ticket.status === 'COMPLETED' ? (
          <span className={`${styles.cardBadge} ${styles.cardBadgeDone}`}>
            <span className={`material-symbols-outlined ${styles.badgeIcon}`}>check_circle</span>
            DONE
          </span>
        ) : (
          <span className={`${styles.cardBadge} ${styles.cardBadgeDefault}`}>TICKET</span>
        )}
        <span className={`${styles.cardId} ${ticket.status === 'COMPLETED' ? styles.cardIdCompleted : ''}`}>
          {ticket.id.substring(0, 8)}
        </span>
      </div>

      <h4 className={styles.cardTitle}>{ticket.title}</h4>
      <p className={styles.cardDescription}>{ticket.description || 'No description provided'}</p>
      
      <div className={styles.cardFooter}>
        <div className={styles.cardDate}>
          <span className={`material-symbols-outlined ${styles.cardDateIcon}`}>calendar_today</span>
          <span className={styles.cardDateText}>{formattedDate}</span>
        </div>
        
        {isBlocked ? (
          <div className={styles.cardLock}>
            <span className={`material-symbols-outlined ${styles.cardLockIcon}`}>lock</span>
            <div className={styles.cardLockTooltip}>
                Asigna un responsable primero
                <div className={styles.cardLockTooltipArrow}></div>
            </div>
          </div>
        ) : assignedUser ? (
          <div className={styles.cardAvatar} title={assignedUser.name}>
            {getInitials(assignedUser.name)}
          </div>
        ) : ticket.assigned_user_id ? (
          <div className={styles.cardAvatar}>
            {ticket.assigned_user_id.substring(0, 2).toUpperCase()}
          </div>
        ) : null}
      </div>
    </div>
  );
};
