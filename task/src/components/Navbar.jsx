import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import Modal from "./Modal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:flex bg-[#4F46E5] w-full justify-between sm:items-center">
      <div className="flex justify-around">
        <div className="flex flex-col items-center ml-[30px] pt-5 sm:px-[80px] sm:py-[26px]">
          <img src={logo} alt="Logo" className="h-auto w-50" />
        </div>
        <div className="text-white mt-5 sm:hidden" onClick={toggleMenu}>
          <Menu />
        </div>
      </div>

      {/* Menu items for larger screens */}
      <ul className="hidden sm:flex gap-[28px] mr-10 text-white font-semibold">
        <li className="hover:text-[#F28D35]">
          <a href="">SERVICES</a>
        </li>
        <li className="hover:text-[#F28D35]">
          <a href="">ABOUT US</a>
        </li>
        <li className="hover:text-[#F28D35]">
          <a href="">CONTACT US</a>
        </li>
        <li className="hover:text-[#F28D35]">
          <a href="">CAREERS</a>
        </li>
      </ul>

      {/* Modal for mobile screens */}
      <Modal isOpen={isOpen} onClose={toggleMenu}>
        <ul className="flex-col items-center sm:hidden gap-[28px] mr-10 text-black font-semibold">
          <li className="hover:text-[#4F46E5]">
            <a href="">SERVICES</a>
          </li>
          <li className="hover:text-[#4F46E5]">
            <a href="">ABOUT US</a>
          </li>
          <li className="hover:text-[#4F46E5]">
            <a href="">CONTACT US</a>
          </li>
          <li className="hover:text-[#4F46E5]">
            <a href="">CAREERS</a>
          </li>
        </ul>
      </Modal>
    </div>
  );
}

export default Navbar;
