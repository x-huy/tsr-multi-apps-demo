import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';

export const AppFoo = () => {
  return <RouterProvider router={router} />;
};
