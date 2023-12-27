import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Table from "../components/Table";

export async function loader() {
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  return { expenses };
}

const ExpensesPage = () => {
  // const navigate = useNavigate();
  const { expenses } = useLoaderData();

  return (
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
            <Button text="Go Back" to="/home/budgets" />
          </div>
        </>
      )}
    </div>
  );
};

export default ExpensesPage;
