export default function TaskReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        {
          title: action.task.title,
          id: Math.random().toString(),
        },
      ];

    case "REMOVE_TASK":
      return tasks.filter((task) => task.id !== action.task.id);

    case "EDIT_TASK":
      const newTasks = tasks.map((task) =>
        task.id === action.task.id ? { title, id } : task
      );
      return [
        ...newTasks,
        {
          title: action.task.title,
          id: Math.random().toString(),
        },
      ];

    case "CLEAR_TASK":
      return [];

    default:
      return tasks;
  }
}
