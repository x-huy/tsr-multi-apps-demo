import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@my/router';
import { ViewPage } from './ViewPage';
import { AddPage } from './AddPage';

export const fooRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'foo',
});

const indexRoute = createRoute({
  getParentRoute: () => fooRoute,
  path: '/',
}).lazy(() => import('./IndexPage').then((m) => m.Route));

const addRoute = createRoute({
  getParentRoute: () => fooRoute,
  path: 'add',
  component: AddPage,
});

const viewRoute = createRoute({
  getParentRoute: () => fooRoute,
  path: 'view/$id',
  component: ViewPage,
});

fooRoute.addChildren([indexRoute, addRoute, viewRoute]);
