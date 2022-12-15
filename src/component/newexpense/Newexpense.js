import React, { useState} from "react"
import "./Newexpense.css";
import ExpenseForm from "./ExpenseForm";



const NewExpense =(props)=>{

    const  [isedit,setisedit]=useState(false);
 const  saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    console.log(expenseData)
    props.onAddExpense(expenseData);
    
 }
 const edithandling =()=>{
    setisedit(true)
 }
  const iscanceledit =()=>{
   setisedit(false)
  }
 
 return( 
 
 <div className="new-expense">
    {!isedit && <button onClick={edithandling}>Add New Expense</button>}
      { isedit && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}  onChange={iscanceledit}/>
         } 
    </div > 
 )
    
}
export default NewExpense;