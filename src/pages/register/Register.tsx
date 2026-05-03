import React, { useState } from 'react';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button/Button';
import { httpClient } from '../../api/httpClient';
import styles from './Register.module.css';

const registerSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }).max(100),
  email: z.string().email({ message: 'Formato de email inválido' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState('');
  const [globalSuccess, setGlobalSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearFieldError = (name: string) => {
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const formAction = async (formData: FormData) => {
    setGlobalError('');
    setGlobalSuccess('');
    setErrors({});
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Validación con Zod
    const result = registerSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0].toString()] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Petición al Backend
    setIsLoading(true);
    try {
      await httpClient('/auth/register', {
        method: 'POST',
        body: JSON.stringify(result.data),
      });

      setGlobalSuccess('Registro exitoso. Redirigiendo al login...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al registrar usuario';
      setGlobalError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.bgImage} />
      <div className={styles.bgGradient} />
      
      <div className={styles.registerCard}>
        <div className={styles.header}>
          <span className={`material-symbols-outlined ${styles.headerIcon}`}>person_add</span>
          <h1 className={styles.headerTitle}>Registro</h1>
        </div>

        <form action={formAction} className={styles.form}>
          {globalError && <div className={styles.globalError}>{globalError}</div>}
          {globalSuccess && <div className={styles.globalSuccess}>{globalSuccess}</div>}

          <div className={styles.inputGroup}>
            <Input
              label="Nombre Completo"
              name="name"
              type="text"
              placeholder="Ej. Juan Pérez"
              onChange={() => clearFieldError('name')}
              error={errors.name}
              icon={<span className={`material-symbols-outlined ${styles.inputIcon}`}>badge</span>}
              labelClassName={styles.customLabel}
              inputClassName={styles.customInput}
            />
          </div>

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
              placeholder="Mínimo 8 caracteres"
              onChange={() => clearFieldError('password')}
              error={errors.password}
              icon={<span className={`material-symbols-outlined ${styles.inputIcon}`}>lock</span>}
              labelClassName={styles.customLabel}
              inputClassName={styles.customInput}
            />
          </div>

          <Button type="submit" isLoading={isLoading} className={styles.submitBtn}>
            <span>Crear Cuenta</span>
            {!isLoading && <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>how_to_reg</span>}
          </Button>

          <Link to="/" className={styles.navLink}>
            ¿Ya tienes cuenta? Inicia sesión aquí
          </Link>
        </form>
      </div>
    </div>
  );
};
