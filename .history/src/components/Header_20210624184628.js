import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div id="toggle-btn" onClick={toggleTheme}>
        <input type="checkbox" />
        <span></span>
      </div>
      <h1 className="main-header">Task Manager</h1>
    </div>
  );
};

export default Header;
