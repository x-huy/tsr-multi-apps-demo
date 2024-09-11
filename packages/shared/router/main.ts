import {
  AnyRoute,
  createHashHistory,
  createRouter,
} from '@tanstack/react-router';
import { rootRoute } from './Root';
import { PageNotFound } from '@my/ui';

const hashHistory = createHashHistory();

export const buildRouter = (routes: ReadonlyArray<AnyRoute>) => {
  const routeTree = rootRoute.addChildren(routes);
  const router = createRouter({
    routeTree,
    history: hashHistory,
    defaultNotFoundComponent: PageNotFound,
  });

  return router;
};

export type RouterType = ReturnType<typeof buildRouter>;
