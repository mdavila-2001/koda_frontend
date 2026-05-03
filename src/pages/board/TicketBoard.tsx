import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { useTickets } from '../../hooks/useTickets';
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
import { KanbanCard } from './components/KanbanCard';
import styles from './components/Kanban.module.css';

export const TicketBoard: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { tickets, members, isLoading, refetch, updateTicketStatus } = useTickets(projectId);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);

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

    await updateTicketStatus(ticketId, newStatus);
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
                <p className={styles.boardSubtitle}>Gestiona y resuelve las solicitudes de soporte activas.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className={styles.newTicketButton}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                {' '}Nuevo Ticket
              </button>
            </div>

            <div className={styles.searchContainer}>
              <div className={styles.searchWrapper}>
                <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
                <input 
                  className={styles.searchInput} 
                  placeholder="Buscar tickets por título, ID o contenido..." 
                  type="text"
                />
              </div>
            </div>

            <div className={styles.kanbanContainer}>
              {isLoading ? (
                <div className={styles.loadingState}>Cargando tickets...</div>
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
                      title="Pendiente" 
                      tickets={pendingTickets} 
                      members={members}
                      onCardClick={setSelectedTicketId}
                    />
                    <KanbanColumn 
                      id="IN_PROGRESS" 
                      title="En Progreso" 
                      tickets={inProgressTickets} 
                      members={members}
                      onCardClick={setSelectedTicketId}
                    />
                    <KanbanColumn 
                      id="COMPLETED" 
                      title="Completado" 
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
            onUpdate={refetch}
          />
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Crear Nuevo Ticket"
        >
          {projectId && (
            <TicketForm
              projectId={projectId}
              onSuccess={() => { setIsModalOpen(false); refetch(); }}
              onCancel={() => setIsModalOpen(false)}
            />
          )}
        </Modal>
      </main>
    </AppLayout>
  );
};
