import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: {
      font: "#292f38",
      accent: "#e5e5e5",
      icon: "#d3d3d3",
      bg: "#f1f1f1",
    },
    dark: {
      font: "#d3d3d3",
      accent: "#1d222b",
      icon: "#1d222b",
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
