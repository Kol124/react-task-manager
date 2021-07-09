import React, { createContext, useReducer } from "react";
import ExpenseReducer from "../reducer/ExpenseReducer";

export const ExpenseContext = createContext();

export function ExpenseContextProvider(props) {
  const [transactions, dispatch] = useReducer(ExpenseReducer, [
    { title: "Groceries", amount: -138, id: 1 },
    { title: "Tutoring", amount: 200, id: 2 },
    { title: "Church", amount: -26, id: 3 },
  ]);

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        dispatch,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
}
