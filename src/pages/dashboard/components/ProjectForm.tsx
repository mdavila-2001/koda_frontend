import React, { useState } from 'react';
import { z } from 'zod';
import { Input } from '../../../components/ui/Input/Input';
import { Button } from '../../../components/ui/Button/Button';
import { httpClient } from '../../../api/httpClient';
import styles from './ProjectForm.module.css';

const createProjectSchema = z.object({
  name: z.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),
  description: z.string()
    .max(500, "La descripción no puede superar los 500 caracteres")
    .optional()
});

type ProjectFormData = z.infer<typeof createProjectSchema>;

interface ProjectFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSuccess, onCancel }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setGlobalError('');

    const formData = new FormData(e.currentTarget);
    const data: ProjectFormData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    };

    const result = createProjectSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        const path = issue.path[0];
        if (typeof path === 'string' || typeof path === 'number') {
          fieldErrors[path.toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      await httpClient('/projects', {
        method: 'POST',
        body: JSON.stringify(result.data),
      });
      onSuccess();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al crear el proyecto';
      setGlobalError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {globalError && (
        <div className={styles.globalError}>
          {globalError}
        </div>
      )}

      <div className={styles.formGroup}>
        <Input
          label="Nombre del Proyecto"
          name="name"
          id="project-name"
          placeholder="Ej. Koda App"
          error={errors.name}
          disabled={isLoading}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="project-description" className={styles.label}>Descripción</label>
        <textarea
          id="project-description"
          name="description"
          className={`${styles.textarea} ${errors.description ? styles.textareaError : ''}`}
          placeholder="Describe brevemente el propósito de este proyecto..."
          disabled={isLoading}
        />
        {errors.description && <p className={styles.errorText}>{errors.description}</p>}
      </div>

      <div className={styles.actions}>
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          isLoading={isLoading}
        >
          Crear Proyecto
        </Button>
      </div>
    </form>
  );
};
