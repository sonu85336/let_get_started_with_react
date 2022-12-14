import "./Expenseitem.css";

function ExpenseDetails(props) {
  return (
    <div>
      <div>
        <h3>{props.LocationOfExpenditure}</h3>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default ExpenseDetails;
