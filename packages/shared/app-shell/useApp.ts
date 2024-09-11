import { useEffect, useState } from 'react';

export const useApp = () => {
  const [app, setApp] = useState<string | undefined>(getCurrentAppLocation);

  useEffect(() => {
    const handlePopState = () => {
      setApp(getCurrentAppLocation());
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return app;
};

const getCurrentAppLocation = () => {
  return location.hash.split('/')[1]; //e.g. #/app/child-page
};
