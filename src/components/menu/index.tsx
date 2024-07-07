import { Button, NavLink, ScrollArea } from '@mantine/core';
import { useLogout, useMenu } from '@refinedev/core';
import { IconArticle, IconCategory2, IconHome2 } from '@tabler/icons-react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import classes from './menu.module.css';

const icons = [IconHome2, IconArticle, IconCategory2];

export const Menu = () => {
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();

  return (
    <nav className={classes.root}>
      <ScrollArea className={classes.links}>
        <ul className={classes.linksInner}>
          {[{ key: 'home', route: '/', label: 'Home' }, ...menuItems].map((item, idx) => {
            const Icon = icons[idx];
            return (
              <li key={item.key}>
                <NavLink
                  component={RouterNavLink}
                  to={item.route ?? '/'}
                  label={item.label}
                  leftSection={<Icon />}
                />
              </li>
            );
          })}
        </ul>
      </ScrollArea>
      <div className={classes.footer}>
        <Button fullWidth onClick={() => logout()} radius={0} variant="gradient">Logout</Button>
      </div>
    </nav>
  );
};
