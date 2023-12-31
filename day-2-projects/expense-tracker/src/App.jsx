// import * as ReactDom from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { action } from "./layouts/Main";
import HomePage, { action as homePageAction } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexRoute from "./pages/IndexRoute";
import ExistingBudgets from "./pages/ExistingBudgets";
import ExpensesPage, {
  action as expensesAction,
  loader as expensesLoader,
} from "./pages/ExpensesPage";
import BudgetOverviewPage, {
  action as budgetsAction,
} from "./pages/BudgetOverviewPage";
import { HomeProvider } from "./context/HomeContext";
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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexRoute />,
        action: homePageAction,
        // element: <BudgetCard />,
      },
      {
        path: "budgets",
        element: <ExistingBudgets />,
        action: expensesAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "expense",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
      },
      {
        path: ":id",
        element: <BudgetOverviewPage />,
        action: budgetsAction,
        errorElement: <ErrorPage />,
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
      <HomeProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </HomeProvider>
    </div>
  );
}
