import React from "react"
import { Form } from 'react-router-dom'
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"
import { HiUserPlus } from "react-icons/hi2";


const Login = () => {
  return (
    <Form method="post" action="/home" className="shadow-md rounded-xl h-max-[700px] w-max-[510px] mt-[4em] bg-login text-loginTxt flex flex-col items-center">
      <h1 className="mt-[3rem] text-[30px] font-bold" >Create Account</h1>
      <div className="flex flex-col w-full p-[4rem]">
        <label htmlFor='username' id="username">Username</label>
        <input
          className="w-[350px] h-[2.5em] rounded-md bg-transparent border-2 border-stone-500 mb-4"
          type="text"
          name="userName"
          placeholder=""
          required
          aria-label="Your Name"
          autoComplete="given-name"
        >
        </input>


        <label htmlFor='email' id="email">Email</label>
        <input className="w-[350px] h-[2.5em] rounded-md bg-transparent border-2 border-stone-500"
          type="email"
          name="email"
          placeholder=""
          required
          aria-label="Your Email"
        >
        </input>

        <div className="flex w-full ml-[60%] mt-2">
          <p className="cursor-pointer">
            Forgot password?
          </p>
        </div>
      </div>

      <button type="submit" className="bg-button text-buttonTxt flex gap-[1em] items-center px-12 py-4 rounded-md text-xl font-bold" >
        <p>
          Create Account
        </p>
        <HiUserPlus width={24} className="font-bolder" />
      </button>
      <div className="flex items-center pt-[1rem]">
        <div className="h-[1em] flex-1 bg-white"></div>
        <p className="pl-3 pr-3 text-[0.875rem] leading-5 text-socialMsg">Login with social accounts</p>
        <div className="line"></div>
      </div>
      <div className="flex flex-row gap-5 mt-4">
        <FaGoogle className="w-5 h-5" />
        <FaTwitter className="w-5 h-5" />
        <FaGithub className="w-5 h-5" />
      </div>
      <div className="mt-[2rem] mb-[2em]">
        <p className="text-socialMsg">Dont have an account? <span className="text-loginTxt">Sign up</span></p>
      </div>
    </Form>
  )
}

export default Login;


export const Logout = () => {
  return (
    <form>
      <h1>Are you sure you want to leave?</h1>
      <button>Logout</button>
    </form>
  )
}
