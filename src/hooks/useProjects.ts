import { useState, useEffect, useCallback } from 'react';
import { httpClient } from '../api/httpClient';
import type { Project } from '../types';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await httpClient<Project[]>('/projects');
      setProjects(data);
    } catch (error) {
      console.error('Error al obtener proyectos', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      try {
        const data = await httpClient<Project[]>('/projects');
        if (!cancelled) setProjects(data);
      } catch (error) {
        if (!cancelled) console.error('Error al obtener proyectos', error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    void load();
    return () => { cancelled = true; };
  }, []);

  return { projects, isLoading, refetch: fetchProjects };
};
