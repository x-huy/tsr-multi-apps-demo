import { createLazyRoute, Link } from '@tanstack/react-router';

export const Route = createLazyRoute('/')({
  component: IndexPage,
});

export function IndexPage() {
  return (
    <>
      <h1>Index (/foo)</h1>
      <Link to="add">Add</Link>
      <ul>
        <li>
          <Link to="view/1">View 1</Link>
        </li>
        <li>
          <Link to="view/2">View 2</Link>
        </li>
        <li>
          <Link to="view/not-found">View (not found)</Link>
        </li>
      </ul>
    </>
  );
}
