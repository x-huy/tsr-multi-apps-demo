import { AnyRoute, createRouter } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { PageNotFound } from '@my/components';

export const buildRouter = (routes: ReadonlyArray<AnyRoute>) => {
  const routeTree = rootRoute.addChildren(routes);
  const router = createRouter({
    routeTree,
    defaultNotFoundComponent: PageNotFound,
  });

  return router;
};

export type RouterType = ReturnType<typeof buildRouter>;
