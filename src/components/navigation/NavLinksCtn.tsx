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
      } ul--clamp font-medium bg-purple-300 dark:bg-slate-500 md:bg-transparent md:dark:bg-transparent text-gray-700 dark:text-slate-200 md:flex md:relative md:top-auto md:left-auto md:translate-x-0 md:p-0 md:h-auto md:flex-row md:gap-10`}
    >
      {navData.map((item: any) => {
        const { id, label, url } = item;
        return (
          <NavLink
            to={url}
            key={id}
            className="hover:scale-110 active:scale-90 md:hover:scale-100 md:active:scale-100 transition-[scale] duration-300 ease-in"
            onClick={handleSelect}
          >
            <li
              className={`nav__link relative hover:text-gray-900 dark:hover:text-slate-50 after:bg-gray-900 dark:after:bg-white md:opacity-100 `}
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
        <li className="nav__link relative hover:text-gray-900 dark:hover:text-slate-50 after:bg-gray-900 dark:after:bg-white hover:scale-110 active:scale-90 md:hover:scale-100 md:active:scale-100 transition-[scale] duration-300 ease-in">
          Github
        </li>
      </motion.a>
    </ul>
  );
};

export default NavLinksCtn;
