export default function TaskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          title: action.book.title,
          id: Math.random().toString(),
        },
      ];

    // case "REMOVE_BOOK":
    //   return state.filter((book) => book.id !== action.book.id);

    default:
      return state;
  }
}
