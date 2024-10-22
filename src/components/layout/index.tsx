import type { PropsWithChildren } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { Sidebar } from '@/components/layout/Sidebar';
import classes from './layout.module.css';
import { Box } from '@mantine/core';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.root}>
      <Sidebar />
      <Box className={classes.content}>{children}</Box>
    </div>
  );
};
