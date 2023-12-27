import { useLoaderData, useNavigate } from "react-router-dom";
import BudgetItem from "../components/BudgetItem";
import { MdArrowBack } from "react-icons/md";
import Table from "../components/Table";

export async function loader() {
  const userName = JSON.parse(localStorage.getItem("userName"));
  const budgets = JSON.parse(localStorage.getItem("budgets"));
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  return { userName, budgets, expenses };
}

// export async function Loader(){
//   const res = await fetch("/api/budgets");
//   const data = await res.json();

//   console.log(data);
// }

const ExistingBudgets = () => {
  const { userName, budgets, expenses } = useLoaderData();
  const navigate = useNavigate();

  return (
    <section className="mt-[3%]">
      <h1 className="text-[50px] mb-4">
        <span className="text-[55px] font-semibold">{userName}&apos;s</span>{" "}
        Existing Budgets
      </h1>
      <div className="budgets">
        {budgets.map((budget) => (
          <BudgetItem key={budget.id} budget={budget} />
        ))}
      </div>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h1 className="text-[50px] my-4">Recent Expenses</h1>
          <Table
            expenses={expenses.sort((a, b) => b.createdAt - a.createdAt)}
          />
        </div>
      ) : null}
      <div className="mt-[2em]">
        <button
          className="custom-span flex items-center gap-[1em] hover:bg-gray-400 hover:text-gray-900 text-gray-800 font-bold py-4 px-8 rounded-md"
          onClick={() => navigate(-1)}
        >
          <MdArrowBack />
          Go Back
        </button>
      </div>
    </section>
  );
};

export default ExistingBudgets;
