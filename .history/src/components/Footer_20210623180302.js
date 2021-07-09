import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">
            <i className="fa-fa-pen"></i>Tasks
          </Link>
        </li>

        <li>
          <Link to="/Expenses">
            <i className="fa fa-balance-scale"></i>Expenses
          </Link>
        </li>

        <li>
          <Link to="/Reminder">
            <i className="fa fa-bell"></i>Reminder
          </Link>
        </li>
      </ul>
    </footer>
  );
}
