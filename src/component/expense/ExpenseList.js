import './ExpenseList.css'
import Expenseitem from './ExpenseItem'

const ExpenseList =(props)=>{
if(props.items.length===0){
    return <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
}
return (
    <ul className="expense-list">
         {props.items.map((expense) => (
          
          <Expenseitem
          key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            // LocationOfExpenditure={expense.LocationOfExpenditure}
            date={expense.date}
          ></Expenseitem>
      
      ))}
    </ul>
)
}


export default  ExpenseList;