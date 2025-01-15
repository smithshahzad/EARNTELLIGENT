import React from "react";
import {
  FaRss,
  FaTwitter,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="border-t	border-gray-400 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-16">
        {/* Left Section - Social Icons and Copyright */}
        <div className="space-y-4 mb-6 lg:mb-0">
          <h3 className="text-sm font-bold">FOLLOW US</h3>
          <div className="flex space-x-4">
            <FaRss className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
            <FaTelegramPlane className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
            <FaYoutube className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
          </div>
          <p className="text-sm">
            <a href="#" className="text-white font-bold hover:underline">
              Terms of services
            </a>{" "}
            and{" "}
            <a href="#" className="text-white font-bold hover:underline">
              Privacy policy
            </a>
          </p>
          <p className="text-sm text-gray-500">
            &copy; Earntelligent 2013 - 2024
          </p>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-sm font-bold mb-4">EARNTELLIGENT NEWSLETTER</h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-800 text-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-green-400 text-black font-bold px-6 py-3 rounded-r-md hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400">
            EARNTELLIGWNT covers fintech, Tech,  and Science bringing you
            the latest news and on the current situation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
