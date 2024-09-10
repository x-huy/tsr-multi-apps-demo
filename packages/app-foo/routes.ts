import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@my/router';
import { IndexPage } from './IndexPage';
import { ViewPage } from './ViewPage';

export const fooRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'foo',
});

const fooIndexRoute = createRoute({
  getParentRoute: () => fooRoute,
  path: '/',
  component: IndexPage,
});

const viewRoute = createRoute({
  getParentRoute: () => fooRoute,
  path: 'view/$id',
  component: ViewPage,
});

fooRoute.addChildren([fooIndexRoute, viewRoute]);
