import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { ExpenseContext } from "../../context/ExpenseContext";

export const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <>
      <h2>History</h2>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
