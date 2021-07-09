import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { editItem, dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      task: {
        title,
      },
    });

    setTitle("");
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: "CLEAR_TASK" })}
        >
          Clear
        </button>
      </div>
    </form>
  );
}