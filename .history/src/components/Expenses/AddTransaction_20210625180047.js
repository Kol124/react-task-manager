import React, { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";

export const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const { dispatch } = useContext(ExpenseContext);

  // Theme Context
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TRANSACTION",
      transaction: { title, amount: +amount },
    });
    setTitle("");
    setAmount("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <div className="expense-form">
          <input
            type="text"
            placeholder="Enter Text..."
            value={title}
            style={{
              background: theme.accent,
              color: theme.font,
              border: theme.accent,
            }}
            onChange={(e) => setTitle(e.target.value)}
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
            placeholder="Amount... "
          />
        </div>
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
