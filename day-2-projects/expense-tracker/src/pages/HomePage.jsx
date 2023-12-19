import ExpenseCard from "../components/ExpenseCard";
import { useLoaderData } from "react-router-dom";
import { createBudget, fetchData } from "../helpers";
import Nav from "../components/Nav";
import BudgetCard from "../components/BudgetCard";
import { toast } from "react-toastify";

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
      return toast.success(`Welcome ${values.userName}`);
    } catch (error) {
      throw new Error("There was a problem creating your account");
    }
  }

  if (_action === "addBudget") {
    console.log(values.expense);
    try {
      createBudget({
        name: values.expense,
        amount: values.expenseAmount,
      })
      return toast.success(`Budget created succesfully`);
    } catch (error) {
      throw new Error("There was a problem creating your budget");
    }
  }
}

const HomePage = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      <div className="container-lg  flex flex-col text-black ml-[20%] mt-[2em]">
        <Nav userName={userName} />
        <div>
          <h1 className="text-[55px] font-bold mt-[.5em]">
            Welcome back, <span>{userName}</span>
          </h1>
          {budgets?.length > 0 && (
            <div className="mt-[1.5em]">
              <p className="text-[22px] leading-[.5em]">
                Personal budgeting is the secret to financial freedom.
              </p>
              <p className="text-[22px] leading-[3em]">
                Create a bugdet to get started
              </p>
            </div>
          )}
        </div>
        <div className="flex-1 mt-[2em] mr-[15%] grid grid-cols-2 grid-rows-2">
          <ExpenseCard />
          {budgets?.length > 0 && <BudgetCard />}
        </div>
      </div>
      <div className="home"></div>
    </>
  );
};

export default HomePage;
