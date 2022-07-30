import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { titleCase } from '../functions/formatString';

export const useDocTitle = (main: string, active?: string | number) => {
  const mainTitle = main;
  const location = useLocation();

  useEffect(() => {
    const activeTitle = location.pathname;
    if (activeTitle === '/') {
      document.title = mainTitle;
    } else {
      const formatedActiveTitle = titleCase(location.pathname).replace('/', '');
      document.title = `${active || formatedActiveTitle} | ${mainTitle}`;
    }
  }, [document.title]);
};
