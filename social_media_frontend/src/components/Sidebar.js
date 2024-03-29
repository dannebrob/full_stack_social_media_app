import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";

import { categories } from "../utils/data";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const renderCategories = categories.slice(0, categories.length - 1);
function Sidebar({ user, closeToggle }) {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link to="/" className="flex px-5 gap-2 my-6 pt-1 w-190 items-center">
          <img
            src={logo}
            alt="logo"
            className="w-full"
            onClick={handleCloseSidebar}
          />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill /> Home
          </NavLink>
          {!user && (
            <NavLink
              to="/login"
              className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize"
              onClick={handleCloseSidebar}
            >
              <MdOutlineLogin /> Login
            </NavLink>
          )}
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover categories
          </h3>
          {renderCategories.map((category) => {
            return (
              <NavLink
                to={`/category/${category.name}`}
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
                onClick={handleCloseSidebar}
                key={category.name}
              >
                <img
                  src={category.image}
                  alt="category-image"
                  className="w-8 h-8 rounded-full shadow-sm"
                />
                {category.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-5 gap-2 p-2 items-center bg-white rounded-lg shadow-lg crusor-pointer"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.user.image}
            className="w-10 h-10 rounded-full"
            alt="User Profile"
          />
          <p>{user.user.userName}</p>
        </Link>
      )} */}
    </div>
  );
}

export default Sidebar;
