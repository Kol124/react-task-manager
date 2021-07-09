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
          placeholder="Enter Text..."
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
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            background: theme.accent,
            color: theme.font,
            border: theme.accent,
          }}
          className="task-input"
          placeholder="Enter amount..."
        />
        <div className="buttons">
          <button
            type="submit"
            className="btn"
            style={{ background: theme.accent, color: theme.font }}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
