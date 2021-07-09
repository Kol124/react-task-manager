import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";
import Expenses from "./components/expenses/Expenses";
import Reminder from "./components/reminder/Reminder";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <TaskContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <Switch>
              <Route exact path="/">
                <div className="main">
                  <TaskForm />
                  <TaskList />
                </div>
              </Route>

              <Route path="/expenses">
                <Expenses />
              </Route>

              <Route path="/reminder">
                <Reminder />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </TaskContextProvider>
    </Router>
  );
}

export default App;
