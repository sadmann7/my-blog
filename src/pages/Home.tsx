import { FC } from 'react';
import { Hero } from '../components';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Home: FC<Props> = () => {
  useDocTitle('Sadman Sakib');

  return (
    <div className="parent__div text-black dark:text-white">
      <Hero />
    </div>
  );
};

export default Home;
