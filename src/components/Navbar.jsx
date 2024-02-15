import React, { useState } from "react";
import Logo from "../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer "
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block w-8 h-8 lg:w-14 lg:h-14"
          />
          Flavor<span className="text-green-700">Verse</span>
        </Link>

        <ul className="hidden md:flex text-white gap-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-green-500" : "text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link to="#" className="hover:text-green-500">Recipes</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-green-500">Favorites</Link>
          </li>
        </ul>

        <Button
          title="Sign in"
          containerStyle="hidden md:block bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black rounded-md px-3"
        />

        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {console.log(isOpen)}{
          isOpen ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div className={`${isOpen ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px] text-center`}>
                <NavLink to="/">Home</NavLink>
                <Link href="/#recipes">Recipes</Link>
                <Link href="/">Favorites</Link>
            </div>
    </header>
  );
}

export default Navbar;
