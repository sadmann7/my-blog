import { FC, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navData } from '../../data/navData';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
  hideMenu: () => void;
  showMenu: () => void;
}

const NavLinksCtn: FC<Props> = ({
  isOpen,
  toggleMenu,
  hideMenu,
  showMenu,
}: Props) => {
  return (
    <ul
      className={`${
        isOpen ? 'nav__mobile nav__mobile--active' : 'nav__mobile'
      } ulClamp bg-purple-300 font-medium text-gray-700 dark:bg-slate-500 dark:text-slate-200 md:relative md:top-auto md:left-auto md:flex md:h-auto md:w-auto md:translate-x-0 md:flex-row md:gap-10 md:bg-transparent md:p-0 md:dark:bg-transparent`}
    >
      {navData.map((item: any) => {
        const { id, label, url } = item;
        return (
          <NavLink
            to={url}
            key={id}
            className="transition-transform duration-200 ease-linear hover:scale-110 active:scale-90 md:transition-none md:hover:scale-100 md:active:scale-100"
            onClick={toggleMenu}
            onBlur={hideMenu}
            onFocus={showMenu}
          >
            <li className="nav__link relative after:bg-gray-900 hover:text-gray-900 dark:after:bg-white dark:hover:text-slate-50">
              {url && label}
            </li>
          </NavLink>
        );
      })}
      <motion.a
        href="https://github.com/sadmann7"
        target="_blank"
        className="transition-transform duration-200 ease-linear hover:scale-110 active:scale-90 md:transition-none md:hover:scale-100 md:active:scale-100"
      >
        <li className="nav__link relative after:bg-gray-900 hover:text-gray-900 dark:after:bg-white dark:hover:text-slate-50">
          Github
        </li>
      </motion.a>
    </ul>
  );
};

export default NavLinksCtn;
