import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Main = () => {

  return (
    <div>
      <LoginPage />
      <Outlet />
    </div>
  )
}

export default Main;
