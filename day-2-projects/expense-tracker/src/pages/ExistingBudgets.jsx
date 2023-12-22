import { useNavigate } from "react-router-dom";
import BudgetItem from "../components/BudgetItem";
import { MdArrowBack } from "react-icons/md";

const ExistingBudgets = () => {
  const budgets = JSON.parse(localStorage.getItem("budgets"));
  const userName = JSON.parse(localStorage.getItem("userName"));
  const navigate = useNavigate();

  return (
    <section className="mt-[3%]">
      <h1 className="text-[50px] mb-4">
        <span className="text-[55px] font-semibold">{userName}&apos;s</span> Existing
        Budgets
      </h1>
      <div className="budgets">
        {budgets.map((budget) => (
          <BudgetItem key={budget.id} budget={budget} />
        ))}
      </div>
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
