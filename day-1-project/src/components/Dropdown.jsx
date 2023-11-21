import { useEffect, useRef } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const Dropdown = ({ handleCloseModal }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        handleCloseModal(e);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        handleCloseModal(e);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef, handleCloseModal]);

  return (
    <div
      ref={dropdownRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100 min-h-full"
    >
      <div className="bg-white flex flex-col items-center rounded-lg w-full h-full sm:w-1/2 sm:h-1/2 object-contain content-fit overflow-auto">
        <div className="self-end">
          <HiMiniXMark
            className="mt-[1em] mr-[1em] text-[30px] flex cursor-pointer"
            onClick={(e) => handleCloseModal(e)}
          />
        </div>

        <ul className="p-8 space-y-8 mt-[4em]">
          <li>
            <a
              className="text-2xl  border-b-4 border-transparent hover:border-red-500"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-2xl  border-b-4 border-transparent hover:border-red-500"
              href="/"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="text-2xl  border-b-4 border-transparent hover:border-red-500"
              href="/"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-2xl  border-b-4 border-transparent hover:border-red-500"
              href="/"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
