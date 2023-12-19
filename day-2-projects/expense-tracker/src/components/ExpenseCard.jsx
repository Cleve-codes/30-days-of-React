import { useState } from "react";
import Button from "./Button";
import { Form } from "react-router-dom";
// import BudgetCard from "./BudgetCard";

const ExpenseCard = () => {

  const [budget, setBudget] = useState([]);
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');

  function addBudget() {
    console.log('Adding budget')
    if (item.trim() === '' || isNaN(amount) || amount <= 0) {
      return;
    }

    setBudget(prev => [...prev, { item, amount }])
    console.log(budget)
    setItem('')
    setAmount('')
  }


  return (
    <Form method="post" action="/home/expense" className="bg-gray-300 rounded-xl w-[650px] h-min-[300px] shadow-2xl p-4" >
      <h1 className="font-semibold text-[25px] ml-[2em]">Create a budget</h1>
      <div className="flex flex-col ml-[2em] mt-[2em] gap-[.5em] " >
        <label className="font-semibold text-[20px] text-gray-700" htmlFor="name">Budget Name</label>
        <input className="h-[3.5em] w-4/6 rounded-lg outline-button p-5" value={item} onChange={(e) => setItem(e.target.value)} type="text" placeholder="e.g Groceries"></input>
      </div>
      <div className="flex flex-col ml-[2em] gap-[.5em]">
        <label className="font-semibold text-[20px] text-gray-700" htmlFor="name">Amount</label>
        <input className="h-[3.5em] w-4/6 rounded-sm outline-button p-5" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount"></input>
      </div>
      <div className="ml-[2em] mt-[2em]">
        <Button text="Create Budget" onClick={addBudget} />
      </div>
      {/* { */}
      {/* budget.length > 0 && */}
      {/* <BudgetCard budget={budget} /> */}
      {/* } */}
    </Form>
  )
}


export default ExpenseCard;
