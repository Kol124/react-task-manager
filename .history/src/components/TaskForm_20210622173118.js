import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm({ task }) {
  const { editItem, setEditItem, dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem !== null) {
      dispatch({
        type: "EDIT_TASK",
      });
      setEditItem(null);
    } else {
      dispatch({
        type: "ADD_TASK",
        task: {
          title,
        },
      });
    }

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
          {editItem ? "Edit Task" : "Add Task"}
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
