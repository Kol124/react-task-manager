import "./App.css";
import React from "react";
import TaskContextProvider from "./context/TaskContext";
import ThemeContextProvider from "./context/ThemeContext";
import { ExpenseContextProvider } from "./context/ExpenseContext";
import Main from "./components/Main";

function App() {
  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <ExpenseContextProvider>
          <div className="container">
            <Main />
          </div>
        </ExpenseContextProvider>
      </TaskContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
