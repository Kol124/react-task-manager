import React, { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(ExpenseContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      className={transaction.amount < 0 ? "list-item minus" : "list-item plus"}
    >
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <div>
        <button
          className="btn-delete task-btn"
          style={{ color: theme.font }}
          onClick={() => deleteTransaction(transaction.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
      </div>
    </li>
  );
};
