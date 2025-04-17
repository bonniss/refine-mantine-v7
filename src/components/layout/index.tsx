import { PropsWithChildren, useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { IconMenu2 } from '@tabler/icons-react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 z-30">
        <div className="flex items-center justify-between h-full px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 dark:text-gray-400 dark:hover:text-gray-50 dark:hover:bg-gray-800/50 lg:hidden"
          >
            <IconMenu2 className="w-6 h-6" />
          </button>
          <div className="flex-1" />
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 transform transition-transform duration-200 ease-in-out border-r border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-20
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className={`pt-16 min-h-screen transition-all duration-200 ease-in-out
        ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-0'}`}>
        <div className="p-4 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {children}
        </div>
      </main>
    </div>
  );
};
