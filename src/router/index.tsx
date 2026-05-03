import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { SmartRoot } from '../components/layout/SmartRoot';
import { Register } from '../pages/register/Register';
import { TicketBoard } from '../pages/board/TicketBoard';
import { TeamSettings } from '../pages/team/TeamSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SmartRoot />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'projects/:projectId/board',
        element: <TicketBoard />,
      },
      {
        path: 'projects/:projectId/team',
        element: <TeamSettings />,
      },
    ],
  },
]);
