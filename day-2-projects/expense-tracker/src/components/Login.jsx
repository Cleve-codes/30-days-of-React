import React from "react"
import { Link } from 'react-router-dom'
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"

const Login = () => {
  return (
    <form className="shadow-md rounded-xl h-[700px] w-[510px] mt-[4em] bg-login text-loginTxt flex flex-col items-center">
      <h1 className="mt-[3rem] mb-[1.5rem] text-[30px] font-bold" >Login</h1>
      <div className="flex flex-col w-full p-[4rem]">
        <label htmlFor='username'>Username</label>
        <input className="w-[350px] h-[2.5em] rounded-md bg-transparent border-2 border-loginTxt" type="text" name="username" placeholder=""></input>
      </div>
      <div className="flex flex-col w-full pl-[4rem]">
        <label htmlFor='email'>Email</label>
        <input className="w-[350px] h-[2.5em] rounded-md bg-transparent border-2 border-loginTxt" type="email" name="email" placeholder=""></input>
      </div>
      <div className="flex w-full ml-[100%] mt-2">
        <p className="">
          Forgot password?
        </p>
      </div>
      <button className="bg-button text-buttonTxt w-[350px] h-[2.5em] mt-[2em] mr-[11%] rounded-md text-xl font-bold" >
        <Link to='/home'>
          Sign in
        </Link>
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
      <div className="mt-[2rem]">
        <p className="text-socialMsg">Dont have an account? <span className="text-loginTxt">Sign up</span></p>
      </div>
    </form>
  )
}

export default Login;
