import { FC } from 'react';
import moment from 'moment';

const Footer: FC = () => {
  return (
    <div className="centerDiv text-gray-900 dark:text-white">
      <p className="baseClamp text-center font-medium ">
        Sadman Sakib &copy; {moment().format('yyyy')}
      </p>
    </div>
  );
};

export default Footer;
