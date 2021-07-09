import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
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
