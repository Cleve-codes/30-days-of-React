import PropTypes from "prop-types";
import { formatCurrency, formatDateToLocaleString } from "../helpers";

const ExpenseItem = ({ expense }) => {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
    </>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default ExpenseItem;
