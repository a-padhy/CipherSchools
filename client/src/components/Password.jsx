import React, { useState } from "react";
import PasswordModal from "./Modals/PasswordModal";

const Password = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changePwHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <PasswordModal closeModal={closeModal} />}
      <div className="mb-2 w-full px-10 py-5">
        <div className="flex justify-between align-center h-10">
          <label className="block text-lg font-semibold pb-1">
            PASSWORD AND SECURITY
          </label>
          <button
            onClick={changePwHandler}
            className="bg-orange-500 hover:bg-orange-600 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white"
          >
            Change
          </button>
        </div>
        <div className="relative rounded-md shadow-sm">
          <input
            type="password"
            name="password"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-lg border-gray-300 rounded-md bg-white"
            value="Password"
            disabled
          />
        </div>
      </div>
    </>
  );
};

export default Password;
