import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Ticket } from '../../../types';

interface KanbanCardProps {
  ticket: Ticket;
  onClick: (id: string) => void;
  isOverlay?: boolean;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({ ticket, onClick, isOverlay = false }) => {
  const isBlocked = ticket.status === 'PENDING' && !ticket.assigned_user_id;

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

  // If it's the original card being dragged (and not the overlay), make it a ghost
  const opacityClass = isDragging && !isOverlay ? 'opacity-30' : 'opacity-100';
  
  // If it's the overlay floating clone
  const overlayClass = isOverlay ? 'shadow-2xl border-primary rotate-3 scale-105' : 'hover:border-primary/50';

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      onClick={() => onClick(ticket.id)}
      className={`group relative bg-[#0F172A] border border-[#1E293B] rounded-lg p-md transition-all ${isBlocked ? 'cursor-not-allowed' : 'cursor-grab'} ${opacityClass} ${overlayClass}`}
    >
      <div className="flex justify-between items-start mb-3">
        {isBlocked ? (
          <span className="bg-[#93000a]/20 text-[#ffb4ab] border border-[#93000a]/50 text-[10px] px-2 py-1 rounded font-label-md">CRITICAL</span>
        ) : ticket.status === 'COMPLETED' ? (
          <span className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-[10px] px-2 py-1 rounded font-label-md flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">check_circle</span>
            DONE
          </span>
        ) : (
          <span className="bg-primary-container/10 text-primary border border-primary-container/20 text-[10px] px-2 py-1 rounded font-label-md">TICKET</span>
        )}
        <span className={`text-[#87929a] font-code text-[11px] ${ticket.status === 'COMPLETED' ? 'line-through decoration-outline-variant' : ''}`}>{ticket.id.substring(0,8)}</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface font-semibold mb-2 leading-tight truncate">{ticket.title}</h4>
      <p className="font-body-md text-[12px] text-on-surface-variant line-clamp-2 mb-4">{ticket.description || 'No description provided'}</p>
      
      <div className="flex justify-between items-center mt-auto pt-3 border-t border-[#1E293B]">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px]">calendar_today</span>
          <span className="text-[11px] font-code">{formattedDate}</span>
        </div>
        
        {isBlocked ? (
          <div className="relative group/tooltip flex items-center justify-center w-6 h-6 rounded-full bg-surface-container border border-error/30 text-error">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover/tooltip:block w-max bg-inverse-surface text-background font-label-md text-[10px] px-2 py-1 rounded shadow-lg z-20 whitespace-nowrap">
                Asigna un responsable primero
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-inverse-surface"></div>
            </div>
          </div>
        ) : ticket.assigned_user_id ? (
          <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-md text-[10px] border border-outline-variant uppercase">
            {ticket.assigned_user_id.substring(0,2)}
          </div>
        ) : null}
      </div>
    </div>
  );
};
