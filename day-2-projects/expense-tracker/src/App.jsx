// import * as ReactDom from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { action } from "./layouts/Main";
import HomePage, {
  Loader as homepageLoader,
  action as homePageAction,
} from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexRoute from "./pages/IndexRoute";
// import BudgetCard from "./components/BudgetCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    action: action,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    action: homePageAction,
    loader: homepageLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexRoute />,
        action: homePageAction,
        loader: homepageLoader,
        // element: <BudgetCard />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
