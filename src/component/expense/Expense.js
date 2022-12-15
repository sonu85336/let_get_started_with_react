  import React, {useState} from "react";
  import "./expenses.css";
import ExpensesFilter from "./Expensefilter";
 
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
function Expense(props){

    const [filteredYear, setFilteredYear] = useState("2021");
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    const filteredexpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear
    })

    
    return (
      <div>
        
        <Card className="expenses">
          
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          ></ExpensesFilter>
      <ExpenseList  items={filteredexpenses}></ExpenseList>
        </Card>
      </div>
    );
  }

export default Expense;