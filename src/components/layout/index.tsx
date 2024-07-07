import type { PropsWithChildren } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Menu } from "@/components/menu";
import classes from './layout.module.css'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.root}>
      <Menu />
      <div className={classes.content}>
        <Breadcrumb />
        <div>{children}</div>
      </div>
    </div>
  );
};
