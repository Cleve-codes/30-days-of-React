import {
  deleteExpenseByBudgetId,
  findBudgetById,
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

  if (budget && budgetId === undefined) {
    var { id, name, amount, color } = budget;
    // console.log("true")
  } else {
    id = budgetId;
    amount = findBudgetById(id)?.amount;
    name = findBudgetById(id)?.name;
    color = findBudgetById(id)?.color;
  }

  let spent = getTotalExpensesByBudget(id);
  // console.log(budget)
  
  // console.log(budgetId, id);

  const handleDelete = () => {
    const remainingExpenses = deleteExpenseByBudgetId(id);
    // console.log(remainingBudgets)
    localStorage.setItem("expenses", JSON.stringify(remainingExpenses));
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
        <input type="hidden" name="_action" value="deleteBudget" />
        <input type="hidden" name="id" value={id} />
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
