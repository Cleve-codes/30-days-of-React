import { Outlet, redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
// import Nav from "../components/Nav";

export function action() {
  deleteItem({ key: 'userName' })
  toast.success("Account Deleted succesfully!")
  return redirect('/')
}

const Main = () => {

  return (
    <div>
      <LoginPage />
      <Outlet />
    </div>
  )
}

export default Main;
