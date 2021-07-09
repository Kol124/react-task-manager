import React, { createContext, useState, useReducer, useEffect } from "react";
import TaskReducer from "../reducer/TaskReducer";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
  const [tasks, dispatch] = useReducer(TaskReducer, [
    { title: "Include styled components & redux", id: 1 },
    { title: "Integrate Micro-frontends", id: 2 },
    { title: "Write Middleware & run optimization", id: 3 },
    { title: "Learn Parameterizing middleware", id: 4 },
  ]);

  const [editItem, setEditItem] = useState(null);

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
    console.log(item);
  };

  useEffect(() => {
    console.log(tasks);
  });

  return (
    <TaskContext.Provider value={{ tasks, editItem, findItem, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
}
