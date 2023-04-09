import React, { useState } from "react";
import Modal from "./Modal";

const Interests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOptions = [
    { optionId: 1, label: "App Development" },
    { optionId: 2, label: "Web Development" },
    { optionId: 3, label: "Game Development" },
    { optionId: 4, label: "Data Structures" },
    { optionId: 5, label: "Programming" },
    { optionId: 6, label: "Machine Learning" },
    { optionId: 7, label: "Data Science" },
    { optionId: 8, label: "Others" },
  ];
  const editHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const modal = (
    <Modal closeModal={closeModal}>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-5 text-white">
          {selectedOptions.map(({ optionId, label }) => (
            <span
              key={optionId}
              className="bg-orange-500 p-2 rounded cursor-pointer"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );

  return (
    <>
      {isOpen && modal}
      <div className="mb-2 w-full p-10">
        <div className="flex justify-between align-center h-10">
          <label className="block text-lg font-semibold">INTERESTS</label>
          <button
            onClick={editHandler}
            className="bg-orange-500 hover:bg-orange-600 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white"
          >
            Edit
          </button>
        </div>
        <div className="mt-3">
          {selectedOptions.map(({ optionId, label }) => (
            <span
              key={optionId}
              className="inline-flex items-center mx-2 px-5 py-1 rounded-half text-sm font-medium bg-orange-100 text-orange-600"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interests;
