import "./Expenseitem.css";

function ExpenseDetails(props) {
  return (
     <div   >  
      <div >
        <h3>{props.LocationOfExpenditure}</h3>
      </div>
    
      <div className="expense-item__description">
        <h2>{props.title}</h2>  
        {/* <div className="expense-item__price"> Rs{props.amount}</div> */}
    </div>
   </div>
  );
}

export default ExpenseDetails;
