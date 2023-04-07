import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-white h-14 flex items-center">
      <div className="mr-2 flex items-center">
        <img
          className="h-9 ml-4"
          src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
          alt="img"
        ></img>
        <h1 className="pl-1 font-bold text-xl">CipherSchools</h1>
      </div>
      <div className="h-4 mx-4 flex items-center">
        <AiOutlineCompass />
        <span className="px-1">Browse</span>
        <IoIosArrowDown />
      </div>

      <div>
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center w-full h-9 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 "
              type="text"
              id="search"
              placeholder="Search and Learn"
            />
          </div>
        </div>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
