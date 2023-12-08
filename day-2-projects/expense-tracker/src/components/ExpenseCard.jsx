import Button from "./Button";

const ExpenseCard = () => {
  return (
    <div className="bg-gray-200 rounded-xl w-[650px] h-min-[300px] shadow-xl p-4" >
      <h1 className="font-semibold text-[25px] ml-[2em]">Create a budget</h1>
      <div className="flex flex-col ml-[2em] mt-[2em] gap-[.5em] " >
        <label className="font-semibold text-[20px] text-gray-700" htmlFor="name">Budget Name</label>
        <input className="h-[3.5em] w-4/6 rounded-lg outline-button p-5" type="text" placeholder="e.g Groceries"></input>
      </div>
      <div className="flex flex-col ml-[2em] gap-[.5em]">
        <label className="font-semibold text-[20px] text-gray-700" htmlFor="name">Amount</label>
        <input className="h-[3.5em] w-4/6 rounded-sm outline-button p-5" type="number" placeholder="Enter Amount"></input>
      </div>
      <div className="ml-[2em] mt-[2em]">
        <Button text="Create Budget" />
      </div>
    </div>
  )
}

export default ExpenseCard;
