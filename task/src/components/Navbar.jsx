// import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="flex bg-[#4F46E5] w-full justify-between items-center">
      <div className="px-[80px] py-[26px]">
        <img src={logo} alt="Logo" className="h-auto w-50" />
      </div>
      <div className="flex">
        <ul className="flex gap-[28px] mr-10 text-white font-semibold">
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">CONTACT US</a>
          </li>
          <li>
            <a href="">CAREERS</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
