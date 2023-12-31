import { Outlet } from "react-router-dom";
import { createBudget, createExpense, fetchData, wait } from "../helpers";
import Nav from "../components/Nav";
import { toast } from "react-toastify";
import { useHomeContext } from "../context/HomeContext";
;


export function Loader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

export async function action({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      localStorage.setItem("budgets", JSON.stringify([]));
      localStorage.setItem("expenses", JSON.stringify([]));
      return toast.success(`Welcome ${values.userName}`);

    } catch (error) {
      throw new Error("There was a problem creating your account");
    }
  }

  if (_action === "addBudget") {
    await wait(1000);
    try {
      createBudget({
        name: values.budget,
        amount: values.budgetAmount,
      });
      return toast.success(`Budget created succesfully`);
    } catch (error) {
      throw new Error("There was a problem creating your budget");
    }
  }

  if (_action === "addExpense") {
    await wait(1000);
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.budgetId,
      });
       console.log(_action, values);
      return toast.success(`${values.newExpense} added as an expense`);
    } catch (error) {
      return toast.error(error?.message);
      // return console.log(error?.message);
    }
  }
  return null;
}

const HomePage = () => {

  return (
    <>
      <div className="flex flex-col">
        <div className="text-black ml-[15%] mt-[2em] mr-[5%] min-h-[70vh]">
          <Nav />
          <Outlet />
        </div>
        <div className="home min-h-[30vh]"></div>
      </div>
    </>
  );
};

export default HomePage;
