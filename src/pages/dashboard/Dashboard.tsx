import React, { useState } from 'react';
import { AppLayout } from '../../components/layout/AppLayout';
import { Modal } from '../../components/ui/Modal/Modal';
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard';
import { ProjectForm } from './components/ProjectForm';
import { useProjects } from '../../hooks/useProjects';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  const { projects, isLoading, refetch } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className={styles.grid}>
          <div className={styles.skeleton}></div>
          <div className={styles.skeleton}></div>
          <div className={styles.skeleton}></div>
        </div>
      );
    }

    if (projects.length === 0) {
      return (
        <div className={styles.emptyState}>
          <span className={`material-symbols-outlined ${styles.emptyStateIcon}`}>inventory_2</span>
          <h3 className={styles.emptyStateTitle}>Sin proyectos aún</h3>
          <p className={styles.emptyStateText}>Comienza creando tu primer proyecto técnico.</p>
        </div>
      );
    }

    return (
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  };

  return (
    <AppLayout>
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div>
              <h1 className={styles.title}>Panel de Control</h1>
              <p className={styles.subtitle}>Resumen de tus proyectos técnicos activos.</p>
            </div>
            <button 
              className={styles.newProjectButton}
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
              {' '}Nuevo Proyecto
            </button>
          </header>

          {renderContent()}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Crear Nuevo Proyecto"
        >
          <ProjectForm
            onSuccess={() => { setIsModalOpen(false); refetch(); }}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      </main>
    </AppLayout>
  );
};
