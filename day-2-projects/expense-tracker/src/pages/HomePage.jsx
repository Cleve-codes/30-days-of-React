import React from "react"
import Logo from '../assets/logomark.svg'
import ExpenseCard from '../components/ExpenseCard'

const HomePage = () => {
  return (
    <div className="w-[90%] h-[90vh] flex flex-col justify-center text-black ml-[12%] mt-[2em]">
      <div className="flex flex-row leading-normal items-center justify-start gap-2">
        <img className="w-5 h-5" src={Logo} alt="Logo" />
        <h1 className="font-bold text-[25px]">HomeBudget</h1>
      </div>
      <div>
        <h1 className="text-[60px] font-bold mt-[1em] mb-[.5em]">
          Welcome back, <span>Cleve</span>
        </h1>
        <p className="text-[26px] leading-[1em]">Personal budgeting is the secret to financial freedom.</p>
        <p className="text-[26px]">Create a bugdet to get started</p>
      </div>
      <div className="flex-1 mt-[2em] mr-[15%]">
        <ExpenseCard />
      </div>
    </div>
  )
}

export default HomePage;
