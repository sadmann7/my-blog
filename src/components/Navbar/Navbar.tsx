import { FC, useState, useId, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navData } from '../../data/navData';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import NavLinks from './NavLinks';

const Navbar: FC = () => {
  /** dark mode */
  const [isDark, setIsDark] = useState<boolean>(true);

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const switchTheme = () => {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
    setIsDark(!isDark);
  };

  /** nav background */
  const [isChanged, setIsChanged] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY > 0) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  };

  window.addEventListener('scroll', changeNavBg);

  /** mobile nav */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navBtnRef = useRef<HTMLButtonElement>(null);
  const themeBtnRef = useRef<HTMLButtonElement>(null);

  const hideMobileMenu = (e: any) => {
    if (
      !e.target.classList.contains('nav__link') &&
      !e.target.classList.contains('theme__btn') &&
      !(e.target == themeBtnRef.current) &&
      !(e.target === themeBtnRef.current?.childNodes[0])
    ) {
      setIsOpen(false);
    }
  };
  useOnClickOutside(navBtnRef, hideMobileMenu);

  /** animation and fixes */
  const handleSelect = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-[6rem] w-[100%] font-medium text-[1.1rem]  whitespace-nowrap transition-all">
      <div
        className={`${
          isChanged && 'bg-red-400'
        } fixed top-0 left-0 w-[100%] z-50 transition-all`}
      >
        <nav className="w-[89vw] max-w-6xl mx-auto py-7 md:py-5 justify-between md:flex md:items-center md:justify-between">
          <div className="md:flex gap-20">
            <div className="flex justify-between items-center">
              <NavLink to="/">
                <p className="nav__logo relative font-semibold text-lg text-gray-800 dark:text-slate-50 hover:text-black dark:hover:text-white  after:bg-gray-900 dark:after:bg-white">
                  Sadman Sakib
                </p>
              </NavLink>
              <button
                className="md:hidden dark:text-white"
                ref={navBtnRef}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
              </button>
            </div>
            <ul
              className={`${
                isOpen ? 'nav__mobile nav__mobile--active' : 'nav__mobile'
              } 
              }  md:bg-transparent md:flex md:relative md:top-auto md:left-auto md:translate-x-0 md:p-0 md:h-auto md:flex-row md:gap-10 text-gray-600 dark:text-slate-200 transition-all`}
            >
              <NavLinks handleSelect={handleSelect} />
              <a
                href="https://github.com/sadmann7"
                target="_blank"
                onClick={handleSelect}
              >
                <li className="nav__link relative hover:text-gray-900 dark:hover:text-white after:bg-gray-900 dark:after:bg-white">
                  Github
                </li>
              </a>
            </ul>
          </div>
          <button
            className={`${
              isOpen ? 'theme__btn theme__btn--active' : 'theme__btn'
            }  md:hover:scale-110 md:active:scale-90 transition-all md:relative md:top-0 md:left-0 md:translate-x-0 w-12 h-12 border-solid border-2 border-black dark:border-white rounded-full cursor-pointer z-10`}
            ref={themeBtnRef}
            onClick={switchTheme}
          >
            {isDark ? (
              <BiMoon size={20} className="text-white" />
            ) : (
              <FiSun size={20} className="dark:text-white scale-110" />
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
