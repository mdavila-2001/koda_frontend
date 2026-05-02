import React, { useState } from 'react';
import { z } from 'zod';
import { Input } from '../../../components/ui/Input/Input';
import { Button } from '../../../components/ui/Button/Button';
import { httpClient } from '../../../api/httpClient';
import styles from './ProjectForm.module.css';

const createProjectSchema = z.object({
  name: z.string()
    .min(3, "Project name must be at least 3 characters long")
    .max(100, "Project name must be at most 100 characters"),
  description: z.string()
    .max(500, "Description must be at most 500 characters")
    .optional()
});

interface ProjectFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSuccess, onCancel }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearFieldError = (name: string) => {
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGlobalError('');
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    };

    // Zod Client-side Validation
    const result = createProjectSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0].toString()] = issue.message;
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
      const message = error instanceof Error ? error.message : 'Error creating project';
      setGlobalError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {globalError && <div className={styles.globalError}>{globalError}</div>}

      <div className={styles.inputGroup}>
        <Input
          label="Project Name"
          name="name"
          type="text"
          placeholder="e.g. Core Infrastructure"
          onChange={() => clearFieldError('name')}
          error={errors.name}
          labelClassName={styles.customLabel}
          inputClassName={styles.customInput}
        />
      </div>

      <div className={styles.textAreaWrapper}>
        <label className={styles.customLabel} htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className={styles.textArea}
          placeholder="Optional project details..."
          onChange={() => clearFieldError('description')}
        />
        {errors.description && <span className={styles.errorText}>{errors.description}</span>}
      </div>

      <Button type="submit" isLoading={isLoading} className={styles.submitBtn}>
        <span>Create Project</span>
      </Button>
    </form>
  );
};
