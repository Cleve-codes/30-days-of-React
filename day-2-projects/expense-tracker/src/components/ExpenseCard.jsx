import { useEffect, useRef } from "react";
import { Link, useFetcher } from "react-router-dom";
// import BudgetCard from "./BudgetCard";

const ExpenseCard = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const budgetsPresent = localStorage.getItem("budgets").length > 2;

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
        ref={formRef}
        name="newBudget"
        id="newBudget"
        className="bg-gray-300 rounded-xl shadow-2xl lg:p-2 sm:p-4"
      >
        <h1 className="font-semibold text-[25px] ml-0 sm:ml-[2em] xs:text-center xs:mt-[.25em]">
          Create a budget
        </h1>
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
            name="budget"
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
            name="budgetAmount"
            id="budgetAmount"
            placeholder="Enter Amount"
            inputMode="decimal"
            autoComplete="on"
            required
          ></input>
          <input type="hidden" name="_action" value="addBudget" />
        </div>
        <div className="flex flex-col lg:flex-row sm:gap-8 gap-2 ">
          <div className="sm:mt-[2em] sm:mx-[2em] xs:mx-[2em] ml-0 mt-[2em]">
            {/* <Button className="px-8 py-4" text="Create Budget 🪙" disabled={isSubmitting} /> */}
            <button
              className="cursor-pointer group relative flex gap-1.5 
                px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
                rounded-2xl hover:bg-opacity-70 
                transition font-semibold shadow-md
                lg:w-max w-full
                "
              type="submit"
            >
             Add A Budget 🪙
            </button>
          </div>
          {budgetsPresent && (
            <div className="mt-0 lg:mt-[2em]">
              <Link
                className="cursor-pointer group relative flex gap-1.5 
                px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
                rounded-2xl hover:bg-opacity-70 
                transition font-semibold shadow-md sm:mx-[2em] xs:mx-[2em] xs:mb-[1em]"
                to="/home/budgets"
              >
                View <span className="text-white xs:hidden">Existing</span>{" "}
                Budgets
              </Link>
            </div>
          )}
        </div>
      </fetcher.Form>
    </div>
  );
};

export default ExpenseCard;
