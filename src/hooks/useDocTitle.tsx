import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { titleCase } from '../functions/formatString';

export const useDocTitle = () => {
  const location = useLocation();
  const staticTitle = 'Sadman Sakib';

  useEffect(() => {
    const activePath = location.pathname;

    if (activePath === '/') {
      document.title = staticTitle;
    } else {
      const formatedActiveTitle = titleCase(activePath).replace('/', '');
      document.title = `${formatedActiveTitle} | ${staticTitle}`;
    }
  }, [location]);
};
