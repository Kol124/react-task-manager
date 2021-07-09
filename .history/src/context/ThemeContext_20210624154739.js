import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider() {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { font: "#555", ui: "#ddd", bg: "#eee" },
    dark: { font: "#ddd", ui: "#333", bg: "#555" },
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {this.props.children}
    </ThemeContext.Provider>
  );
}
