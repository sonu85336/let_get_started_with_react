import './Expenseitem.css'

function ExpenseAmount(props){
    return (
        <div className='expense-item__price'>Rs{props.amount}</div>


    )
}
export default ExpenseAmount;
