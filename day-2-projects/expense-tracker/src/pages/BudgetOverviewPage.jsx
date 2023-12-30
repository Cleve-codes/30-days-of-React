import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { findBudgetById, getExpensesByBudget } from "../helpers";
import BudgetItem from "../components/BudgetItem";
import BudgetCard from "../components/BudgetCard";
import Table from "../components/Table";
import { useEffect, useState } from "react";

export async function loader() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) ?? [];
  return { expenses };
}

const BudgetOverviewPage = () => {
  let { id } = useParams();
  const loaderData = useLoaderData();
  const [expenses, setExpenses] = useState(loaderData.expenses);
  const budget = findBudgetById(id);
  const navigate = useNavigate();

  if (!budget) {
    navigate(-1);
    return null;
  }

  // console.log(budget);

  const showDelete = id !== undefined;
  const showBudgetName = id === undefined;
  // console.log(showBudgetName, budgetId)
  console.log(expenses);

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setExpenses(getExpensesByBudget(id));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [id]);

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
          Expense <small>({expenses.filter((expense) => expense.budgetId === id).length} total)</small>
        </h1>
        <div className="grid-md">
          <Table
            expenses={expenses.filter((expense) => expense.budgetId === id)}
            showBudgetName={showBudgetName}
            onDelete={handleDelete}
          />
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
