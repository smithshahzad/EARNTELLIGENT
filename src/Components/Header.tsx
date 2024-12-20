import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

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
  return (
    <nav className="border-b border-white-600">
      <div className="container mx-auto flex items-center justify-end space-x-6 py-4">
        <div className="text-xl font-semibold">
          <span className="uppercase">The</span>
          <span> </span>
          <span className="uppercase font-bold">Earntelligent</span>
        </div>
        <div className="flex space-x-4 text-base">
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
          <button className="flex items-center hover:text-gray-300 cursor-pointer bg-transparent border-none focus:outline-none">
            <span>More</span>
            <HiOutlinePlusSm className="text-2xl ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
