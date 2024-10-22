import ColorSchemeToggle from '@/components/shared/ColorSchemeToggler';
import { NavLink, ScrollArea, UnstyledButton } from '@mantine/core';
import { useLogout, useMenu } from '@refinedev/core';
import { IconArmchair, IconBlockquote, IconCategory2, IconLogout } from '@tabler/icons-react';
import clsx from 'clsx';
import { NavLink as RouterNavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const icons = [IconArmchair, IconBlockquote, IconCategory2];

export const Sidebar = () => {
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();
  return (
    <nav className={classes.root}>
      <header>
        <ColorSchemeToggle />
      </header>
      <ScrollArea className={classes.links}>
        <ul className={classes.linksInner}>
          {[{ key: 'home', route: '/', label: 'Home' }, ...menuItems].map((item, idx) => {
            const Icon = icons[idx];
            return (
              <li key={item.key}>
                <RouterNavLink
                  to={item.route ?? '/'}
                  className={({ isActive }) =>
                    clsx(classes.routerNavLink, isActive && classes.routerNavLinkActive)
                  }
                >
                  <NavLink className={classes.link} label={item.label} leftSection={<Icon />} />
                </RouterNavLink>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
      <footer className={classes.footer}>
        <UnstyledButton
          w="100%"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            logout();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </UnstyledButton>
      </footer>
    </nav>
  );
};
