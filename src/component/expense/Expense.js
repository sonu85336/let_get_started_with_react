  import React, {useState} from "react";
  import "./expenses.css";
import ExpensesFilter from "./Expensefilter";
import Expenseitem from "./ExpenseItem";
import Card from "../UI/Card";
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
          {filteredexpenses.map((expense) => (
          
              <Expenseitem
              key = {expense.id}
                title={expense.title}
                amount={expense.amount}
                // LocationOfExpenditure={expense.LocationOfExpenditure}
                date={expense.date}
              ></Expenseitem>
          
          ))}
        </Card>
      </div>
    );
  }

export default Expense;