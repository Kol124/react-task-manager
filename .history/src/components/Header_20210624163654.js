import React from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="header" style={{ background: theme.ui, color: theme.font }}>
      <section>
        <div id="toggle-btn">
          <input type="checkbox">
          <span></span>
        </div>
      </section>
      <h1 className="main-header">Task Manager</h1>
    </div>
  );
};

export default Header;
