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
            <i style={{ color: theme.font }} className="fa fa-pen"></i>
            <p style={{ color: theme.font }}>Tasks</p>
          </Link>
        </li>

        <li>
          <Link to="/Expense">
            <i
              style={{ color: theme.font }}
              className="fa fa-balance-scale"
            ></i>
            <p style={{ color: theme.font }}>Expenses</p>
          </Link>
        </li>

        {/* <li>
          <Link to="/Reminder">
            <i style={{ color: theme.font }} className="fa fa-bell"></i>
            <p style={{ color: theme.font }}>Reminder</p>
          </Link>
        </li> */}
      </ul>
    </footer>
  );
}
