import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import type { Ticket } from '../../../types';
import { KanbanCard } from './KanbanCard';

interface KanbanColumnProps {
  id: string;
  title: string;
  tickets: Ticket[];
  colorClass: string;
  dotColorClass: string;
  onCardClick: (id: string) => void;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ id, title, tickets, colorClass, dotColorClass, onCardClick }) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div className="flex-none w-[340px] h-full min-h-[500px] flex flex-col bg-[#111827] rounded-xl border border-[#1E293B] shadow-[0_8px_24px_-4px_rgba(2,6,23,0.5)]">
      <div className="p-md border-b border-[#1E293B] flex justify-between items-center shrink-0">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${dotColorClass}`}></span>
          <h3 className={`font-label-md text-label-md uppercase tracking-wider ${colorClass}`}>{title}</h3>
          <span className={`bg-[#1E293B] text-[10px] px-2 py-0.5 rounded-full font-code ${colorClass}`}>{tickets.length}</span>
        </div>
        <button className="text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined text-sm">more_horiz</span>
        </button>
      </div>
      <div 
        ref={setNodeRef}
        className="p-sm flex-1 overflow-y-auto kanban-scroll flex flex-col gap-sm min-h-[150px]"
      >
        <SortableContext items={tickets.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tickets.map(ticket => (
            <KanbanCard key={ticket.id} ticket={ticket} onClick={onCardClick} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};
