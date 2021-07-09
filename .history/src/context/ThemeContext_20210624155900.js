import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { font: "#292f38", accent: "#e5e5e5", bg: "#f1f1f1" },
    dark: { font: "#f1f1f1", accent: "#1d222b", bg: "#292f38" },
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
