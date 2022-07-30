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

  const navBtnVar = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  const themeBtnVar = {
    open: { rotate: 360 },
    closed: { rotate: 0 },
  };

  return (
    <div className="min-h-[6rem] w-[100%] whitespace-nowrap transition-all">
      <div
        className={`${
          isChanged && 'bg-red-300 dark:bg-gray-600'
        } fixed top-0 left-0 w-[100%] z-50 transition-all`}
      >
        <nav className="parent__div mb-1 py-5 md:py-3 md:flex md:items-center md:justify-between">
          <div className="md:flex gap-20">
            <div className="flex justify-between items-center">
              <NavLink to="/">
                <p className="nav__logo text-xl relative font-semibold text-gray-800 dark:text-slate-100 hover:text-black dark:hover:text-white  after:bg-gray-900 dark:after:bg-white">
                  Sadman Sakib
                </p>
              </NavLink>
              <motion.button
                className="md:hidden dark:text-white"
                ref={navBtnRef}
                onClick={() => setIsOpen(!isOpen)}
                animate={isOpen ? 'open' : 'closed'}
                variants={navBtnVar}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>
            <NavLinksCtn isOpen={isOpen} handleSelect={handleSelect} />
          </div>

          <motion.button
            className={`${
              isOpen ? 'theme__btn theme__btn--active' : 'theme__btn'
            } border-black dark:border-white text-black dark:text-white md:relative md:top-0 md:left-0 md:right-0 md:mx-0 w-11 h-11 border-solid border-2 rounded-full cursor-pointer z-10`}
            ref={themeBtnRef}
            onClick={switchTheme}
            animate={isOpen ? 'open' : 'closed'}
            variants={themeBtnVar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 720 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              duration: 0.5,
            }}
          >
            {isDark ? (
              <BiMoon size={20} />
            ) : (
              <FiSun size={20} className="scale-110 transition-all" />
            )}
          </motion.button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
