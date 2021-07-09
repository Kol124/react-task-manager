import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Header from "./Header";
import TaskForm from "./task/TaskForm";
import TaskList from "./task/TaskList";
import Expense from "./expenses/Expense";
import Reminder from "./reminder/Reminder";
import Footer from "./Footer";

export default function Main() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Router>
      <div>
        <div
          className="app-wrapper"
          style={{ background: theme.bg, color: theme.font }}
        >
          <Header />
          <Switch>
            <Route exact path="/">
              <div className="main">
                <TaskForm />
                <TaskList />
              </div>
            </Route>

            <Route path="/expenses">
              <Expense />
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
