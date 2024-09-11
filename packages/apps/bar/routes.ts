import {
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { ViewPage } from './ViewPage';
import { AddPage } from './AddPage';
import { RootRoute } from './RootRoute';
import { PageNotFound } from '@my/ui';

const rootRoute = createRootRoute({
  component: RootRoute,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
}).lazy(() => import('./IndexPage').then((m) => m.Route));

const addRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'add',
  component: AddPage,
});

const viewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'view/$id',
  component: ViewPage,
});

const rootTree = rootRoute.addChildren([indexRoute, addRoute, viewRoute]);

export const router = createRouter({
  routeTree: rootTree,
  basepath: '/bar',
  history: createHashHistory(),
  defaultNotFoundComponent: PageNotFound,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
