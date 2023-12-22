import { formatCurrency, totalSpent } from "../helpers";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  const spent = totalSpent(id);
  const remaining = amount - spent;

  return (
    <div className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value="100">
        {/* Percentage */}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(remaining)} remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
