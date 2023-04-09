import React from "react";

const Interests = () => {
  const selectedOptions = [
    { optionId: 1, label: "Popi" },
    { optionId: 2, label: "Annie" },
    { optionId: 3, label: "Babu" },
  ];
  return (
    <div className="mb-2 w-full p-10">
      <div className="flex justify-between align-center h-10">
        <label className="block text-md font-medium">INTERESTS</label>
        <button
          // onClick={changePwHandler}
          className="bg-orange-500 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white"
        >
          Edit
        </button>
      </div>
      <div className="mt-3">
        {selectedOptions.map(({ optionId, label }) => (
          <span
            key={optionId}
            class="inline-flex items-center mx-2 px-5 py-1 rounded-half text-sm font-medium bg-red-100 text-red-600"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Interests;
