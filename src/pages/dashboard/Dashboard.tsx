import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/Button/Button';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <h1>Dashboard Principal</h1>
      <p>Bienvenido, {user?.name || 'Usuario'}. Has iniciado sesión correctamente.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <Button onClick={logout} variant="danger">
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};
