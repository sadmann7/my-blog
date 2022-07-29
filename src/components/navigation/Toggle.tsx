import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex items-center h-[40px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          grid place-items-center scale-90 pointer-events-none h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      >
        {enabled ? <FiSun /> : <BiMoon />}
      </span>
    </Switch>
  );
}
