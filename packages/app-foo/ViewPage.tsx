import { getRouteApi } from '@tanstack/react-router';

const route = getRouteApi('/foo/view/$id');

export const ViewPage = () => {
  const params = route.useParams();
  return <div>/foo/view page {params.id}</div>;
};
