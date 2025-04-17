import { Sidebar } from '@/components/layout/Sidebar';
import { IconMenu3 } from '@tabler/icons-react';
import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';
import ColorSchemeToggle from '../shared/ColorSchemeToggler';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className={clsx("fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 z-30",
        'flex flex-row justify-between items-center px-6'
      )}>
        <div className="group-left flex items-center gap-2 h-full">
          <img className={clsx(
            "h-20",
            "animate-wiggle animate-infinite animate-duration-[4000ms] animate-ease-linear")} src="/android-icon-96x96.png" alt="" />
        </div>
        <div className="group-right flex items-center gap-2 h-full">
          <ColorSchemeToggle />
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 dark:text-gray-400 dark:hover:text-gray-50 dark:hover:bg-gray-800/50 lg:hidden"
          >
            <IconMenu3 className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-20">
        <Sidebar />
      </aside>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 transform transition-transform duration-200 ease-in-out border-r border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-20
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 min-h-screen transition-all duration-200 ease-in-out">
        <div className="p-4 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {children}
        </div>
      </main>
    </div>
  );
};
