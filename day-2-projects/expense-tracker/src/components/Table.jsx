import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((i, index) => (
              <th className="text-[30px]" key={index}>
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr className="text-[20px]" key={expense.id}>
              <ExpenseItem expense={expense} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default Table;
