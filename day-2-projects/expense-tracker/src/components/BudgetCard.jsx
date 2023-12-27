import { useFetcher, useLoaderData } from "react-router-dom";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { wait } from "../helpers";

const BudgetCard = () => {
  const { budgets } = useLoaderData();
  const selectRef = useRef();
  const fetcher = useFetcher();
  const formRef = useRef();
  const focusRef = useRef();
  const budgetsPresent = localStorage.getItem("budgets").length > 2;

  const isSubmitting = fetcher.state === "submitting";
  let selectedOption = selectRef.current?.value || budgets[0]?.name;

  const [selectedBudget, setSelectedBudget] = useState(
    selectedOption ? selectedOption : budgets ? [-1].name : null
  );
  const [disabled, setDisabled] = useState(false);

  // console.log(selectedOption)

  // Dynamically set budgetId
  let budgetId = "";
  if (budgetsPresent) {
    const parsedBudgets = JSON.parse(localStorage.getItem("budgets"));
    if (
      parsedBudgets.length > 0
      // &&
      // Object.keys(parsedBudgets[0]).includes("name")
    ) {
      // budgetId = parsedBudgets[0].id;
      parsedBudgets.forEach((budget) => {
        if (selectedOption && budget.name === selectedOption) {
          budgetId = budget.id;
        }
      });
    }
  }

  // Check if expense amount is greater than budget amount
  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    const budgetAmount = budgets.find(
      (budget) => budget.name === selectedBudget
    ).amount;
    if (inputAmount > budgetAmount) {
      wait().then(() => {
        // e.target.value = "";
        setDisabled(true);
        wait().then(() => {
          e.target.value = "";
          setDisabled(false);
          formRef.current.reset();
        });
        return toast.warn("Not enough funds.");
      });
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  const handleSelectChange = () => {
    const selectedOption = selectRef.current.value;
    setSelectedBudget(selectedOption);
  };

  return (
    <div className="form-wrapper">
      <fetcher.Form
        method="post"
        ref={formRef}
        className=" bg-gray-200 rounded-xl w-max-[650px] h-min-[300px] shadow-xl p-4"
      >
        <h1 className="font-semibold text-[25px] ml-[2em]">
          Add New{" "}
          <span>
            {budgets.length === 1
              ? `${budgets.map((budg) => budg.name)}`
              : selectedBudget}
          </span>{" "}
          Expense.
        </h1>
        <div className="flex items-center justify-center mt-[2%]">
          <div className="flex flex-col ml-[2em]  gap-[.5em] ">
            <label
              className="font-semibold text-[20px] text-gray-700"
              name="expense"
              htmlFor="expense"
            >
              Expense Name
            </label>
            <input
              className="h-[3.5em] w-4/6 rounded-lg outline-button px-8 py-4"
              type="text"
              ref={focusRef}
              name="newExpense"
              autoComplete="on"
              required
              placeholder="e.g Groceries"
            ></input>
          </div>
          <div className="flex flex-col ml-[2em] gap-[.5em]">
            <label
              className="font-semibold text-[20px] text-gray-700"
              name="amount"
              htmlFor="expenseAmount"
            >
              Amount
            </label>
            <input
              className="rounded-sm outline-button px-8 py-4"
              type="number"
              name="newExpenseAmount"
              step={0.01}
              inputMode="decimal"
              autoComplete="on"
              required
              placeholder="Enter Amount"
              onChange={handleAmountChange}
              disabled={disabled}
            ></input>
          </div>
          <input type="hidden" name="_action" value="addExpense" />
          <input type="hidden" name="budgetId" value={budgetId} />
        </div>
        {budgets?.length > 1 && (
          <div className="ml-[3em] mt-[2em]">
            <h1 className="font-semibold text-[20px] text-gray-700">
              Budget Category
            </h1>
            <select
              name="newExpenseBudget"
              id="newExpenseBudget"
              className="min-w-[95%] px-8 py-4 bg-white mr-[2em] outline-button"
              onChange={handleSelectChange}
              ref={selectRef}
            >
              {/* <option>Home</option>
              <option>School</option> */}
              {budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budget) => (
                  <option key={budget.id}>{budget.name}</option>
                ))}
            </select>
          </div>
        )}
        <div className="ml-[3em] mt-[2em]">
          <Button text="Add expense 🪙" disabled={isSubmitting} />
        </div>
      </fetcher.Form>
    </div>
  );
};

export default BudgetCard;
