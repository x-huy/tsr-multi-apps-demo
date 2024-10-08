import { getRouteApi } from '@tanstack/react-router';

const route = getRouteApi('/view/$id');

export const ViewPage = () => {
  const params = route.useParams();
  return <div>/foo/view page {params.id}</div>;
};
