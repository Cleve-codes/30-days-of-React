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

export async function action({ request }) {
  const data = await request.formData();
  const userName = data.get('userName')
  console.log(userName)
  return null
}


const HomePage = () => {
  const { userName } = useLoaderData()
  const [budget, setBudget] = useState('')

  return (
    <main className="home">
      <div className="container-lg  flex flex-col text-black ml-[20%] mt-[2em]">
        <Nav userName={userName} />
        <div>
          <h1 className="text-[65px] font-bold mt-[.5em]" >
            Welcome back, <span>{userName}</span>
          </h1>
          {
            !userName && (
              <>
                <p className="text-[26px] leading-[1em]">Personal budgeting is the secret to financial freedom.</p>
                <p className="text-[26px] leading-[3em]">Create a bugdet to get started</p>
              </>)
          }
        </div>
        <div className="flex-1 mt-[2em] mr-[15%] grid grid-cols-2 grid-rows-2">
          <ExpenseCard />
          <BudgetCard />
        </div>
      </div>
    </main>
  )
}

export default HomePage;
