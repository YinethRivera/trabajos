import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";
const Header = () => {
  return (
    <header className="bg-white">
      <nav
      style={{fontFamily:'cursive'}}
        className="bg-pink-500 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" >
        <img src={img} alt="" width="50px" />
        <Link to="/Start" className="text-sm font-semibold leading-6 text-black">
          Start
        </Link>
        <Link
          to="/CategoryProducts"
          className="text-sm font-semibold leading-6 text-black">
          CategoryProducts
        </Link>
        <Link
          to="/Categories"
          className="text-sm font-semibold leading-6 text-black">
          Categories
        </Link>
        <Link
          to="/Start"
          className="text-sm font-semibold leading-6 text-black">
          Start
        </Link>
      </nav>
    </header>
  );
};
export default Header;
