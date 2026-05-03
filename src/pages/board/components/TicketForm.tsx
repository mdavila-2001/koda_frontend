import React, { useState } from 'react';
import { z } from 'zod';
import { httpClient } from '../../../api/httpClient';
import styles from './TicketForm.module.css';

const ticketSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
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
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const newErrors: typeof errors = {};
        // Removed deprecated ZodIssue type hint, letting TS infer from issues array
        error.issues.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof TicketFormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        setGlobalError(error instanceof Error ? error.message : 'Ocurrió un error al crear el ticket');
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
        <label htmlFor="ticket-form-title" className={styles.formLabel}>
          Título del Ticket <span className={styles.required}>*</span>
        </label>
        <input
          id="ticket-form-title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className={`${styles.formInput} ${errors.title ? styles.formInputError : ''}`}
          placeholder="Ej. Corregir timeout de conexión a base de datos"
          disabled={isSubmitting}
        />
        {errors.title && <span className={styles.fieldError}>{errors.title}</span>}
      </div>

      <div className={styles.formField}>
        <label htmlFor="ticket-form-description" className={styles.formLabel}>
          Descripción
        </label>
        <textarea
          id="ticket-form-description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className={`${styles.formTextarea} ${errors.description ? styles.formTextareaError : ''}`}
          placeholder="Proporciona información detallada sobre el problema..."
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
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? (
            <>
              <span className={`material-symbols-outlined ${styles.spinIcon}`} style={{ fontSize: '18px' }}>sync</span>
              {' '}Creando...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
              {' '}Crear Ticket
            </>
          )}
        </button>
      </div>
    </form>
  );
};
