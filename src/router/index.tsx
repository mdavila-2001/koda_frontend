import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { PublicLayout } from '../components/layout/PublicLayout';
import { ProtectedLayout } from '../components/layout/ProtectedLayout';
import { Login } from '../pages/login/Login';
import { Dashboard } from '../pages/dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
