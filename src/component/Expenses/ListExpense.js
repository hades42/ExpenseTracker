import { useState } from "react";
import Card from "../UI/Card";
import "./ListExpense.css";
import ExpenseFilter from "../Filter/ExpenseFilter";
import ExpenseList from "./Lists/ExpenseList"
import ExpenseChart from "./ExpensesChart";

function ListExpense(props) {
  const [currDate, setDateUpdated] = useState("2020");
  const filteredExp = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === currDate
  );

  const dateChangeEventHandler = (dateChange) => {
    setDateUpdated(dateChange);
  };


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={currDate}
          dateChange={dateChangeEventHandler}
        ></ExpenseFilter>
        <ExpenseChart expenses= {filteredExp}></ExpenseChart>
        <ExpenseList items = {filteredExp}></ExpenseList>
      </Card>
    </div>
  );
}

export default ListExpense;
