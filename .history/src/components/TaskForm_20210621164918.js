import React from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      book: {
        title,
      },
    });

    setTitle("");
  };

  const clearTasks = () => {
    dispatch({ type: "CLEAR_TASK" });
  };

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
        <button className="btn clear-btn" onClick={clearTasks}>
          Clear
        </button>
      </div>
    </form>
  );
}
