import "./App.css";
import React from "react";
import TaskContextProvider from "./context/TaskContext";
import ThemeContextProvider from "./context/ThemeContext";

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
