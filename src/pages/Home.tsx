import { FC } from 'react';
import { Hero } from '../components';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Home: FC<Props> = () => {
  useDocTitle();

  return (
    <div className="centerDiv text-gray-900 dark:text-white">
      <Hero />
    </div>
  );
};

export default Home;
