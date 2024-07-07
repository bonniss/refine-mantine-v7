import { useBreadcrumb } from "@refinedev/core";
import { Link } from "react-router-dom";
import classes from './breadcrumb.module.css'

export const Breadcrumb = () => {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <ul className={classes.root}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={`breadcrumb-${breadcrumb.label}`}>
            {breadcrumb.href ? (
              <Link to={breadcrumb.href}>{breadcrumb.label}</Link>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
