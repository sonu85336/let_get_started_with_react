import React, {useState} from "react";
import "./Expenseform.css";
import react from "react";
 
function ExpenseForm() {
const [titleset,settitle]  =  useState('')
const [amountset,setamount]= useState('')
const [dateset,setdate]=useState()

const titlechange = (event)=>{

  settitle(event.target.value)
  console.log(event.target.value);
}
const amountchange = (event)=>{
  setamount(event.target.value)
  console.log(event.target.value)
}
const datechange =(event)=>{
   setdate(event.target.value)
  console.log(event.target.value)
}
 

  return (
   <form>
    <div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type='text' onChange={titlechange}></input>
      </div>
       <div className="new-expense__control">
        <label>Amount</label>
        <input type='number'  onChange={amountchange}></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type='date' min="2020-01-01" max="2022-12-31" onChange={datechange}></input>
      </div>

    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
   </form>
  );
}
export default ExpenseForm;
