import { PropsWithChildren, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Backdrop } from './Backdrop';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setSidebarOpen(prev => !prev);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onToggleSidebar={handleToggleSidebar} />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-20">
        <Sidebar />
      </aside>

      <Backdrop isVisible={sidebarOpen} onClick={handleCloseSidebar} />

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 transform transition-transform duration-200 ease-in-out border-r border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-20 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
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
