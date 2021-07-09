import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      font: "#292f38",
      accent: "#e5e5e5",
      icon: "#d1d1d1",
      bg: "#f1f1f1",
    },
    dark: {
      font: "#f1f1f1",
      accent: "#1d222b",
      icon: "#d7d7d7",
      bg: "#292f38",
    },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider
          value={{ ...this.state, toggleTheme: this.toggleTheme }}
        >
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
  }
}