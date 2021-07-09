import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <footer>
      <ul className="nav" style={{ border: theme.accent }}>
        <li>
          <Link to="/">
            <i style={{ color: theme.icon }} className="fa fa-pen"></i>
            <p>Tasks</p>
          </Link>
        </li>

        <li>
          <Link to="/Expenses">
            <i
              style={{ color: theme.icon }}
              className="fa fa-balance-scale"
            ></i>
            <p>Expenses</p>
          </Link>
        </li>

        <li>
          <Link to="/Reminder">
            <i style={{ color: theme.icon }} className="fa fa-bell"></i>
            <p>Reminder</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
