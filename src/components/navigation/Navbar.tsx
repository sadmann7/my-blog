import { FC, useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import NavLinksCtn from './NavLinksCtn';

const Navbar: FC = () => {
  /** dark mode */
  const [isDark, setIsDark] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const switchTheme = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
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

  /** sticky navbar*/
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const changeNavBg = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', changeNavBg);

  /** mobile nav */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navBtnRef = useRef<HTMLButtonElement>(null);
  const themeBtnRef = useRef<HTMLButtonElement>(null);
  const themeBtnChild = document.querySelectorAll('.theme__btn--child');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideMenu = () => {
    setIsOpen(false);
  };

  const showMenu = () => {
    setIsOpen(true);
  };

  const hideMobileMenu = (e: React.ChangeEvent) => {
    if (
      !e.target.classList.contains('nav__link') &&
      !e.target.classList.contains('theme__btn') &&
      !(e.target === themeBtnRef.current) &&
      !(e.target.parentElement === themeBtnRef.current) &&
      !(e.target.parentElement === null) &&
      !(e.target.childNodes[0] === themeBtnChild[0]) &&
      !(e.target.childNodes[1] === undefined)
    ) {
      setIsOpen(false);
    }
  };
  useOnClickOutside(navBtnRef, hideMobileMenu);

  /** framer motion */
  const navBtnVar = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  const themeBtnVar = {
    open: { rotate: 360 },
    closed: { rotate: 0 },
  };

  return (
    <div className="min-h-[4.25rem] whitespace-nowrap transition-all md:min-h-[4.75rem]">
      <div
        className={`${
          isScrolled && 'bg-red-300 transition-all dark:bg-gray-600'
        } fixed top-0 left-0 z-50 w-[100%]`}
      >
        <nav className="centerDiv py-5 md:flex md:items-center md:justify-between md:py-4">
          <div className="gap-16 md:flex">
            <div className="flex items-center justify-between">
              <NavLink to="/">
                <p className="nav__logo relative text-xl font-semibold text-gray-800 after:bg-gray-900 hover:text-black dark:text-slate-100  dark:after:bg-white dark:hover:text-white">
                  Sadman Sakib
                </p>
              </NavLink>
              <motion.button
                className="dark:text-white md:hidden"
                ref={navBtnRef}
                onClick={toggleMenu}
                animate={isOpen ? 'open' : 'closed'}
                variants={navBtnVar}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>
            <NavLinksCtn
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              hideMenu={hideMenu}
              showMenu={showMenu}
            />
          </div>
          <motion.button
            className={`${
              isOpen ? 'theme__btn theme__btn--active' : 'theme__btn'
            } z-10 h-11 w-11 cursor-pointer rounded-full border-2 border-solid border-black text-black dark:border-white dark:text-white md:relative md:top-0 md:left-0 md:right-0 md:mx-0`}
            ref={themeBtnRef}
            onClick={switchTheme}
            animate={isOpen ? 'open' : 'closed'}
            variants={themeBtnVar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 720 }}
            transition={{
              duration: 0.3,
            }}
          >
            {isDark ? (
              <BiMoon size={20} className="theme__btn--child" />
            ) : (
              <FiSun
                size={20}
                className="theme__btn--child scale-110 transition-all"
              />
            )}
          </motion.button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
