import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { httpClient } from '../../api/httpClient';
import type { Ticket } from '../../types';
import { TicketDetailDrawer } from './components/TicketDetailDrawer';
import { TicketForm } from './components/TicketForm';
import { Modal } from '../../components/ui/Modal/Modal';
import { 
  DndContext, 
  closestCorners, 
  KeyboardSensor, 
  PointerSensor, 
  useSensor, 
  useSensors,
  DragOverlay
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { KanbanColumn } from './components/KanbanColumn';

export const TicketBoard: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTickets = useCallback(async () => {
    if (!projectId) return;
    setIsLoading(true);
    try {
      const data = await httpClient<Ticket[]>(`/tickets/project/${projectId}`);
      setTickets(data);
    } catch (error) {
      console.error('Failed to fetch tickets', error);
    } finally {
      setIsLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const pendingTickets = tickets.filter(t => t.status === 'PENDING');
  const inProgressTickets = tickets.filter(t => t.status === 'IN_PROGRESS');
  const completedTickets = tickets.filter(t => t.status === 'COMPLETED');

  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const ticket = tickets.find(t => t.id === active.id);
    if (ticket) setActiveTicket(ticket);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    setActiveTicket(null);
    const { active, over } = event;
    
    if (!over) return;
    
    const ticketId = active.id as string;
    const newStatus = over.id as Ticket['status'];
    const activeTicket = tickets.find(t => t.id === ticketId);

    if (!activeTicket || activeTicket.status === newStatus) return;

    const originalTickets = [...tickets];
    setTickets(tickets.map(t => 
      t.id === ticketId ? { ...t, status: newStatus } : t
    ));

    try {
      await httpClient(`/tickets/${ticketId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (error) {
      console.error('Failed to update ticket status', error);
      setTickets(originalTickets);
    }
  };

  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  const getStatusColor = (status: Ticket['status']) => {
    switch (status) {
      case 'PENDING': return 'bg-[#94A3B8]/10 text-[#94A3B8]';
      case 'IN_PROGRESS': return 'bg-[#F59E0B]/10 text-[#F59E0B]';
      case 'COMPLETED': return 'bg-[#10B981]/10 text-[#10B981]';
      default: return 'bg-[#94A3B8]/10 text-[#94A3B8]';
    }
  };

  const getStatusDotColor = (status: Ticket['status']) => {
    switch (status) {
      case 'PENDING': return 'bg-[#94A3B8]';
      case 'IN_PROGRESS': return 'bg-[#F59E0B]';
      case 'COMPLETED': return 'bg-[#10B981]';
      default: return 'bg-[#94A3B8]';
    }
  };
  
  const getStatusLabel = (status: Ticket['status']) => {
    switch(status) {
      case 'PENDING': return 'Pending';
      case 'IN_PROGRESS': return 'In Progress';
      case 'COMPLETED': return 'Completed';
      default: return 'Unknown';
    }
  };

  return (
    <AppLayout>
      <main className="flex-1 flex flex-col h-full overflow-hidden relative ml-[240px]">
        <div className="flex-1 overflow-y-auto p-4 md:p-8 xl:p-12">
          <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-8 h-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
              <div>
                <h1 className="font-h1 text-h1 text-on-surface">Tickets</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage and resolve active support requests.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="bg-primary-container text-[#0F172A] font-label-md text-label-md px-6 py-3 rounded hover:brightness-110 transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <span className="material-symbols-outlined text-[18px]">add</span>
                New Ticket
              </button>
            </div>
            <div className="bg-[#111827] border border-[#1E293B] rounded-lg p-4 flex flex-col lg:flex-row gap-4 shrink-0 shadow-[0_4px_24px_rgba(2,6,23,0.5)]">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                <input className="w-full bg-[#0F172A] border border-[#1E293B] rounded-md pl-10 pr-4 py-2.5 font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all" placeholder="Search tickets by title, ID, or content..." type="text"/>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              {isLoading ? (
                <div className="flex items-center justify-center h-full text-on-surface-variant">Loading tickets...</div>
              ) : (
                <DndContext 
                  sensors={sensors}
                  collisionDetection={closestCorners}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDragCancel={() => setActiveTicket(null)}
                >
                  <div className="flex gap-lg h-[calc(100vh-250px)] overflow-x-auto kanban-scroll pb-4">
                    <KanbanColumn 
                      id="PENDING" 
                      title="Pending" 
                      tickets={pendingTickets} 
                      colorClass="text-[#94A3B8]" 
                      dotColorClass="bg-[#94A3B8]"
                      onCardClick={setSelectedTicketId}
                    />
                    <KanbanColumn 
                      id="IN_PROGRESS" 
                      title="In Progress" 
                      tickets={inProgressTickets} 
                      colorClass="text-[#F59E0B]" 
                      dotColorClass="bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                      onCardClick={setSelectedTicketId}
                    />
                    <KanbanColumn 
                      id="COMPLETED" 
                      title="Completed" 
                      tickets={completedTickets} 
                      colorClass="text-[#10B981]" 
                      dotColorClass="bg-[#10B981]"
                      onCardClick={setSelectedTicketId}
                    />
                  </div>
                  <DragOverlay dropAnimation={{ duration: 200, easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)' }}>
                    {activeTicket ? (
                      <div className="cursor-grabbing">
                         <KanbanCard ticket={activeTicket} onClick={() => {}} isOverlay />
                      </div>
                    ) : null}
                  </DragOverlay>
                </DndContext>
              )}
            </div>
          </div>
        </div>

        {selectedTicket && (
          <TicketDetailDrawer 
            ticket={selectedTicket} 
            onClose={() => setSelectedTicketId(null)}
            onUpdate={fetchTickets}
          />
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create New Ticket"
        >
          {projectId && (
            <TicketForm
              projectId={projectId}
              onSuccess={() => { setIsModalOpen(false); fetchTickets(); }}
              onCancel={() => setIsModalOpen(false)}
            />
          )}
        </Modal>
      </main>
    </AppLayout>
  );
};
