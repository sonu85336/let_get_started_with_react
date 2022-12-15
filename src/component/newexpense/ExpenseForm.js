import React, { useState } from "react";
import "./Expenseform.css";

function ExpenseForm(props) {
  const [titleset, settitle] = useState("");
  const [amountset, setamount] = useState("");
  const [dateset, setdate] = useState("");

  const titlechange = (event) => {
    settitle(event.target.value);
  };
  const amountchange = (event) => {
    setamount(event.target.value);
  };
  const datechange = (event) => {
    setdate(event.target.value);
  };
  const expneseadd = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleset,
      amount: amountset,
      date: new Date(dateset),
    };
    props.onSaveExpenseData(expenseData);
    settitle("");
    setamount("");
    setdate("");
  };

  return (
    <form onSubmit={expneseadd}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleset} onChange={titlechange}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountset}
            onChange={amountchange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateset}
            min="2020-01-01"
            max="2022-12-31"
            onChange={datechange}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button"  onClick={props.onChange}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
