import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext";

export default function TaskForm() {
  const { editItem, setEditItem, dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem !== null) {
      dispatch({
        type: "EDIT_TASK",
        task: {
          title,
          id: editItem.id,
        },
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
        <button
          type="submit"
          className="btn"
          style={{ background: theme.accent, color: theme.font }}
        >
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button
          className="btn"
          style={{ background: theme.accent, color: theme.font }}
          onClick={() => dispatch({ type: "CLEAR_TASK" })}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
