import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useCallback, useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault();
    setDropdown((isOpen) => !isOpen);
  };

  const handleCloseModal = useCallback((e) => {
    if (e.key === "Escape") {
      setDropdown(false);
    }
    setDropdown(prev => !prev);
  }, []);

  useEffect(() => {
    if (dropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [dropdown]);

  useEffect(function () {
    window.addEventListener("keydown", handleCloseModal);
    return () => window.removeEventListener("keydown", handleCloseModal);
  }, [handleCloseModal]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-motserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={handleDropdown}
            style={{ display: dropdown ? "none" : "block" }}
          />
          {dropdown && <Dropdown handleCloseModal={handleCloseModal} />}
        </div>
      </nav>
    </header>
  );
};

const Dropdown = ({handleCloseModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100 min-h-full">
      <div className="bg-white flex flex-col items-center rounded-lg w-3/4 h-1/2 overflow-auto">
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

export default Nav;
