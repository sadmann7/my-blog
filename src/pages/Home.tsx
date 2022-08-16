import { FC } from 'react';
import { Hero } from '../components';
import BlogList from '../components/blogs/BlogList';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Home: FC<Props> = () => {
  useDocTitle();

  return (
    <div className="centerDiv">
      <Hero />
      <BlogList />
    </div>
  );
};

export default Home;
