import { useLogout, useMenu } from "@refinedev/core";
import { NavLink } from "react-router-dom";
import classes from './menu.module.css'

export const Menu = () => {
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();

  return (
    <nav className={classes.root}>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        {menuItems.map((item) => (
          <li key={item.key}>
            <NavLink to={item.route ?? "/"}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <button onClick={() => logout()}>Logout</button>
    </nav>
  );
};
