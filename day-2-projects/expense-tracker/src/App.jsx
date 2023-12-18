import * as React from 'react'
// import * as ReactDom from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main, { action as logoutAction } from './layouts/Main';
import HomePage, { Loader as homepageLoader, } from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    action: logoutAction,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
    loader: homepageLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}
