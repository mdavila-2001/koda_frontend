import { useState, useEffect, useCallback } from 'react';
import { httpClient } from '../api/httpClient';
import type { Ticket, User } from '../types';

export const useTickets = (projectId: string | undefined) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [members, setMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTickets = useCallback(async () => {
    if (!projectId) return;
    setIsLoading(true);
    try {
      const [ticketsData, membersData] = await Promise.all([
        httpClient<Ticket[]>(`/tickets/project/${projectId}`),
        httpClient<User[]>(`/projects/${projectId}/members`),
      ]);
      setTickets(ticketsData);
      setMembers(membersData);
    } catch (error) {
      console.error('Error al obtener tickets', error);
    } finally {
      setIsLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    if (!projectId) return;

    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      try {
        const [ticketsData, membersData] = await Promise.all([
          httpClient<Ticket[]>(`/tickets/project/${projectId}`),
          httpClient<User[]>(`/projects/${projectId}/members`),
        ]);
        if (!cancelled) {
          setTickets(ticketsData);
          setMembers(membersData);
        }
      } catch (error) {
        if (!cancelled) console.error('Error al obtener tickets', error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    void load();
    return () => { cancelled = true; };
  }, [projectId]);

  const updateTicketStatus = async (ticketId: string, status: Ticket['status']) => {
    const originalTickets = [...tickets];
    setTickets(prev => prev.map(t => (t.id === ticketId ? { ...t, status } : t)));

    try {
      await httpClient(`/tickets/${ticketId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
    } catch (error) {
      console.error('Error al actualizar estado del ticket', error);
      setTickets(originalTickets);
    }
  };

  return { tickets, members, isLoading, refetch: fetchTickets, updateTicketStatus };
};
