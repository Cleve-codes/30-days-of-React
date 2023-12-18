import { Outlet, redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export function action() {
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
