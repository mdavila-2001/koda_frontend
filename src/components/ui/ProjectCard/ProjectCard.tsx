import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const dateStr = new Date(project.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link 
      to={`/projects/${project.id}/board`}
      className={styles.card}
    >
      <div className={styles.header}>
        <div className={styles.tag}>
          Active
        </div>
      </div>
      
      <h3 className={styles.title}>
        {project.name}
      </h3>
      
      <p className={styles.description}>
        {project.description || 'No description provided for this project.'}
      </p>
      
      <div className={styles.footer}>
        <div className={styles.date}>
          <span className={`material-symbols-outlined ${styles.icon}`}>calendar_today</span>
          <span className={styles.dateText}>{dateStr}</span>
        </div>
      </div>
    </Link>
  );
};
