import { useNavigate, useParams } from "react-router-dom";
import { createExpense, findBudgetById, wait } from "../helpers";
import BudgetItem from "../components/BudgetItem";
import BudgetCard from "../components/BudgetCard";
import Table from "../components/Table";

import { toast } from "react-toastify";
import { useHomeContext } from "../context/HomeContext";

export const action = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "addExpense") {
    await wait(1000);
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.budgetId,
      });
      console.log(_action, values);
      return toast.success(`${values.newExpense} added as an expense`);
    } catch (error) {
      return toast.error(error?.message);
      // return console.log(error?.message);
    }
  }
  return null;
};

const BudgetOverviewPage = () => {
  let { id } = useParams();
  const values = useHomeContext();
  const expenses = values.expenses;
  const budget = findBudgetById(id);
  const navigate = useNavigate();
  
  if (!budget) {
    navigate(-1);
    return null;
  }

  const showDelete = id !== undefined;
  const showBudgetName = id === undefined;
  // console.log(showBudgetName, budgetId)

  // const handleDelete = (id) => {
  //   const updatedExpenses = expenses.filter((expense) => expense.id !== id);
  //   setExpenses(updatedExpenses);
  //   localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  // };

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
          Expense{" "}
          <small>
            ({expenses.filter((expense) => expense.budgetId === id).length}{" "}
            total)
          </small>
        </h1>
        <div className="grid-md">
          <Table showBudgetName={showBudgetName} />
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
