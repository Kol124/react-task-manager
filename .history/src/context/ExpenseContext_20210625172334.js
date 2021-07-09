import React, { createContext, useReducer } from "react";
import ExpenseReducer from "../reducer/ExpenseReducer";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, [
    { text: "Groceries", amount: -138, id: 1 },
    { text: "Tutoring", amount: -200, id: 2 },
    { text: "Church", amount: -26, id: 3 },
  ]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
