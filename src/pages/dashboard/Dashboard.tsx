import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AppLayout } from '../../components/layout/AppLayout';
import { Modal } from '../../components/ui/Modal/Modal';
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard';
import type { Project } from '../../types';
import { ProjectForm } from './components/ProjectForm';
import { httpClient } from '../../api/httpClient';
import styles from './Dashboard.module.css';

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
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div>
              <h1 className={styles.title}>Dashboard</h1>
              <p className={styles.subtitle}>Overview of your active technical projects.</p>
            </div>
            <button 
              className={styles.newProjectButton}
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
              New Project
            </button>
          </header>

          {isLoading ? (
            <div className={styles.grid}>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
            </div>
          ) : projects.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={`material-symbols-outlined ${styles.emptyStateIcon}`}>inventory_2</span>
              <h3 className={styles.emptyStateTitle}>No projects yet</h3>
              <p className={styles.emptyStateText}>Get started by creating your first technical project.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

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
