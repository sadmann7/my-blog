import { FC } from 'react';
import heroImg from '../assets/images/hero.jpg';

const Hero: FC = () => {
  return (
    <div className="mt-8 flex flex-col justify-between gap-6 text-slate-900 dark:text-slate-50 md:flex-row md:items-center md:gap-16">
      <div className="md:w-3/5">
        <p className="text-xl sm:text-2xl md:text-3xl">
          I am Sadman. This is the documentation of my journey of learning web
          development, and other stuffs
        </p>
      </div>
      <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-2xl  md:aspect-w-4 md:aspect-h-1 md:w-2/5">
        <img src={heroImg} alt="hero" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
