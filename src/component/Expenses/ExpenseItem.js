import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} amount={props.amount} title = {props.title}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

// To use it, we have export it
export default ExpenseItem;
