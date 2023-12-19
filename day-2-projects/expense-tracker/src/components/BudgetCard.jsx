import Button from "./Button"

const BudgetCard = () => {
  return (
    <div className="form-wrapper">
      <div className=" bg-gray-200 rounded-xl w-[650px] h-min-[300px] shadow-xl p-4" >
        <h1 className="font-semibold text-[25px] ml-[2em]">Add New <span>Home</span> Expense</h1>
        <div className="flex items-center justify-center mt-[2%]">
          <div className="flex flex-col ml-[2em]  gap-[.5em] " >
            <label className="font-semibold text-[20px] text-gray-700" htmlFor="name">Expense Name</label>
            <input className="h-[3.5em] w-4/6 rounded-lg outline-button px-8 py-4" type="text" placeholder="e.g Groceries"></input>
          </div>
          <div className='flex flex-col ml-[2em] gap-[.5em]'>
            <label className="font-semibold text-[20px] text-gray-700" htmlFor="name">Amount</label>
            <input className="rounded-sm outline-button px-8 py-4" type="number" placeholder="Enter Amount"></input>
          </div>
        </div>
        <div className="ml-[3em] mt-[2em]">
          <h1 className="font-semibold text-[20px] text-gray-700">Budget Category</h1>
          <select className="min-w-[95%] px-8 py-4 bg-white mr-[2em] outline-button">
            <option>Home</option>
            <option>School</option>
          </select>
        </div>
        <div className="ml-[3em] mt-[2em]">
          <Button text="Add expense" />
        </div>


      </div>
    </div>
  )
}

export default BudgetCard
