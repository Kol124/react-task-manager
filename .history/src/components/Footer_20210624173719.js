import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <footer>
      <ul className="nav">
        <li>
          <Link to="/">
            <i className="fa fa-pen"></i>
            <p>Tasks</p>
          </Link>
        </li>

        <li>
          <Link to="/Expenses">
            <i className="fa fa-balance-scale"></i>
            <p>Expenses</p>
          </Link>
        </li>

        <li>
          <Link to="/Reminder">
            <i className="fa fa-bell"></i>
            <p>Reminder</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
