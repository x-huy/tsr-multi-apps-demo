import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';

export const AppBar = () => {
  return <RouterProvider router={router} />;
};
