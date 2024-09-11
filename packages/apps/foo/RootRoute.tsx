import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const RootRoute = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};
