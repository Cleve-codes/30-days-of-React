import React, { useState } from "react"
import ExpenseCard from '../components/ExpenseCard'
import { Form, redirect, useLoaderData } from "react-router-dom";
import { fetchData } from '../helpers'
import Nav from "../components/Nav";
import BudgetCard from "../components/BudgetCard";

export function Loader() {
  const userName = fetchData("userName")
  return { userName };
}


const HomePage = () => {
  const { userName } = useLoaderData()
  const [budget, setBudget] = useState('')

  return (
    <div className="container-lg ml-[10%] mt-[2%] flex flex-col text-black ">
      <Nav userName={userName} />
      <div>
        <h1 className="text-[65px] font-bold mt-[1em] mb-[.5em]">
          Welcome back, <span>{userName}</span>
        </h1>
        <p className="text-[26px] leading-[1em]">Personal budgeting is the secret to financial freedom.</p>
        <p className="text-[26px] leading-[3em]">Create a bugdet to get started</p>
      </div>
      <div className="flex-1 mt-[2em] mr-[15%] grid grid-cols-2 grid-rows-2">
        <ExpenseCard />
        <BudgetCard />
      </div>
    </div>
  )
}

export default HomePage;
