import { Form } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import Logo from "../assets/logomark.svg";

const Nav = () => {
  return (
    <nav className="flex  flex-row leading-normal items-center justify-between gap-2">
      <div className="flex flex-row gap-4 items-center">
        <img className="w-10 h-10" src={Logo} alt="Logo" />
        <h1 className="font-bold text-[25px]">HomeBudget</h1>
      </div>

      <Form
        method="post"
        action="/"
        className="border-2 border-red-500 mr-[5%] rounded-xl"
        onSubmit={(e) => {
          if (!confirm("Delete user and all data?")) {
            e.preventDefault();
          }
        }}
      >
        <button
          type="submit"
          className="text-black px-8 py-4 flex  justify-center items-center gap-2"
        >
          <p className="font-bold text-[20px]" to="/">
            Delete User
          </p>
          <FaRegTrashAlt className="text-red-500" />
        </button>
        <input type="hidden" name="_action" value="deleteUser"></input>
      </Form>
    </nav>
  );
};

export default Nav;
