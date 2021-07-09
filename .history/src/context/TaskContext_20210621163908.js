import React, { createContext, useReducer } from "react";
import TaskReducer from "../reducer/TaskReducer";

export const TaskContext = createContext();

export function TaskContext(props) {
  const [state, dispatch] = useReducer(TaskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
}
