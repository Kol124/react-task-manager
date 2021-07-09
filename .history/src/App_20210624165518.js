import "./App.css";
import React from "react";
import TaskContextProvider from "./context/TaskContext";
import ThemeContextProvider from "./context/ThemeContext";
import Main from "./components/Main";

function App() {
  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <div className="container">
          <Main />
        </div>
      </TaskContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
