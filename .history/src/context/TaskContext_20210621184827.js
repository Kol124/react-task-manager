import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "../reducer/TaskReducer";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
  const [tasks, dispatch] = useReducer(TaskReducer, [
    { title: "Run unit tests and add styled components", id: 1 },
    { title: "Integrate Micro-frontends", id: 2 },
    { title: "Write Middleware and run optimization", id: 3 },
    { title: "Learn memoization and Parameterizing middleware", id: 4 },
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
