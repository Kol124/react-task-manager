import React, { createContext, useReducer } from "react";
import ExpenseReducer from "../reducer/ExpenseReducer";

export const ExpenseContext = createContext();

export function ExpenseContextProvider(props) {
  const [transaction, dispatch] = useReducer(ExpenseReducer, [
    { text: "Groceries", amount: -138, id: 1 },
    { text: "Tutoring", amount: -200, id: 2 },
    { text: "Church", amount: -26, id: 3 },
  ]);

  return (
    <ExpenseContext.Provider
      value={{
        transaction,
        dispatch,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
}
