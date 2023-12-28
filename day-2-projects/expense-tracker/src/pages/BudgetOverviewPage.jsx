import { useParams } from "react-router-dom";
import { findBudgetById, getExpensesByBudget } from "../helpers";
import BudgetItem from "../components/BudgetItem";
import BudgetCard from "../components/BudgetCard";

const BudgetOverviewPage = () => {
  let { budgetId } = useParams();
  const expenses = getExpensesByBudget(budgetId);
  const budget = findBudgetById(budgetId);
  console.log(expenses);

  return (
    <section>
      <div>
        <h1 className="text-[40px]">
          <span
            style={{
              color: `hsl(${budget.color})`,
            }}
          >
            {budget.name}
          </span>
          &nbsp;Overview
        </h1>
        <div className="grid grid-cols-1">
          <BudgetItem budget={budget} />
          <BudgetCard />
        </div>
      </div>
    </section>
  );
};

export default BudgetOverviewPage;
