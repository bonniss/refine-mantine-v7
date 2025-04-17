import ColorSchemeToggle from '@/components/shared/ColorSchemeToggler';
import { useLogout, useMenu } from '@refinedev/core';
import { IconArmchair, IconBlockquote, IconCategory2, IconLogout } from '@tabler/icons-react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const icons = [IconArmchair, IconBlockquote, IconCategory2];

export const Sidebar = () => {
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();

  return (
    <nav className="h-full flex flex-col bg-transparent">
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <ul className="py-4 space-y-1">
          {[{ key: 'home', route: '/', label: 'Home' }, ...menuItems].map((item, idx) => {
            const Icon = icons[idx];
            return (
              <li key={item.key}>
                <RouterNavLink
                  to={item.route ?? '/'}
                >
                  {({ isActive }) => (
                    <div className={`block px-4 py-2 mx-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500/90 text-white shadow-md shadow-blue-500/20 dark:shadow-blue-500/10'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                    }`}>
                      <div className="flex items-center">
                        <Icon size={20} className={`mr-3 transition-colors ${
                          isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-current'
                        }`} />
                        <span>{item.label}</span>
                      </div>
                    </div>
                  )}
                </RouterNavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="p-4 border-t border-gray-200/50 dark:border-gray-800/50">
        <button
          className="w-full px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 flex items-center group"
          onClick={(event) => {
            event.preventDefault();
            logout();
          }}
        >
          <IconLogout className="mr-3 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" size={20} />
          <span>Logout</span>
        </button>
      </footer>
    </nav>
  );
};
