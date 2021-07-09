import "./App.css";
import React from "react";
// import TaskListContextProvider from "./context/TaskListContext";
// import TaskList from "./components/TaskList";
// import TaskForm from "./components/TaskForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          {/* <TaskForm />
            <TaskList /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
