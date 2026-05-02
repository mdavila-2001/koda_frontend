import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AppLayout } from '../../components/layout/AppLayout';
import { Modal } from '../../components/ui/Modal/Modal';
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard';
import type { Project } from '../../types';
import { ProjectForm } from './components/ProjectForm';
import { httpClient } from '../../api/httpClient';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    try {
      const projectsData = await httpClient<Project[]>('/projects');
      setProjects(projectsData);
    } catch (error) {
      console.error('Failed to fetch projects', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <AppLayout>
      <main className="ml-[240px] flex-1 p-8 xl:p-12 z-10">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="font-h1 text-h1 text-on-surface mb-2">Dashboard</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Overview of your active technical projects.</p>
          </div>
          <button 
            className="bg-primary-container text-[#0F172A] font-label-md text-label-md px-6 py-3 rounded hover:brightness-110 transition-all flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="material-symbols-outlined text-sm">add</span>
            New Project
          </button>
        </header>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[200px] bg-surface-container-high animate-pulse rounded-lg border border-outline-variant/30"></div>
            <div className="h-[200px] bg-surface-container-high animate-pulse rounded-lg border border-outline-variant/30"></div>
            <div className="h-[200px] bg-surface-container-high animate-pulse rounded-lg border border-outline-variant/30"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 shadow-[0_8px_24px_rgba(2,6,23,0.4)] flex flex-col items-center justify-center py-20">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">inventory_2</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-2">No projects yet</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Get started by creating your first technical project.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create New Project"
        >
          <ProjectForm
            onSuccess={() => { setIsModalOpen(false); fetchProjects(); }}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      </main>
    </AppLayout>
  );
};
