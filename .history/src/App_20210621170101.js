import "./App.css";
import React from "react";
import TaskListContextProvider from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";
import Header from "./components/Header";
import TaskContextProvider from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            {/* <TaskList /> */}
          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
