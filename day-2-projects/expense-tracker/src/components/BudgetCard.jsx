import { Form, useLoaderData } from "react-router-dom";
import Button from "./Button";
import { useRef, useState } from "react";

const BudgetCard = () => {

  const { budgets } = useLoaderData()
  const [selectedBudget, setSelectedBudget] = useState(budgets[0].name)
  const selectRef = useRef()

  const handleSelectChange = () => {
    const selectedOption = selectRef.current.value;
    setSelectedBudget(selectedOption)

  }
  console.log(budgets)

  return (
    <div className="form-wrapper">
      <Form
        method="post"
        action="/home/expense"
        className=" bg-gray-200 rounded-xl w-max-[650px] h-min-[300px] shadow-xl p-4"
      >
        <h1 className="font-semibold text-[25px] ml-[2em]">
          Add New <span>{selectedBudget}</span> Expense
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
              placeholder="Enter Amount"
            ></input>
          </div>
        </div>
        {budgets?.length > 1 && (
          <div className="ml-[3em] mt-[2em]">
            <h1 className="font-semibold text-[20px] text-gray-700">
              Budget Category
            </h1>
            <select className="min-w-[95%] px-8 py-4 bg-white mr-[2em] outline-button" onChange={handleSelectChange} ref={selectRef}>
              {/* <option>Home</option>
              <option>School</option> */}
              {budgets.map((budget) => (
                <option key={budget.name}>{budget.name}</option>
              ))}
            </select>
          </div>
        )}
        <div className="ml-[3em] mt-[2em]">
          <Button text="Add expense" />
        </div>
      </Form>
    </div>
  );
};

export default BudgetCard;
