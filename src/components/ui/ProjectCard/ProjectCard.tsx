import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../../types';

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
      className="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 shadow-[0_8px_24px_rgba(2,6,23,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,6,23,0.6)] transition-all duration-300 cursor-pointer group flex flex-col h-full block"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center text-primary-container">
          <span className="material-symbols-outlined">folder</span>
        </div>
        <span className="bg-primary-container/10 text-primary-container px-2.5 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">
          Active
        </span>
      </div>
      
      <h3 className="font-h3 text-h3 text-on-surface mb-2 group-hover:text-primary-container transition-colors">
        {project.name}
      </h3>
      
      <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 flex-grow">
        {project.description || 'No description provided for this project.'}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
        <span className="font-code text-code text-secondary">{dateStr}</span>
        <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-surface-container-high bg-surface-bright flex items-center justify-center text-[10px] text-on-surface-variant">
              +1
            </div>
        </div>
      </div>
    </Link>
  );
};
