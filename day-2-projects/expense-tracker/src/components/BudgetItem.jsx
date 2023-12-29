import {
  formatCurrency,
  formatPercentage,
  getTotalExpensesByBudget,
} from "../helpers";
import PropTypes from "prop-types";
import { HiMiniBanknotes } from "react-icons/hi2";
import Button from "./Button";
// import { useParams } from "react-router-dom";

const BudgetItem = ({ budget, showDelete, budgetId }) => {
  // let { id, name, amount, color } = budget;
  if (budget){
    var { id, name, amount, color } = budget;
  }
  let spent = getTotalExpensesByBudget(id);

  // const { budgetId } = useParams();
  if (budgetId !== undefined) {
    id = budgetId;
    name = budget.name;
    amount = budget.amount;
    color = budget.color;
    spent = getTotalExpensesByBudget(id);
  }
  console.log(budgetId);

  const handleDelete = () => {
    const remainingBudgets = JSON.parse(localStorage.getItem("budgets")).filter(
      (budget) => budget.id !== id
    );
    // console.log(remainingBudgets)
    localStorage.setItem("budgets", JSON.stringify(remainingBudgets));
  };

  return (
    <>
      <div
        className="budget"
        style={{
          "--accent": color,
        }}
      >
        <div className="progress-text">
          <h1 className="text-[25px] font-bold">{name}</h1>
          <p className="text-[20px]">{formatCurrency(amount)} Budgeted</p>
        </div>

        <>
          <progress max={amount} value={spent}>
            {formatPercentage(spent / amount)}
          </progress>
          <div className="progress-text">
            <small>{formatCurrency(spent)} spent</small>
            <small>{formatCurrency(amount - spent)} remaining</small>
          </div>
          <div className="flex items-center justify-center">
            {/* <HiMiniBanknotes className="icon" /> */}
            <Button
              to={`/home/${id}`}
              text="View Details"
              icon={<HiMiniBanknotes />}
              showDelete={showDelete}
              onClick={showDelete === true ? handleDelete : undefined}
            />
          </div>
        </>
      </div>
    </>
  );
};

BudgetItem.propTypes = {
  budget: PropTypes.object,
  showDelete: PropTypes.bool,
};

export default BudgetItem;
