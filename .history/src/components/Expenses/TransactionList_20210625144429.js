import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { ExpenseContext } from "../context/ExpenseState";

export const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
