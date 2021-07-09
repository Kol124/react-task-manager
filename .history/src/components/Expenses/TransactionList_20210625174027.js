import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { ExpenseContext } from "../../context/ExpenseContext";

export const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <>
      <ul className="expense-list">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </>
  );
};
