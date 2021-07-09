import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";
import ThemeContextProvider from "./context/ThemeContext";
import Expenses from "./components/expenses/Expenses";
import Reminder from "./components/reminder/Reminder";
import Footer from "./components/Footer";

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
