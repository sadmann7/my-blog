import { FC } from 'react';
import error from '../assets/images/404.gif';
import { useDocTitle } from '../hooks/useDocTitle';

interface Props {}

const Error: FC<Props> = () => {
  useDocTitle('Sadman Sakib', 404);

  return (
    <div className="parent__div my-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="flex flex-col gap-4 md:w-2/5">
        <p className="h1--clamp text-gray-900 dark:text-slate-50">
          404 - The page you were looking for doesn't exist
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-slate-300">
          You may have mistyped the address or the page have been moved
        </p>
      </div>
      <div className="w-[23vw] h-[23vw] min-w-[15rem] min-h-[15rem]">
        <img
          src={error}
          alt="404"
          className="w-full h-full object-cover rounded-full border-4 border-red-400"
        />
      </div>
    </div>
  );
};

export default Error;
