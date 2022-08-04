import { FC } from 'react';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Me: FC<Props> = () => {
  useDocTitle();

  return <div className="centerDiv text-gray-900 dark:text-white">Me</div>;
};

export default Me;
