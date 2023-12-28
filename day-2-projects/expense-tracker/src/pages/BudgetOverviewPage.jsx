import { useParams } from "react-router-dom";
import { findBudgetById, getExpensesByBudget } from "../helpers";
import BudgetItem from "../components/BudgetItem";
import BudgetCard from "../components/BudgetCard";
import Table from "../components/Table";



const BudgetOverviewPage = () => {
  let { budgetId } = useParams();
  const expenses = getExpensesByBudget(budgetId);
  const budget = findBudgetById(budgetId);
  console.log(budget)

  const showDelete = budgetId !== undefined;
  const showBudgetName = budgetId === undefined;
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
            <BudgetItem budget={budget} showDelete={showDelete} />
          </>
          <div className="mr-[5%]">
            <BudgetCard showBudgetCategory={false} budget={budget} />
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
    </section>
  );
};

export default BudgetOverviewPage;
