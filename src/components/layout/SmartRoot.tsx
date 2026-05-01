import { useAuth } from '../../hooks/useAuth';
import { Login } from '../../pages/login/Login';
import { Dashboard } from '../../pages/dashboard/Dashboard';

/**
 * SmartRoot: Decide qué renderizar en '/' según el estado de autenticación.
 * - Sin token  → <Login />
 * - Con token  → <Dashboard />
 * La URL siempre permanece en '/'.
 */
export const SmartRoot = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard /> : <Login />;
};
