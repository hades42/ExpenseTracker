import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // useState return an array where the first element is the variable itself (containing value that need to be updated) and the second element is the updating function and make the component redraw again and update new value.
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);

  }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} amount={props.amount} title = {props.title}></ExpenseDate>
      <div className="expense-item__description">
        {/* We will use the "title" varible the useState return because it's value going to be changed by the useState */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

// To use it, we have export it
export default ExpenseItem;
