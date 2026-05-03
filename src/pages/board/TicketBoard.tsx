import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { httpClient } from '../../api/httpClient';
import type { Ticket, User } from '../../types';
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
import { KanbanCard } from './components/KanbanCard';
import styles from './components/Kanban.module.css';

export const TicketBoard: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [members, setMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTickets = useCallback(async () => {
    if (!projectId) return;
    setIsLoading(true);
    try {
      const [ticketsData, membersData] = await Promise.all([
        httpClient<Ticket[]>(`/tickets/project/${projectId}`),
        httpClient<User[]>(`/projects/${projectId}/members`)
      ]);
      setTickets(ticketsData);
      setMembers(membersData);
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
    const draggedTicket = tickets.find(t => t.id === ticketId);

    if (!draggedTicket || draggedTicket.status === newStatus) return;

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

  return (
    <AppLayout>
      <main className={styles.boardPage}>
        <div className={styles.boardScroll}>
          <div className={styles.boardInner}>
            <div className={styles.boardHeader}>
              <div>
                <h1 className={styles.boardTitle}>Tickets</h1>
                <p className={styles.boardSubtitle}>Manage and resolve active support requests.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className={styles.newTicketButton}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                New Ticket
              </button>
            </div>

            <div className={styles.searchContainer}>
              <div className={styles.searchWrapper}>
                <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
                <input 
                  className={styles.searchInput} 
                  placeholder="Search tickets by title, ID, or content..." 
                  type="text"
                />
              </div>
            </div>

            <div className={styles.kanbanContainer}>
              {isLoading ? (
                <div className={styles.loadingState}>Loading tickets...</div>
              ) : (
                <DndContext 
                  sensors={sensors}
                  collisionDetection={closestCorners}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDragCancel={() => setActiveTicket(null)}
                >
                  <div className={styles.kanbanGrid}>
                    <KanbanColumn 
                      id="PENDING" 
                      title="Pending" 
                      tickets={pendingTickets} 
                      members={members}
                      onCardClick={setSelectedTicketId}
                    />
                    <KanbanColumn 
                      id="IN_PROGRESS" 
                      title="In Progress" 
                      tickets={inProgressTickets} 
                      members={members}
                      onCardClick={setSelectedTicketId}
                    />
                    <KanbanColumn 
                      id="COMPLETED" 
                      title="Completed" 
                      tickets={completedTickets} 
                      members={members}
                      onCardClick={setSelectedTicketId}
                    />
                  </div>
                  <DragOverlay dropAnimation={{ duration: 200, easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)' }}>
                    {activeTicket ? (
                      <div className={styles.dragOverlayWrapper}>
                         <KanbanCard ticket={activeTicket} members={members} onClick={() => {}} isOverlay />
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
            members={members}
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
