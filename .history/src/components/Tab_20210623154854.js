import React from "react";

export default function Tab() {
  return (
    <div>
      <div className="tab-header">
        <div>
          <i className="fa fa-pen"></i>Todos
        </div>
        <div>
          <i className="fa fa-bell"></i>Reminder
        </div>
        <div>
          <i className="fa fa-envelope"></i>Expenses
        </div>
      </div>
      <div className="tab-indicator"></div>
    </div>
  );
}
