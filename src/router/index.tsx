import type { RouteObject } from 'react-router';
import RootLayout from 'layouts/Root';
import AuthLayout from 'layouts/Auth';

import { RoutePath } from './types';

export const routes: RouteObject[] = [
  {
    path: '*',
    element: <div>Page not fount</div>,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: RoutePath.Root,
        element: <div>Main Page</div>,
      },
      {
        path: RoutePath.Root,
        element: <div>Second Main Page</div>,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: RoutePath.Login,
        element: <div>Login Page</div>,
      },
      {
        path: RoutePath.Register,
        element: <div>Register Page</div>,
      },
    ],
  },
];
