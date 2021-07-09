import React, { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { addTransaction } = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          placeholder="Add Task..."
          value={text}
          style={{
            background: theme.accent,
            color: theme.font,
            border: theme.accent,
          }}
          onChange={(e) => setText(e.target.value)}
          required
          className="task-input"
        />
        <div className="buttons">
          <button
            type="submit"
            className="btn"
            style={{ background: theme.accent, color: theme.font }}
          >
            Add Transaction
          </button>
        </div>
      </form>
    </>
  );
};
