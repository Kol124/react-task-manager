import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function Task({ task }) {
  const { findItem, dispatch } = useContext(TaskContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          className="btn-delete"
          style={{ color: theme.font }}
          onClick={() =>
            dispatch({ type: "REMOVE_TASK", task: { id: task.id } })
          }
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
        <button
          className="btn-edit"
          style={{ color: theme.font }}
          onClick={() => findItem(task.id)}
        >
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
}
