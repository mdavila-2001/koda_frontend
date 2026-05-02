import React, { useState } from 'react';
import { z } from 'zod';
import { httpClient } from '../../../api/httpClient';

const ticketSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
});

type TicketFormData = z.infer<typeof ticketSchema>;

interface TicketFormProps {
  projectId: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export const TicketForm: React.FC<TicketFormProps> = ({ projectId, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<TicketFormData>({ title: '', description: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof TicketFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setGlobalError('');

    try {
      const validatedData = ticketSchema.parse(formData);
      setIsSubmitting(true);

      await httpClient('/tickets', {
        method: 'POST',
        body: JSON.stringify({
          project_id: projectId,
          title: validatedData.title,
          description: validatedData.description,
        }),
      });

      onSuccess();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: typeof errors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof TicketFormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        setGlobalError(error instanceof Error ? error.message : 'An error occurred while creating the ticket');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
      {globalError && (
        <div className="bg-error-container text-error px-4 py-3 rounded-lg font-body-md text-sm">
          {globalError}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-label-md text-label-md text-secondary">
          Ticket Title <span className="text-error">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className={`w-full bg-[#0F172A] border ${errors.title ? 'border-error' : 'border-outline-variant/50'} rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder-on-surface-variant`}
          placeholder="e.g., Fix database connection timeout"
          disabled={isSubmitting}
        />
        {errors.title && <span className="font-label-md text-xs text-error">{errors.title}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="font-label-md text-label-md text-secondary">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className={`w-full h-32 resize-none bg-[#0F172A] border ${errors.description ? 'border-error' : 'border-outline-variant/50'} rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder-on-surface-variant`}
          placeholder="Provide detailed information about the issue..."
          disabled={isSubmitting}
        />
        {errors.description && <span className="font-label-md text-xs text-error">{errors.description}</span>}
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/30 mt-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="px-6 py-2.5 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-variant/50 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2.5 rounded-lg font-label-md text-label-md bg-primary-container text-[#0F172A] hover:brightness-110 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] disabled:opacity-50 flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
              Creating...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">add</span>
              Create Ticket
            </>
          )}
        </button>
      </div>
    </form>
  );
};
