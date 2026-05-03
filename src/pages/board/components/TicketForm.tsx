import React, { useState } from 'react';
import { z } from 'zod';
import { httpClient } from '../../../api/httpClient';
import styles from './TicketForm.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form}>
      {globalError && (
        <div className={styles.globalError}>
          {globalError}
        </div>
      )}

      <div className={styles.formField}>
        <label htmlFor="title" className={styles.formLabel}>
          Ticket Title <span className={styles.required}>*</span>
        </label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className={`${styles.formInput} ${errors.title ? styles.formInputError : ''}`}
          placeholder="e.g., Fix database connection timeout"
          disabled={isSubmitting}
        />
        {errors.title && <span className={styles.fieldError}>{errors.title}</span>}
      </div>

      <div className={styles.formField}>
        <label htmlFor="description" className={styles.formLabel}>
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className={`${styles.formTextarea} ${errors.description ? styles.formTextareaError : ''}`}
          placeholder="Provide detailed information about the issue..."
          disabled={isSubmitting}
        />
        {errors.description && <span className={styles.fieldError}>{errors.description}</span>}
      </div>

      <div className={styles.formActions}>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? (
            <>
              <span className={`material-symbols-outlined ${styles.spinIcon}`} style={{ fontSize: '18px' }}>sync</span>
              Creating...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
              Create Ticket
            </>
          )}
        </button>
      </div>
    </form>
  );
};
