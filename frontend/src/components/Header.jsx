import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center px-20 py-4 bg-FFFFFF border-b-2 border-b-3 border-gray-300 h-[110px] flex-wrap">
        {/* Logo */}
        <div className="logo mr-8">
          <img src="./logo.png" alt="logo" className="w-20" />
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-12">
            <li>
              <Link to="/" className="text-lg text-black hover:text-blue-600">
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/article"
                className="text-lg text-black hover:text-blue-600"
              >
                ARTICLE
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-lg text-black hover:text-blue-600"
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar (Mobile and Desktop) */}
        <div className="search ml-auto  flex-1 md:flex-initial">
          <form className="flex space-x-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="px-4 py-2 text-lg rounded-full bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[250px] placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-lg text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        {/* Add Recipe Button (Desktop) */}
        <div className="add_recipe ml-60 hidden md:block">
          <a href="#" className="text-lg text-black hover:text-blue-600">
            + ADD A RECIPE
          </a>
        </div>

        {/* Right-side Buttons (Mobile: Hamburger + Login) */}
        <div className="ml-auto flex items-center space-x-6">
          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            <i
              className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            />
          </button>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-blue-500 text-white px-10 py-2 rounded-full text-sm hover:bg-blue-600"
          >
            LOGIN
          </Link>
        </div>
      </header>

      {/* Sub-menu Section (Desktop) */}
      <div className="sub-menu hidden md:block bg-FFFFFF border-b-2 mb-5  py-5 px-20">
        <ul className="flex space-x-8 px-6 ">
          <li>
            <Link to="/events" className="text-black hover:text-blue-600">
              Events
            </Link>
          </li>
          <li>
            <Link to="/popular" className="text-black hover:text-blue-600">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/drinks" className="text-black hover:text-blue-600">
              Drinks
            </Link>
          </li>
          <li>
            <Link to="/dessert" className="text-black hover:text-blue-600">
              Dessert
            </Link>
          </li>
          <li>
            <Link to="/occasions" className="text-black hover:text-blue-600">
              Occasions
            </Link>
          </li>
          <li>
            <Link to="/soup" className="text-black hover:text-blue-600">
              Soup
            </Link>
          </li>
          <li>
            <Link to="/fried" className="text-black hover:text-blue-600">
              Fried
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (for smaller screens) */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-100 py-4`}
      >
        <ul className="flex flex-col space-y-4 px-6">
          <li>
            <Link to="/" className="text-lg text-black hover:text-blue-600">
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/article"
              className="text-lg text-black hover:text-blue-600"
            >
              ARTICLE
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="text-lg text-black hover:text-blue-600"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="text-lg text-black hover:text-blue-600"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/popular"
              className="text-lg text-black hover:text-blue-600"
            >
              Popular
            </Link>
          </li>
          <li>
            <Link
              to="/drinks"
              className="text-lg text-black hover:text-blue-600"
            >
              Drinks
            </Link>
          </li>
          <li>
            <Link
              to="/dessert"
              className="text-lg text-black hover:text-blue-600"
            >
              Dessert
            </Link>
          </li>
          <li>
            <Link
              to="/occasions"
              className="text-lg text-black hover:text-blue-600"
            >
              Occasions
            </Link>
          </li>
          <li>
            <Link to="/soup" className="text-lg text-black hover:text-blue-600">
              Soup
            </Link>
          </li>
          <li>
            <Link
              to="/fried"
              className="text-lg text-black hover:text-blue-600"
            >
              Fried
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
