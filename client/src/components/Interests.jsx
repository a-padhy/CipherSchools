import React, { useState } from "react";
import InterestModal from "./Modals/InterestModal";

const selectedOptions = [
  { optionId: 1, label: "App Development", selected: false },
  { optionId: 2, label: "Web Development", selected: true },
  { optionId: 3, label: "Game Development", selected: false },
  { optionId: 4, label: "Data Structures", selected: false },
  { optionId: 5, label: "Programming", selected: false },
  { optionId: 6, label: "Machine Learning", selected: false },
  { optionId: 7, label: "Data Science", selected: false },
  { optionId: 8, label: "Others", selected: false },
];

const Interests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(selectedOptions);
  const editHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <InterestModal
          closeModal={closeModal}
          options={options}
          setOptions={setOptions}
        />
      )}
      <div className="mb-2 w-full px-10 py-5">
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
          {options.map(({ optionId, label, selected }) => {
            if (selected)
              return (
                <span
                  key={optionId}
                  className="inline-flex items-center mx-2 px-5 py-1 rounded-half text-sm font-medium bg-orange-100 text-orange-600"
                >
                  {label}
                </span>
              );
          })}
        </div>
      </div>
    </>
  );
};

export default Interests;
