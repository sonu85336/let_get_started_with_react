import Expenseitem from "./component/Expense";
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
    LocationOfExpenditure: "bhopal",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    LocationOfExpenditure: "nagpur",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    LocationOfExpenditure: "mumbai",
    date: new Date(2021, 5, 12),
  },
];

function App() {
 
    return (
      <div>
        {expenses.map((name)=>(
<div>
   <Expenseitem
            title={name.title}
            amount={name.amount}
            LocationOfExpenditure={name.LocationOfExpenditure}
            date={name.date}
          ></Expenseitem>
</div>

        
        
        ))}
         
      
      </div>
    );
  }
 

export default App;
