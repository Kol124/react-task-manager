import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link to="/">
          <i className="fa-fa-pen"></i>Tasks
        </Link>
      </div>

      <div>
        <Link to="/Expenses">
          <i className="fa fa-balance-scale"></i>Expenses
        </Link>
      </div>

      <div>
        <Link to="/Reminder">
          <i className="fa fa-bell"></i>Reminder
        </Link>
      </div>
    </footer>
  );
}
