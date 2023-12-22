import { formatCurrency, formatPercentage, totalSpent } from "../helpers";
import PropTypes from "prop-types";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  console.log(budget)
  const spent = totalSpent(id);
  console.log(spent)

  return (
    <div className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {/* Percentage */}
        {formatPercentage(spent/amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
    </div>
  );
};

BudgetItem.propTypes = {
  budget: PropTypes.object.isRequired,
};

export default BudgetItem;
