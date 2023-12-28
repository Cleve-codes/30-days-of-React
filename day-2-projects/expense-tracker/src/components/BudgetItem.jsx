import {
  formatCurrency,
  formatPercentage,
  getTotalExpensesByBudget,
} from "../helpers";
import PropTypes from "prop-types";
import { HiMiniBanknotes } from "react-icons/hi2";
import Button from "./Button";

const BudgetItem = ({ budget, showDelete }) => {
  const { id, name, amount, color } = budget;
  const spent = getTotalExpensesByBudget(id);

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
            />
          </div>
        </>
      </div>
    </>
  );
};

BudgetItem.propTypes = {
  budget: PropTypes.object.isRequired,
};

export default BudgetItem;
