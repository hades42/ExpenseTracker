import React from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";
const NewExpense = () => {
    return(
        <div className="new-expense">
            <ExpenseFrom></ExpenseFrom>
        </div>
    )
}

export default NewExpense;