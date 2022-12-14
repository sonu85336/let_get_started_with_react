// import React, {useState} from "react";
import "./expenses.css";
import Card from "./component/UI/Card";
import NewExpense from "./component/newexpense/Newexpense";
import Expenseitem from "./component/expense/Expense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      LocationOfExpenditure: "Delhi",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      LocationOfExpenditure: "Bhopal",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      LocationOfExpenditure: "Nagpur",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      LocationOfExpenditure: "Mumbai",
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler=expense=>{
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <div>
        <h1>Let's get started</h1>
      </div>
      <Card className="expenses">
        <NewExpense  onAddExpense={addExpenseHandler}></NewExpense>
        {expenses.map((name) => (
          <div id="remove">
            <Expenseitem
              title={name.title}
              amount={name.amount}
              LocationOfExpenditure={name.LocationOfExpenditure}
              date={name.date}
            ></Expenseitem>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default App;
