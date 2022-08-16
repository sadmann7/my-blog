import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { titleCase } from '../functions/formatString';

export const useDocTitle = (newTitle?: string | number) => {
  const location = useLocation();
  const staticTitle = 'Sadman Sakib';

  useEffect(() => {
    const activePath = location.pathname;

    if (activePath === '/') {
      document.title = staticTitle;
    } else {
      const activeTitle = titleCase(
        activePath.substring(activePath.lastIndexOf('/') + 1)
      );
      document.title = `${newTitle || activeTitle} | ${staticTitle}`;
    }
  }, [location, newTitle]);
};
