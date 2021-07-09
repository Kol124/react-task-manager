export default function ExpenseReducer(transactions, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...transactions,
        {
          title: action.transaction.title,
          amount: action.transaction.amount,
          id: Math.random().toString(),
        },
      ];

    case "DELETE_TRANSACTION":
      return transactions.filter(
        (transaction) => transaction.id !== action.transaction.id
      );

    default:
      return transactions;
  }
}
