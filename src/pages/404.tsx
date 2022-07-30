import { FC } from 'react';
import error from '../../public/images/404.gif';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Error: FC<Props> = () => {
  useDocTitle('Sadman Sakib', 404);

  return (
    <div className="parent__div my-20 flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
      <div className="flex flex-col gap-4 md:w-2/5">
        <h1 className="h1--clamp text-gray-900 dark:text-slate-50">
          404 - The page you were looking for doesn't exist
        </h1>
        <h2 className="text-xl text-gray-900 dark:text-slate-300 sm:text-2xl md:text-3xl">
          You may have mistyped the address or the page have been moved
        </h2>
      </div>
      <div className="h-[23vw] min-h-[15rem] w-[23vw] min-w-[15rem]">
        <img
          src={error}
          alt="404"
          className="h-full w-full rounded-full border-4 border-red-400 object-cover"
        />
      </div>
    </div>
  );
};

export default Error;
