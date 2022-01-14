import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // handling year chnge
  const yearChangeHandler = (selectedYear) => {
    console.log("in expenses");
    setFilteredYear(selectedYear);
  };
  // handleing filtered expenses
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter reset={filteredYear} onYearChange={yearChangeHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} // uniq id KEY REACT
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
