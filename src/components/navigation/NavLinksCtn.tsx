import { FC, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navData } from '../../data/navData';

interface Props {
  isOpen: boolean;
  handleSelect: () => void;
}

const NavLinksCtn: FC<Props> = ({ isOpen, handleSelect }: Props) => {
  return (
    <ul
      className={`${
        isOpen ? 'nav__mobile nav__mobile--active' : 'nav__mobile'
      } ul--clamp bg-purple-300 font-medium text-gray-700 dark:bg-slate-500 dark:text-slate-200 md:relative md:top-auto md:left-auto md:flex md:h-auto md:translate-x-0 md:flex-row md:gap-10 md:bg-transparent md:p-0 md:dark:bg-transparent`}
    >
      {navData.map((item: any) => {
        const { id, label, url } = item;
        return (
          <NavLink
            to={url}
            key={id}
            className="transition-[scale] duration-300 ease-in hover:scale-110 active:scale-90 md:hover:scale-100 md:active:scale-100"
            onClick={handleSelect}
          >
            <li
              className={`nav__link relative after:bg-gray-900 hover:text-gray-900 dark:after:bg-white dark:hover:text-slate-50 md:opacity-100 `}
            >
              {url && label}
            </li>
          </NavLink>
        );
      })}
      <motion.a
        href="https://github.com/sadmann7"
        target="_blank"
        className="nav__link--rest"
        onClick={handleSelect}
      >
        <li className="nav__link relative transition-[scale] duration-300 ease-in after:bg-gray-900 hover:scale-110 hover:text-gray-900 active:scale-90 dark:after:bg-white dark:hover:text-slate-50 md:hover:scale-100 md:active:scale-100">
          Github
        </li>
      </motion.a>
    </ul>
  );
};

export default NavLinksCtn;
