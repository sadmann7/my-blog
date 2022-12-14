import { FC } from 'react';
import { format } from 'date-fns';

const Footer: FC = () => {
  return (
    <div className="centerDiv text-gray-900 dark:text-slate-200">
      <p className="baseClamp text-center font-medium ">
        Sadman Sakib &copy; {format(new Date(), 'yyyy')}
      </p>
    </div>
  );
};

export default Footer;
