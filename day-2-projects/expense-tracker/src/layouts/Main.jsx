import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export async function action({ request }) {
  const data = await request.formData();
  const formData = {
    email: data.email,
    name: data.name,
  }

  console.log(formData)
  return { formData }
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
