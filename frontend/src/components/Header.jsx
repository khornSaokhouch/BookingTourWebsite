import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBriefcase } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div>
      {/* Navbar Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-auto h-20 object-cover"
            />
          </div>

          {/* Navigation Links */}
          <nav className=" md:flex space-x-20 text-gray-700 font-medium text-lg px-20">
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
            <a href="./services" className="hover:text-blue-500">
              Services
            </a>
            <a href="./attractions" className="hover:text-blue-500">
              Attractions
            </a>
          </nav>

          {/* Right Section: Favourites + Become Supplier + Sign in */}
          <div className="hidden md:flex items-center space-x-6 ml-auto text-lg">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 flex items-center space-x-6"
            >
              <i className="fas fa-heart"></i> {/* Favourites Icon */}
              <span>Favourites</span>
            </a>
            <a
              href="./become a supplier"
              className="text-gray-700 hover:text-blue-500 flex items-center space-x-2"
            >
              <i className="fas fa-briefcase"></i> {/* Supplier Icon */}
              <span>Become a supplier</span>
            </a>
            <a
              href="/login"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 flex items-center space-x-2"
            >
              <span>Sign in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[450px]"
        style={{
          backgroundImage: `url('../banner.png')`, // Replace with your image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 py-20">
          <h1 className="text-white text-4xl font-semibold mt-20">
            Discover Amazing Places
          </h1>

          {/* Search Box */}
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-4xl mx-auto mt-20 ">
            {/* Location Icon and Label */}
            <div className="flex items-center px-6 text-gray-500 border-r border-gray-300 ">
              <i className="fa fa-map-marker text-blue-500 text-lg"></i>
              <span className="ml-3 font-medium">Location</span>
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search by name of location"
              className="flex-1 px-6 py-4 text-gray-700 text-base focus:outline-none placeholder-gray-400"
            />

            {/* Search Button */}
            <button className="bg-blue-500 text-white px-8 py-4 text-base font-medium hover:bg-blue-600 transition-all">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
