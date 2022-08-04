import { FC } from 'react';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Blog: FC<Props> = () => {
  useDocTitle();

  return <div className="centerDiv text-gray-900 dark:text-white">Blog</div>;
};

export default Blog;
