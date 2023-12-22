import { useEffect, useRef } from "react";
import Button from "./Button";
import { Link, useFetcher } from "react-router-dom";
// import BudgetCard from "./BudgetCard";

const ExpenseCard = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  
  const budgetsPresent = localStorage.getItem("budgets").length > 2;
  console.log(budgetsPresent);

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <fetcher.Form
        method="post"
        action="/home"
        ref={formRef}
        className="bg-gray-300 rounded-xl w-max-[650px] h-min-[300px] shadow-2xl p-4"
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
            name="expense"
            autoComplete="on"
            ref={focusRef}
            placeholder="e.g Groceries"
            required
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
            name="expenseAmount"
            placeholder="Enter Amount"
            inputMode="decimal"
            autoComplete="on"
            required
          ></input>
          <input type="hidden" name="_action" value="addBudget" />
        </div>
        <div className="flex gap-8">
          <div className="ml-[2em] mt-[2em]">
            <Button text="Create Budget 🪙" disabled={isSubmitting} />
          </div>

          {budgetsPresent && (
            <div className="mt-[2em]">
              <Link
                className="cursor-pointer group relative flex gap-1.5 
    px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
    rounded-2xl hover:bg-opacity-70 
    transition font-semibold shadow-md"
                to="/home/budgets"
              >
                View Existing Budgets
              </Link>
            </div>
          )}
        </div>
        {/* { */}
        {/* budget.length > 0 && */}
        {/* <BudgetCard budget={budget} /> */}
        {/* } */}
      </fetcher.Form>
    </div>
  );
};

export default ExpenseCard;
