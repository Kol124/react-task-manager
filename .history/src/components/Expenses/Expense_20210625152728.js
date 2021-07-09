import React from "react";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { ExpenseContextProvider } from "../../context/ExpenseContext";

export default function Expenses() {
  return (
    <ExpenseContextProvider>
      <AddTransaction />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </ExpenseContextProvider>
  );
}
