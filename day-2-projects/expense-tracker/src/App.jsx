import * as React from 'react'
import * as ReactDom from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main';
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
