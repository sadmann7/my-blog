import { FC, useState, useId } from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../../data/navData';

interface NavProps {
  handleSelect: () => void;
}

const NavLinks: FC<NavProps> = ({ handleSelect }: NavProps) => {
  return (
    <>
      {navData.map((item: any, index) => {
        const { title, link } = item;
        return (
          <NavLink to={link} key={index} onClick={handleSelect}>
            <li
              className={`nav__link relative hover:text-gray-900 dark:hover:text-slate-50 after:bg-gray-900 dark:after:bg-white`}
            >
              {link && title}
            </li>
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
