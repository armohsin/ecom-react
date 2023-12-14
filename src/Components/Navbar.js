// import "./styles/tailwind-pre-build.css";
// src/App.js
import React, { useState, useEffect } from "react";
import Logo from '../Images/Logo.png'
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800"><img  width={150} height={150} src={Logo} /></div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 ml-2">
              Home
            </a>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 ml-2">
              About
            </a>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 ml-2">
              Services
            </a>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-600 ml-2">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col mt-4 space-y-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};



export default Navbar;
