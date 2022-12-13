import "./Expenseform.css";
 
function ExpenseForm() {
const titlechange = (event)=>{
  console.log(event.target.value);
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
        <input type='number'  onChange={titlechange}></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type='date' min="2020-01-01" max="2022-12-31" onChange={titlechange}></input>
      </div>

    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
   </form>
  );
}
export default ExpenseForm;
