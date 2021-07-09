import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div id="toggle-btn">
        <input type="checkbox" />
        <span></span>
      </div>
      <h1 className="main-header">Task Manager</h1>
    </div>
  );
};

export default Header;
