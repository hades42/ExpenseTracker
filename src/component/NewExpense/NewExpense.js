import React from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log(expenseData);
        props.addExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseData = {saveExpenseDataHandler}></ExpenseFrom>
        </div>
    )
}

export default NewExpense;