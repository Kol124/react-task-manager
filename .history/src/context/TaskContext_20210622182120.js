import React, { createContext, useState, useReducer, useEffect } from "react";
import TaskReducer from "../reducer/TaskReducer";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
  const [tasks, dispatch] = useReducer(TaskReducer, [
    { title: "Include styled components & redux", id: 1 },
    { title: "Integrate micro-frontends & mongoDB", id: 2 },
    { title: "Write middleware & run optimization", id: 3 },
    { title: "Learn parameterizing middleware", id: 4 },
    { title: "Integrate payment system to backend", id: 5 },
  ]);
  const [editItem, setEditItem] = useState(null);

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  useEffect(() => {
    console.log(tasks);
  });

  return (
    <TaskContext.Provider
      value={{ tasks, editItem, setEditItem, findItem, dispatch }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
