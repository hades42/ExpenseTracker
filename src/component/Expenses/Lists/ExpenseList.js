import ExpenseItem from "../ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">No Expenses found.</h2>
  );
  if (props.items.length > 0) {
    expenseContent = props.items.map((exp, i) => {
      return (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        ></ExpenseItem>
      );
    });
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpenseList;
