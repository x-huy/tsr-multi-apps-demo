import { StrictMode } from 'react';
import { createRoute, RouterProvider } from '@tanstack/react-router';
import { IndexPage } from './IndexPage';
import { fooRoute } from '@my/app-foo';
import { buildRouter, rootRoute } from '@my/router';

import './index.css';

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});

export const router = buildRouter([indexRoute, fooRoute]);

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const AppShell = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
