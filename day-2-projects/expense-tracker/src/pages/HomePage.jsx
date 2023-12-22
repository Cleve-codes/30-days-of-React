// import ExpenseCard from "../components/ExpenseCard";
import { Outlet, useLoaderData } from "react-router-dom";
import { createBudget, createExpense, fetchData, wait } from "../helpers";
import Nav from "../components/Nav";
// import BudgetCard from "../components/BudgetCard";
import { toast } from "react-toastify";
// import BudgetItem from "../components/BudgetItem";

export function Loader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

export async function action({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  console.log(_action);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      localStorage.setItem("budgets", JSON.stringify([]));
      return toast.success(`Welcome ${values.userName}`);
    } catch (error) {
      throw new Error("There was a problem creating your account");
    }
  }

  if (_action === "addBudget") {
    console.log(_action);
    await wait();
    try {
      await createBudget({
        name: values.expense,
        amount: values.expenseAmount,
      });
      return toast.success(`Budget created succesfully`);
    } catch (error) {
      throw new Error("There was a problem creating your budget");
    }
  }

  if (_action === "addExpense") {
    console.log(_action);
    await wait();
    try {
      await createExpense({
        name: values.expense,
        amount: values.expenseAmount,
        budgetId: values.newExpense,
      });
      return toast.success(`${values.expense} added as an expense`);
    } catch (error) {
      throw new Error("There was a problem creating your budget");
    }
  }
}

const HomePage = () => {
  const { userName, budgets } = useLoaderData();
  console.log(userName, budgets);

  return (
    <>
      <div className="min-h-screen  flex flex-col text-black ml-[15%] mt-[2em] mr-[5%]">
        <Nav userName={userName} />
        <Outlet />
      </div>
      <div className="home"></div>
    </>
  );
};

export default HomePage;
