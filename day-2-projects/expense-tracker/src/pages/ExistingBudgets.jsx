import {
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import BudgetItem from "../components/BudgetItem";
import { MdArrowBack } from "react-icons/md";
import Table from "../components/Table";
import Button from "../components/Button";
import { useState } from "react";
import { useHomeContext } from "../context/HomeContext";

export async function action({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteBudget") {
    try {
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
}

const ExistingBudgets = () => {
  const contextData = useHomeContext();
  const { userName, budgets } = contextData;
  const [expenses, setExpenses] = useState(contextData.expenses);
  const navigate = useNavigate();

  const { id } = useParams();
  const showDelete = id !== undefined;
  const showBudgetName = id === undefined;

  if (budgets === undefined) {
    return navigate(-1);
  }

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <section className="mt-[2%]">
      <h1 className="text-[50px] mb-4">
        <span className="text-[55px] font-semibold">{userName}&apos;s</span>{" "}
        Existing Budgets
      </h1>
      <div className="budgets">
        {budgets.map((budg) => (
          <BudgetItem
            key={budg.id}
            budget={budg}
            budgetId={id}
            showDelete={showDelete}
          />
        ))}
      </div>
      <input type="hidden" name="_action" value="deleteExpense" />
      <input type="hidden" name="id" value={id} />
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h1 className="text-[50px] my-4">Recent Expenses</h1>
          <Table
            // expenses={expenses
            //   .sort((a, b) => a.createdAt - b.createdAt)
            //   .slice(0, 7)}
            showBudgetName={showBudgetName}
            onDelete={handleDelete}
          />
        </div>
      ) : null}
      <div className="mt-[2em] flex justify-between">
        <button
          className="custom-span flex items-center gap-[1em] hover:bg-gray-400 hover:text-gray-900 text-gray-800 font-bold py-4 px-8 rounded-md"
          onClick={() => navigate("/home")}
        >
          <MdArrowBack />
          Go Back
        </button>
        {expenses?.length > 6 ? (
          <Button
            text="View all expenses"
            to="/home/expense"
            showDelete={false}
          />
        ) : null}
      </div>
    </section>
  );
};

export default ExistingBudgets;
