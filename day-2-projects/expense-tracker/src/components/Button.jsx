const Button = ({ text }) => {
  return (
    <button className="cursor-pointer group relative flex gap-1.5 
    px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] 
    rounded-2xl hover:bg-opacity-70 
    transition font-semibold shadow-md" >
      {text}
    </button>
  )
}

export default Button;
