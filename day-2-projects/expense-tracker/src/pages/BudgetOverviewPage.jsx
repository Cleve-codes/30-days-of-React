import { redirect, useNavigate, useParams } from "react-router-dom";
import { deleteExpenseByExpenseId, findBudgetById, getExpensesByBudget } from "../helpers";
import BudgetItem from "../components/BudgetItem";
import BudgetCard from "../components/BudgetCard";
import Table from "../components/Table";
import { useEffect, useState } from "react";

export async function action({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteBudget") {
    try {
      console.log(_action, values)
      const remainingBudgets = JSON.parse(
        localStorage.getItem("budgets")
      ).filter((budget) => budget.id !== values.id);
      localStorage.setItem("budgets", JSON.stringify(remainingBudgets));

      // Delete associated expenses
      const remainingExpenses = JSON.parse(
        localStorage.getItem("expenses")
      ).filter((expense) => expense.budgetId !== values.id);
      localStorage.setItem("expenses", JSON.stringify(remainingExpenses));

      // Redirect to 'home/budgets'
      redirect("/home/budgets");
    } catch (error) {
      console.log(error);
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteExpenseByExpenseId(values.id);
      // console.log(remainingExpenses)
    } catch (error) {
      console.log(error);
    }
  }
return null;
}

const BudgetOverviewPage = () => {
  let { id } = useParams();
  const [expenses, setExpenses] = useState([])
  const budget = findBudgetById(id);
  // console.log(budget);

  useEffect(() => {
    setExpenses(getExpensesByBudget(id))
  }, [id])

  const navigate = useNavigate();

  const showDelete = id !== undefined;
  const showBudgetName = id === undefined;
  // console.log(showBudgetName, budgetId)

  return (
    <section>
      <div>
        <h1 className="text-[40px]">
          <span
            style={{
              color: `hsl(${budget?.color})`,
            }}
          >
            {budget?.name}
          </span>
          &nbsp;Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          <>
            <BudgetItem budget={budget} showDelete={showDelete} budgetId={id} />
          </>
          <div className="mr-[5%]">
            <BudgetCard showBudgetCategory={false} budget={budget} id={id} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[30px] font-semibold">
          Recent{" "}
          <span
            style={{
              color: `hsl(${budget?.color})`,
            }}
          >
            {budget?.name}
          </span>{" "}
          Expense <small>({expenses.length} total)</small>
        </h1>
        <div className="grid-md">
          <Table expenses={expenses} showBudgetName={showBudgetName} />
        </div>
      </div>
      <div className="mt-[1em]">
        <button
          className="cursor-pointer group relative inline-flex items-center gap-1.5 
        px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
        rounded-2xl hover:bg-opacity-70 
        transition font-semibold shadow-md"
          onClick={() => navigate(-1)}
        >
          &lt;&nbsp;&nbsp;&nbsp;Go back
        </button>
      </div>
    </section>
  );
};

export default BudgetOverviewPage;
