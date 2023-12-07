const ExpenseCard = () => {
  return (
    <div className="bg-gray-200 rounded-xl w-[550px] h-[250px] shadow-xl p-4" >
      <h1 className="font-semibold text-[20px]">Create a budget</h1>
      <div className="flex flex-col gap-[1em]" >
        <label htmlFor="name">Budget Name</label>
        <input className="h-[3em] w-[1/2] rounded-xl" type="text" placeholder="e.g Groceries"></input>
      </div>
      <div className="flex flex-col gap-[1em]">
        <label htmlFor="name">Amount</label>
        <input type="number" placeholder="Enter Amount"></input>
      </div>
    </div>
  )
}

export default ExpenseCard;
