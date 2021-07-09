import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "../reducer/TaskReducer";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
  const [tasks, dispatch] = useReducer(TaskReducer, []);

  useEffect(() => {
    console.log(tasks);
  });

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
}
