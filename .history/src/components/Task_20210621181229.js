import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Task(task) {
  const { dispatch } = useContext(TaskContext);

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() =>
            dispatch({ type: "REMOVE_TASK", task: { id: task.id } })
          }
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
        <button
          className="btn-edit task-btn"
          onClick={() => dispatch({ type: "EDIT_TASK", task: { id: task.id } })}
        >
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
}
