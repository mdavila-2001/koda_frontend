export type TicketStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface Ticket {
  id: string;
  project_id: string;
  title: string;
  description?: string;
  status: TicketStatus;
  assigned_user_id: string | null;
  created_at: string;
}
