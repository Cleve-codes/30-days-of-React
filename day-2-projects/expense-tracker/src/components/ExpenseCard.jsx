import Button from "./Button";
import { Form } from "react-router-dom";
// import BudgetCard from "./BudgetCard";

const ExpenseCard = () => {
  return (
    <form
      // method="post"
      // action="/home/expense"
      className="bg-gray-300 rounded-xl w-[650px] h-min-[300px] shadow-2xl p-4"
    >
      <h1 className="font-semibold text-[25px] ml-[2em]">Create a budget</h1>
      <div className="flex flex-col ml-[2em] mt-[2em] gap-[.5em] ">
        <label
          className="font-semibold text-[20px] text-gray-700"
          id="budgetName"
          htmlFor="budgetName"
        >
          Budget Name
        </label>
        <input
          className="h-[3.5em] w-4/6 rounded-lg outline-button p-5"
          type="text"
          placeholder="e.g Groceries"
        ></input>
      </div>
      <div className="flex flex-col ml-[2em] gap-[.5em]">
        <label
          className="font-semibold text-[20px] text-gray-700"
          htmlFor="budgetAmount"
          id="budgetAmount"
        >
          Amount
        </label>
        <input
          className="h-[3.5em] w-4/6 rounded-sm outline-button p-5"
          type="number"
          step={0.01}
          placeholder="Enter Amount"
          inputMode="decimal"
          required
        ></input>
      </div>
      <div className="ml-[2em] mt-[2em]">
        <Button text="Create Budget 🪙" />
      </div>
      {/* { */}
      {/* budget.length > 0 && */}
      {/* <BudgetCard budget={budget} /> */}
      {/* } */}
    </form>
  );
};

export default ExpenseCard;
