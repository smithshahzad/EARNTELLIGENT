"use client";
import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface MenuItem {
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { label: "Tech", link: "#" },
  { label: "Reviews", link: "#" },
  { label: "Science", link: "#" },
  { label: "Entertainment", link: "#" },
  { label: "AI", link: "#" },
];

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="border-b border-gray-600">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Left Drawer Toggle (Hamburger Menu - Optional for mobile) */}
        <button
          className="md:hidden flex items-center text-xl focus:outline-none"
          onClick={() => setDrawerOpen(!isDrawerOpen)}
        >
          <FiMenu />
        </button>

        {/* Logo */}
        <div className="text-xl font-semibold">
          <span className="uppercase">The</span>
          <span> </span>
          <span className="uppercase font-bold">Earntelligent</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-base">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.link} className="hover:text-gray-300">
                {item.label}
              </a>
              {index < menuItems.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </React.Fragment>
          ))}
          <span className="text-gray-400">/</span>
          <button
            className="flex items-center hover:text-gray-300 cursor-pointer bg-transparent border-none focus:outline-none"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <span>More</span>
            <HiOutlinePlusSm className="text-2xl ml-1" />
          </button>
        </div>
      </div>

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
          <span className="text-lg font-semibold">Menu</span>
          <button
            className="text-xl focus:outline-none"
            onClick={() => setDrawerOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="px-6 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              <a href={item.link} className="hover:text-gray-300">
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
