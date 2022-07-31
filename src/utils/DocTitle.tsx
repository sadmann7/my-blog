import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { titleCase } from '../functions/formatString';

interface Props {
  newTitle?: string | number;
}

const DocTitle: FC<Props> = ({ newTitle }: Props) => {
  const location = useLocation();
  const activePath = location.pathname;
  const activeTitle = titleCase(activePath).replace('/', '');
  const staticTitle = 'Sadman Sakib';
  let divider = '|';

  if (activePath === '/') {
    divider = '';
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {newTitle || activeTitle} {divider} {staticTitle}
        </title>
      </Helmet>
    </HelmetProvider>
  );
};

export default DocTitle;
