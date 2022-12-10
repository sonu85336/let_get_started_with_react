import "./Expenseitem.css";


const expensedate= new Date(2022,2,28);
const expenseitem = 'Food'
const LocationOfExpenditure= 'Delhi'
const  expenseprice = 200
function Expenseitem() {
  return (
    <div>
      <div className="expense-item ">
        <div>
          
          <h1>ExpenseItem</h1>
        </div>
        <div className="expense-item__description ">
          <h2>{expenseitem} </h2>
        </div>
        <div className = "expense-item "><h5>{expensedate.toISOString()}</h5> </div>
        <div className="expense-item__description " >
            <h5>{LocationOfExpenditure}</h5>
        </div>
        <div classNmae="expense-item__price"> <h3>Rs{expenseprice}</h3></div>
      </div>
 
 
     
    </div>
  );
}
export default Expenseitem;
