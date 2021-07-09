export default function TaskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          title: action.task.title,
          id: Math.random().toString(),
        },
        console.log(state),
      ];

    case "REMOVE_TASK":
      return state.filter((book) => book.id !== action.book.id);

    case "EDIT_TASK":
      return state.filter((book) => book.id !== action.book.id);

    case "CLEAR_TASK":
      return (state.length = 0);

    default:
      return state;
  }
}
