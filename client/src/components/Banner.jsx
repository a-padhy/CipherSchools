import React, { useState, useContext, useEffect } from "react";
// import Modal from "./Modal";
import { UserContext } from "../UserContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import ProfileModal from "./Modals/ProfileModal";
// import { toast } from "react-toastify";

const Banner = () => {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      axios.get("/").then(({ data }) => {
        setUser(data);
      });
    };
    fetchUser();
  }, [user]);

  const editHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <ProfileModal closeModal={closeModal} />}
      <div className="bg-gray-100 h-24 py-1.5 px-10 flex justify-between items-center relative">
        <div className="flex items-center">
          <div className=" flex items-center justify-center">
            <img
              className="h-16 "
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              alt="img"
            />
            <div
              className="absolute bg-black rounded-3xl h-5 w-5 bottom-2 flex justify-center items-center cursor-pointer"
              onClick={editHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
          </div>
          <div className="inline ml-3 text-md">
            <span className="block">Hello,</span>
            <span className="block font-bold text-lg">
              {" "}
              {(user && `${user.firstName} ${user.lastName}`) ||
                "Cipher Schools"}
            </span>
            <span>{(user && user.email) || "*******@gmail.com"}</span>
          </div>
        </div>

        <Link
          to="/followers"
          className="border border-orange-500 p-2 rounded-lg"
        >
          <button className="font-bold text-base">45 Followers</button>
        </Link>
      </div>
    </>
  );
};

export default Banner;
