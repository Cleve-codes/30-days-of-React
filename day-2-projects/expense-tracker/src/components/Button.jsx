import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ text, to, onClick, disabled }) => {
  if (to) {
    return (
      <Link
        to={to}
        className="cursor-pointer group relative flex gap-1.5 
        px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
        rounded-2xl hover:bg-opacity-70 
        transition font-semibold shadow-md"
        onClick={onClick}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className="cursor-pointer group relative flex gap-1.5 
        px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
        rounded-2xl hover:bg-opacity-70 
        transition font-semibold shadow-md mb-[1em]"
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? "Submitting..." : text}
      </button>
    );
  }
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
