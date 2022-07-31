import { FC } from 'react';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Projects: FC<Props> = () => {
  useDocTitle();

  return (
    <div className="parent__div text-gray-900 dark:text-white">Projects</div>
  );
};

export default Projects;
