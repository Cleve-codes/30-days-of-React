import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {

  const headers = ["Name", "Amount", "Date", ""];
  if (showBudget) {
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
              <ExpenseItem expense={expense} showBudgetName={false} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  expenses: PropTypes.array.isRequired,
  showBudget: PropTypes.bool,
};

export default Table;
