import { IconMenu3 } from '@tabler/icons-react';
import clsx from 'clsx';
import ColorSchemeToggle from '../../shared/ColorSchemeToggler';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 z-30',
        'flex flex-row justify-between items-center px-6'
      )}
    >
      <div className="group-left flex items-center gap-2 h-full">
        <img
          className={clsx(
            'h-20',
            'animate-wiggle animate-infinite animate-duration-[4000ms] animate-ease-linear'
          )}
          src="/android-icon-96x96.png"
          alt=""
        />
      </div>
      <div className="group-right flex items-center gap-2 h-full">
        <ColorSchemeToggle />
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 dark:text-gray-400 dark:hover:text-gray-50 dark:hover:bg-gray-800/50 lg:hidden"
        >
          <IconMenu3 className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
