import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Table from "../components/Table";
import { toast } from "react-toastify";
import { deleteExpenseByBudgetId } from "../helpers";

export async function loader() {
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  return { expenses };
}

export async function action({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteExpenseByBudgetId(values.budgetId);
      console.log(_action, values);
      return true;
    } catch (error) {
      return toast.error(error?.message);
    }
  }
  return null;
}

const ExpensesPage = () => {
  const navigate = useNavigate();
  const { expenses } = useLoaderData();

  return (
    <>
      <div className="grid-lg">
        <h1 className="text-[40px] font-bold">All Expenses</h1>
        {expenses && expenses.length > 0 && (
          <>
            <div className="grid-md">
              <h2 className="text-[30px] font-semibold">
                Recent Expense <small>({expenses.length} total)</small>
              </h2>
              <Table expenses={expenses} />
            </div>

            <div>
              <Link text="Go Back" to="/home/budgets" />
            </div>
          </>
        )}
      </div>
      <Button text="Go Back" onClick={() => navigate("/home/budgets")} />
    </>
  );
};

export default ExpensesPage;
