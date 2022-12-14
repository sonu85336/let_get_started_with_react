import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpesnseDetails from "./ExpenseDetails";
import ExpenseAmount from "./ExpenseAmount";
 
import Card from "../UI/Card";
import "./Expenseitem.css";
import ExpensesFilter from "./Expensefilter";

function Expenseitem(props) {
  
 
   const deletebutton= (event)=>{
   
  console.log(event.target.value)
           
    console.log(props)
   }
  const [title, setTitle] = useState(props.title);
  const [amount, changeamount] = useState(props.amount);
  const amountchange = () => {
    changeamount("$100");
    console.log(amount);
  };
  const clickHandler = () => {
    setTitle("updated");

    console.log(title);
  };
  return (
   
    <Card className="expense-item "  >
    
        <ExpesnseDetails
          LocationOfExpenditure={props.LocationOfExpenditure}
        ></ExpesnseDetails>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpesnseDetails title={title}></ExpesnseDetails>
        <ExpenseAmount   amount={amount}></ExpenseAmount>
        <button onClick={clickHandler}>update</button>
        <button    onClick={ amountchange}>ExpenseAmount</button>
         <button  onClick={deletebutton}>Delete</button>
     
    </Card>
 
   
  );
}
export default Expenseitem;
