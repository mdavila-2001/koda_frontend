import React, { useState } from 'react';
import { z } from 'zod';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button/Button';
import { useAuth } from '../../hooks/useAuth';
import { httpClient } from '../../api/httpClient';
import type { User } from '../../types';
import styles from './Login.module.css';

const loginSchema = z.object({
  email: z.email({ message: 'Email inválido' }),
  password: z.string().min(1, { message: 'La contraseña es requerida' }),
});

export const Login: React.FC = () => {
  const { login } = useAuth();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearFieldError = (name: string) => {
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const formAction = async (formData: FormData) => {
    setGlobalError('');
    setErrors({});
    
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // 2. Validación con Zod
    const result = loginSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0].toString()] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // 3. Petición al Backend
    setIsLoading(true);
    try {
      const response = await httpClient<{ token: string; user: User }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(result.data),
      });

      login(response.token, response.user);
      // Redirigir al dashboard (manejado por el Router)
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al iniciar sesión';
      setGlobalError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.bgImage} />
      <div className={styles.bgGradient} />
      
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <span className={`material-symbols-outlined ${styles.headerIcon}`}>dns</span>
          <h1 className={styles.headerTitle}>KODA</h1>
        </div>

        <form action={formAction} className={styles.form}>
          {globalError && <div className={styles.globalError}>{globalError}</div>}

          <div className={styles.inputGroup}>
            <Input
              label="Correo Electrónico"
              name="email"
              type="email"
              placeholder="user@koda.com"
              onChange={() => clearFieldError('email')}
              error={errors.email}
              icon={<span className={`material-symbols-outlined ${styles.inputIcon}`}>person</span>}
              labelClassName={styles.customLabel}
              inputClassName={styles.customInput}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <Input
              label="Contraseña"
              name="password"
              type="password"
              placeholder="••••••••••••"
              onChange={() => clearFieldError('password')}
              error={errors.password}
              icon={<span className={`material-symbols-outlined ${styles.inputIcon}`}>lock</span>}
              labelClassName={styles.customLabel}
              inputClassName={styles.customInput}
            />
          </div>

          <div className={styles.optionsRow}>
            <label className={styles.checkboxLabel}>
              <div className={styles.checkboxWrapper}>
                <input type="checkbox" className={styles.checkboxInput} />
                <span className={`material-symbols-outlined ${styles.checkboxIcon}`}>check</span>
              </div>
              <span className={styles.checkboxText}>Mantener Sesión Activa</span>
            </label>
          </div>

          <Button type="submit" isLoading={isLoading} className={styles.submitBtn}>
            <span>Iniciar Sesión</span>
            {!isLoading && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
          </Button>
        </form>
      </div>
    </div>
  );
};