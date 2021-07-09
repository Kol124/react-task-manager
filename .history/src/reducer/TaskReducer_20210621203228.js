export default function TaskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          title: action.task.title,
          id: Math.random().toString(),
        },
      ];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.task.id);

    case "EDIT_TASK":
      return state.map((task) => task.id !== action.task.id);

    case "CLEAR_TASK":
      return [];

    default:
      return state;
  }
}
