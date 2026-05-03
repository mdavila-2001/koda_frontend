import { useState, useEffect, useCallback } from 'react';
import { httpClient } from '../api/httpClient';
import type { User } from '../types';

export const useTeamMembers = (projectId: string | undefined) => {
  const [members, setMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMembers = useCallback(async () => {
    if (!projectId) return;
    setIsLoading(true);
    try {
      const data = await httpClient<User[]>(`/projects/${projectId}/members`);
      setMembers(data);
    } catch (error) {
      console.error('Error al obtener miembros', error);
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
        const data = await httpClient<User[]>(`/projects/${projectId}/members`);
        if (!cancelled) setMembers(data);
      } catch (error) {
        if (!cancelled) console.error('Error al obtener miembros', error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    void load();
    return () => { cancelled = true; };
  }, [projectId]);

  const inviteMember = async (email: string): Promise<void> => {
    await httpClient(`/projects/${projectId}/members`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    await fetchMembers();
  };

  return { members, isLoading, refetch: fetchMembers, inviteMember };
};
