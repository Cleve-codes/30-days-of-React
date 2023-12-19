import { Link } from "react-router-dom";

const Button = ({ text, to, onClick }) => {
  return (
    <button className="cursor-pointer group relative flex gap-1.5 
    px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
    rounded-2xl hover:bg-opacity-70 
    transition font-semibold shadow-md" onClick={onClick} >
      <Link to={to}>
        {text}
      </Link>
    </button>
  )
}

export default Button;
