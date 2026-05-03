import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import type { Ticket, User } from '../../../types';
import { KanbanCard } from './KanbanCard';
import styles from './Kanban.module.css';

interface KanbanColumnProps {
  id: string;
  title: string;
  tickets: Ticket[];
  members: User[];
  onCardClick: (id: string) => void;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ id, title, tickets, members, onCardClick }) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div className={styles.column} data-status={id}>
      <div className={styles.columnHeader}>
        <div className={styles.columnHeaderLeft}>
          <span className={styles.statusDot} data-status={id}></span>
          <h3 className={styles.columnTitle}>{title}</h3>
          <span className={styles.ticketCount}>{tickets.length}</span>
        </div>
        <button className={styles.columnMenuButton}>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>more_horiz</span>
        </button>
      </div>
      <div 
        ref={setNodeRef}
        className={styles.columnBody}
      >
        <SortableContext items={tickets.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tickets.map(ticket => (
            <KanbanCard key={ticket.id} ticket={ticket} members={members} onClick={onCardClick} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};
