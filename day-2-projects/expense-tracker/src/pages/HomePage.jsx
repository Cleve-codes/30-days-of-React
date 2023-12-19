import React, { useState } from "react"
import ExpenseCard from '../components/ExpenseCard'
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { fetchData } from '../helpers'
import Nav from "../components/Nav";
import BudgetCard from "../components/BudgetCard";
import { toast } from "react-toastify";

export function Loader() {
  const userName = fetchData("userName")
  return { userName };
}

export async function action({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem('userName', JSON.stringify(formData.userName))
    return toast.success(`Welcome ${formData.userName}`)
  } catch (error) {
    throw new Error('There was a problem creating your account')
  }
}

export async function addBudgetAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  console.log(formData, request);
  return null;
}


const HomePage = () => {
  const { userName } = useLoaderData()
  const [budget, setBudget] = useState([])
  return (
    <>
      <div className="container-lg  flex flex-col text-black ml-[20%] mt-[2em]">
        <Nav userName={userName} />
        <div>
          <h1 className="text-[55px] font-bold mt-[.5em]" >
            Welcome back, <span>{userName}</span>
          </h1>
          {
            budget.length === 0 && (
              <div className="mt-[1.5em]">
                <p className="text-[22px] leading-[.5em]">Personal budgeting is the secret to financial freedom.</p>
                <p className="text-[22px] leading-[3em]">Create a bugdet to get started</p>
              </div>)
          }
        </div>
        <div className="flex-1 mt-[2em] mr-[15%] grid grid-cols-2 grid-rows-2">
          <ExpenseCard />
          {budget.length > 0 && <BudgetCard />}
        </div>
      </div>
      <div className="home"></div>
    </>)
}

export default HomePage;
