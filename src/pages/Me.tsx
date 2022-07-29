import { FC } from 'react';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Me: FC<Props> = () => {
  useDocTitle('Sadman Sakib');

  return <div className="parent__div text-black dark:text-white">Me</div>;
};

export default Me;
