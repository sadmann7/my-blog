import { FC } from 'react';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Blog: FC<Props> = () => {
  useDocTitle('Sadman Sakib');

  return <div className="parent__div text-black dark:text-white">Blog</div>;
};

export default Blog;
