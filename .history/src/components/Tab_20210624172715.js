import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Tab() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div>
      <div className="tab-header">
        <div>
          <i style={{ color: theme.font }} className="fa fa-pen"></i>Todos
        </div>
        <div>
          <i style={{ color: theme.font }} className="fa fa-bell"></i>Reminder
        </div>
        <div>
          <i style={{ color: theme.font }} className="fa fa-envelope"></i>
          Expenses
        </div>
      </div>
    </div>
  );
}
