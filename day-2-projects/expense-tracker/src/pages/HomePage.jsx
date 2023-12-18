import React, { useState } from "react"
import Logo from '../assets/logomark.svg'
import ExpenseCard from '../components/ExpenseCard'
import { Form, redirect, useLoaderData } from "react-router-dom";
import { fetchData } from '../helpers'
// import { redirect } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa";

export function Loader() {
  const userName = fetchData("userName")
  return { userName };
}

export function action() {
  // delete user 

  // return redirect
  return redirect('/')
}

const HomePage = () => {
  const { userName } = useLoaderData()
  const [isLoggedIn, setIsLoggedIn] = useState(userName.length > 0);


  return (
    <div className="container-lg ml-[10%] mt-[2%] flex flex-col text-black ">
      <div className="flex  flex-row leading-normal items-center justify-between gap-2">
        <div className="flex flex-row gap-4 items-center">
          <img className="w-10 h-10" src={Logo} alt="Logo" />
          <h1 className="font-bold text-[25px]">HomeBudget</h1>
        </div>
        {isLoggedIn &&
          <Form method="post" action="/" className="border-2 border-red-500 mr-[5%]"
            onSubmit={(e) => {
              if (!confirm("Delete user and all data?")) {
                e.preventDefault()
              }
            }}
          >
            <button type="submit" className="w-[200px] h-[50px] text-black flex flex-row justify-center items-center gap-2">
              <p className="font-bold text-[20px]" to='/'>
                Delete User
              </p>
              <FaRegTrashAlt className="text-red-500" />
            </button>
          </Form>
        }
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
