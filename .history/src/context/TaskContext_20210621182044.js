import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "../reducer/TaskReducer";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
  const [tasks, dispatch] = useReducer(TaskReducer, [
    { title: "Take out the Trash", id: 1 },
    { title: "Clean the Room", id: 2 },
  ]);

  useEffect(() => {
    console.log(tasks);
  });

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
}
