import React from "react";
import Modal from "../Modal";

const InterestModal = ({ closeModal, options, setOptions }) => {
  const optionClickHandler = (optionId) => {
    const updatedOptions = options.map((option) => {
      if (option.optionId === optionId) {
        return { ...option, selected: !option.selected };
      } else {
        return option;
      }
    });
    setOptions(updatedOptions);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-5 text-white">
          {options.map(({ optionId, label, selected }) => (
            <span
              key={optionId}
              className={`${
                selected
                  ? "bg-orange-500 text-white"
                  : "bg-slate-200 text-black"
              } p-2 rounded cursor-pointer`}
              onClick={() => optionClickHandler(optionId)}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-3 mt-3">
          <button
            onClick={closeModal}
            className="cursor-pointer px-8 py-2 bg-gray-500 text-white text-base rounded-3xl hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            className="cursor-pointer px-8 py-2 bg-orange-500 text-white text-base rounded-3xl hover:bg-orange-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default InterestModal;
