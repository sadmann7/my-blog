import { FC, useState, useId, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
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

  const mobileMenuVariants = {
    open: { x: '-50%' },
    closed: { x: '-150%' },
  };

  const navBtnVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  const themeBtnVariants = {
    open: { rotate: 360 },
    closed: { rotate: 0 },
  };

  return (
    <div className="min-h-[6rem] w-[100%] font-medium text-[1.1rem]  whitespace-nowrap transition-all">
      <div
        className={`${
          isChanged && 'bg-red-300 dark:bg-gray-600'
        } fixed top-0 left-0 w-[100%] z-50 transition-all`}
      >
        <nav className="w-[89vw] max-w-6xl mx-auto mb-[.19rem] py-5 md:py-3 md:flex md:items-center md:justify-between">
          <div className="md:flex gap-20">
            <div className="flex justify-between items-center">
              <NavLink to="/">
                <p className="nav__logo relative font-semibold text-lg text-gray-800 dark:text-slate-100 hover:text-black dark:hover:text-white  after:bg-gray-900 dark:after:bg-white">
                  Sadman Sakib
                </p>
              </NavLink>
              <motion.button
                className="md:hidden dark:text-white"
                ref={navBtnRef}
                onClick={() => setIsOpen(!isOpen)}
                animate={isOpen ? 'open' : 'closed'}
                variants={navBtnVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
              >
                {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
              </motion.button>
            </div>
            <ul
              className={`${
                isOpen ? 'nav__mobile nav__mobile--active' : 'nav__mobile'
              }  bg-purple-300 dark:bg-slate-500 md:bg-transparent md:dark:bg-transparent text-gray-700 dark:text-slate-200 md:flex md:relative md:top-auto md:left-auto md:translate-x-0 md:p-0 md:h-auto md:flex-row md:gap-10 transition-all`}
            >
              <NavLinks handleSelect={handleSelect} />
              <a
                href="https://github.com/sadmann7"
                target="_blank"
                onClick={handleSelect}
              >
                <li className="nav__link relative hover:text-gray-900 dark:hover:text-slate-50 after:bg-gray-900 dark:after:bg-white">
                  Github
                </li>
              </a>
            </ul>
          </div>
          <motion.button
            className={`${
              isOpen ? 'theme__btn theme__btn--active' : 'theme__btn'
            } md:relative md:top-0 md:left-0 md:right-0 md:mx-0 w-11 h-11 border-solid border-2 border-black dark:border-white rounded-full cursor-pointer z-10`}
            ref={themeBtnRef}
            onClick={switchTheme}
            animate={isOpen ? 'open' : 'closed'}
            variants={themeBtnVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
          >
            {isDark ? (
              <BiMoon size={20} className="text-white" />
            ) : (
              <FiSun
                size={20}
                className="dark:text-white scale-110 transition-all"
              />
            )}
          </motion.button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
