import type { RouteObject } from 'react-router';
import { RoutePath } from '@/enums';
import MainLayout from '@/layouts/MainLayout';

export const routes: RouteObject[] = [
  {
    path: '*',
    element: <div>Page not fount</div>,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: RoutePath.Root,
        element: <div>Main Page</div>,
      },
      {
        path: RoutePath.Login,
        element: <div>Login page</div>,
      },
    ],
  },
];
