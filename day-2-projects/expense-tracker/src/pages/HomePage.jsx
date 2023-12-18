import React from "react"
import Logo from '../assets/logomark.svg'
import ExpenseCard from '../components/ExpenseCard'
import { useLoaderData } from "react-router-dom";
import { fetchData } from '../helpers'
// import { redirect } from "react-router-dom"

export function Loader() {
  const userName = fetchData("userName")
  return { userName };
}

const HomePage = () => {
  const { userName } = useLoaderData()


  return (
    <div className="w-[90%] h-[90vh] flex flex-col justify-center text-black ml-[12%] mt-[2em]">
      <div className="flex mt-[7%] flex-row leading-normal items-center justify-start gap-2">
        <img className="w-10 h-10" src={Logo} alt="Logo" />
        <h1 className="font-bold text-[25px]">HomeBudget</h1>
      </div>
      <div>
        <h1 className="text-[65px] font-bold mt-[1em] mb-[.5em]">
          Welcome back, <span>{userName}</span>
        </h1>
        <p className="text-[26px] leading-[1em]">Personal budgeting is the secret to financial freedom.</p>
        <p className="text-[26px] leading-[3em]">Create a bugdet to get started</p>
      </div>
      <div className="flex-1 mt-[2em] mr-[15%] grid grid-cols-2 grid-rows-2">
        <ExpenseCard />
      </div>
    </div>
  )
}

export default HomePage;
