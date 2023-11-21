import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useCallback, useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault();
    setDropdown((isOpen) => !isOpen);
  };

  const handleCloseModal = useCallback((e) => {
    if (!e.key || e.key === "Escape") {
      setDropdown(false);
    }
  }, []);

  useEffect(() => {
    if (dropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [dropdown]);

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
            className="cursor-pointer"
            style={{ display: dropdown ? "none" : "block" }}
          />
          {dropdown && <Dropdown handleCloseModal={handleCloseModal} />}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
