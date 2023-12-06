import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center ml-4 mr-4 justify-between" >
      <Header />
      <Login />
    </main>
  )
}

export default LoginPage;
