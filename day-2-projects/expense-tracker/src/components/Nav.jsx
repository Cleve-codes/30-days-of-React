import React from 'react'
import { useState } from 'react';
import { Form } from 'react-router-dom'
import { FaRegTrashAlt } from "react-icons/fa";
import Logo from '../assets/logomark.svg'

const Nav = ({ userName }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(userName?.length > 0);
  return (
    <nav className="flex  flex-row leading-normal items-center justify-between gap-2">
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
    </nav>
  )
}

export default Nav
