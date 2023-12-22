import { Outlet, redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
// import Nav from "../components/Nav";

export async function action({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data.entries());
  console.log(_action);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      // localStorage.setItem("budgets", JSON.stringify([]));
      // createBudget({ name: "", amount: 0 });
      return toast.success(`Welcome ${values.userName}`);
    } catch (error) {
      throw new Error("There was a problem creating your account");
    }
  }

  if (_action === "deleteUser") {
    try {
      deleteItem("userName");
      deleteItem("budgets");
      deleteItem("expenses");
      return redirect("/");
    } catch (error) {
      throw new Error("There was a problem deleting your account");
    }
  }
}

const Main = () => {
  return (
    <div>
      <LoginPage />
      <Outlet />
    </div>
  );
};

export default Main;
