import PropTypes from "prop-types";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses: initialExpenses, showBudgetName }) => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const headers = ["Name", "Amount", "Date", ""];
  if (showBudgetName) {
    headers.splice(3, 0, "Budget");
  }

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.map((i, index) => (
              <th className="text-[30px]" key={index}>
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr className="text-[20px]" key={expense.id}>
              <ExpenseItem
                expense={expense}
                showBudgetName={showBudgetName}
                onDelete={handleDelete}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  expenses: PropTypes.array,
  showBudgetName: PropTypes.bool,
};

export default Table;
