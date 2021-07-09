import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Expenses from "./expenses/Expenses";
import Reminder from "./reminder/Reminder";
import Footer from "./Footer";

export default function Main() {
  return (
    <Router>
      <div>
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
    </Router>
  );
}
