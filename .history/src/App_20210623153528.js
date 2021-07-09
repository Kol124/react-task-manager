import "./App.css";
import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />

          <div className="tabs">
            <div className="main">
              <TaskForm />
              <TaskList />
            </div>
            <div className="tab-header">
              <div>
                <i className="fa fa-pencil"></i>Todos
              </div>
              <div>
                <i className="fa fa-bell"></i>Reminder
              </div>
              <div>
                <i className="fa fa-envelope"></i>Expenses
              </div>
            </div>
            <div className="tab-indicator"></div>
          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
