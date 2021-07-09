import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="header" style={{ background: theme.bg, color: theme.font }}>
      <h1 className="main-header">Task Manager</h1>
    </div>
  );
};

export default Header;
