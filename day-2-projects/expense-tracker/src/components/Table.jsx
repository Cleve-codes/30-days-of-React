import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, onDelete, showBudgetName }) => {
  // const [expenses, setExpenses] = useState(initialExpenses);

  const headers = ["Name", "Amount", "Date", ""];
  if (showBudgetName) {
    headers.splice(3, 0, "Budget");
  }

  // useEffect(() => {
  //   // setExpenses(initialExpenses);
  //   console.log(initialExpenses);
  // }, [initialExpenses]);

  const handleDelete = (id) => {
    onDelete(id)
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
  onDelete: PropTypes.func,
};

export default Table;
