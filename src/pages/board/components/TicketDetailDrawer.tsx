import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { httpClient } from '../../../api/httpClient';
import type { Ticket, User, Project } from '../../../types';
import { useAuth } from '../../../hooks/useAuth';

interface TicketDetailDrawerProps {
  ticket: Ticket;
  onClose: () => void;
  onUpdate: () => void;
}

export const TicketDetailDrawer: React.FC<TicketDetailDrawerProps> = ({ ticket, onClose, onUpdate }) => {
  const { user } = useAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const [isUpdating, setIsUpdating] = useState(false);
  const [members, setMembers] = useState<User[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!projectId) return;
      setIsLoadingData(true);
      try {
        const [projectData, membersData] = await Promise.all([
          httpClient<Project>(`/projects/${projectId}`),
          httpClient<User[]>(`/projects/${projectId}/members`)
        ]);
        setProject(projectData);
        setMembers(membersData);
      } catch (error) {
        console.error('Failed to fetch project data', error);
      } finally {
        setIsLoadingData(false);
      }
    };
    fetchData();
  }, [projectId]);

  const handleAssignUser = async (userId: string) => {
    setIsUpdating(true);
    try {
      await httpClient(`/tickets/${ticket.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ assigned_user_id: userId }),
      });
      onUpdate();
    } catch (error) {
      console.error('Failed to assign ticket', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAssignToMe = () => {
    if (user) handleAssignUser(user.id);
  };

  const handleUpdateStatus = async (newStatus: Ticket['status']) => {
    setIsUpdating(true);
    try {
      await httpClient(`/tickets/${ticket.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });
      onUpdate();
    } catch (error) {
      console.error('Failed to update ticket', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const isPending = ticket.status === 'PENDING';

  return (
    <aside className="absolute right-0 top-0 h-full w-[440px] bg-[#111827] rounded-l-2xl shadow-[-16px_0_32px_rgba(2,6,23,0.8)] z-50 flex flex-col border-l border-outline-variant/30 transform transition-transform">
      <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <span className="font-code text-code text-secondary px-2 py-1 bg-surface-variant/50 rounded border border-outline-variant/50">
            {ticket.id.substring(0,8)}
          </span>
          <div className="flex items-center gap-1 px-2 py-1 bg-tertiary-container/10 rounded border border-tertiary-container/20">
            <div className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></div>
            <span className="font-label-md text-label-md text-tertiary-container uppercase tracking-widest">{ticket.status}</span>
          </div>
        </div>
        <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-variant/50 transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-secondary">Title</label>
          <input readOnly className="w-full bg-[#0F172A] border border-outline-variant/50 rounded-lg px-4 py-3 font-h3 text-h3 text-on-surface focus:outline-none transition-all shadow-inner" type="text" value={ticket.title}/>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-secondary">Description</label>
          <textarea readOnly className="w-full h-40 bg-[#0F172A] border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface-variant focus:outline-none transition-all shadow-inner resize-none" value={ticket.description || ''}></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-secondary">Assignee</label>
          {isLoadingData ? (
             <div className="text-on-surface-variant text-sm py-3">Loading assignees...</div>
          ) : user?.id === project?.owner_id ? (
             <select
                value={ticket.assigned_user_id || ''}
                onChange={(e) => handleAssignUser(e.target.value)}
                disabled={isUpdating}
                className="w-full bg-[#0F172A] border border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] disabled:opacity-50 transition-all cursor-pointer"
             >
                <option value="" disabled>Select an assignee...</option>
                {members.map(member => (
                   <option key={member.id} value={member.id}>
                     {member.name} ({member.email})
                   </option>
                ))}
             </select>
          ) : ticket.assigned_user_id ? (
             <div className="flex items-center gap-2 text-primary-container bg-primary-container/10 p-3 rounded-lg border border-primary-container/20">
                <span className="material-symbols-outlined">person_check</span>
                <span className="font-label-md">Assigned to Team Member</span>
             </div>
          ) : (
             <button
                onClick={handleAssignToMe}
                disabled={isUpdating}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-dashed border-outline-variant hover:border-primary-container hover:text-primary-container transition-colors text-on-surface-variant font-label-md disabled:opacity-50"
             >
                <span className="material-symbols-outlined">person_add</span>
                Assign to me
             </button>
          )}
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/30">
          <div className="flex justify-between items-center text-body-md font-body-md text-secondary">
            <span>Created</span>
            <span className="text-on-surface">{new Date(ticket.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-outline-variant/30 bg-[#111827]/80 backdrop-blur-md rounded-bl-2xl">
        <button 
          onClick={() => handleUpdateStatus(isPending ? 'IN_PROGRESS' : 'COMPLETED')}
          disabled={isUpdating || ticket.status === 'COMPLETED' || !ticket.assigned_user_id}
          className="w-full bg-[#38BDF8] text-[#0F172A] font-h3 text-h3 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#7bd0ff] transition-colors shadow-[0_0_15px_rgba(56,189,248,0.2)] disabled:opacity-50"
        >
          <span className="material-symbols-outlined">
            {isPending ? 'play_arrow' : 'done'}
          </span>
          {isUpdating ? 'Updating...' : isPending ? 'Start Progress' : 'Mark as Completed'}
        </button>
        <button 
          className="w-full mt-4 text-[#EF4444] border border-[#EF4444]/20 bg-[#EF4444]/5 py-2.5 rounded-lg font-body-md text-body-md hover:bg-[#EF4444]/10 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-sm">delete</span>
          Delete Ticket
        </button>
      </div>
    </aside>
  );
};
