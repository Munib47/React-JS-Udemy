import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEntertedTitle] = useState("");
  const [enteredAmount, setEntertedAmount] = useState("");
  const [enteredDate, setEntertedDate] = useState("");

  const titleChangeHandler = (e) => {
    setEntertedTitle(e.target.value);
  };

  const amountChnageHandler = (e) => {
    setEntertedAmount(e.target.value);
  };

  const dateChnageHandler = (e) => {
    setEntertedDate(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChnageHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-12-31"
            onChange={dateChnageHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
