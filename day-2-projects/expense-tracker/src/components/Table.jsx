import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudgetName }) => {

  const headers = ["Name", "Amount", "Date", ""];
  if (showBudgetName) {
    headers.splice(3, 0, "Budget");
  }

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
              <ExpenseItem expense={expense} showBudgetName={showBudgetName} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  expenses: PropTypes.array.isRequired,
  showBudgetName: PropTypes.bool,
};

export default Table;
