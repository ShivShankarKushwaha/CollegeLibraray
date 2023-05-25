import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex items-center text-xl border-0 border-black h-52 ">
        <div className="flex w-2/4 items-center ml-5">
            <img className=" " src="/images/1logo-una.png" alt="LOGO" />
        </div>
      <ul className="flex w-2/4 items-center justify-around mr-10 font-semibold">
            <NavLink  to="/"  >Home</NavLink>
            <NavLink to="/search" >Search</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink className="bg-blue-700 text-white p-5" to="/user">Login/SignUp</NavLink>
        </ul>
    </div>
  )
}

export default Navbar;