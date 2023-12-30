import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  findBudgetById,
  findBudgetColorById,
  formatCurrency,
  formatDateToLocaleString,
} from "../helpers";
import { Link, useFetcher } from "react-router-dom";

const ExpenseItem = ({ expense, showBudgetName, onDelete }) => {
  const budgetName = findBudgetById(expense.budgetId)?.name;
  const budgdetColor = findBudgetColorById(expense.budgetId);
  //   console.log(expense);

  const fetcher = useFetcher();

  // const handleDelete = async (e) => {
  //   try {
  //     e.preventDefault();
  //     onDelete(expense.id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      {showBudgetName && (
        <td>
          <Link
            className="px-2 rounded-md "
            style={{ backgroundColor: `hsl(${budgdetColor})` }}
            to={`/home/${expense.budgetId}`}
          >
            {budgetName}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post" onClick={() => onDelete(expense.id)}>
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button type="submit" className="hover:transform hover:scale-200">
            <FaRegTrashAlt className="w-5 h-10 hover:transform hover:scale-200" />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  showBudgetName: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default ExpenseItem;
