  import React, {useState} from "react";
  import "./expenses.css";
import ExpensesFilter from "./Expensefilter";
import Expenseitem from "./ExpenseItem";
import Card from "../UI/Card";
function Expense(props){

    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    return (
      <div>
        
        <Card className="expenses">
          
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          ></ExpensesFilter>
          {props.items.map((expense) => (
          
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