import React from "react";

const ProfessionalInfo = () => {
  return (
    <div className=" px-10 pb-5">
      <div className="flex justify-between mb-5">
        <h2 className="uppercase font-bold text-base leading-6">
          professional information
        </h2>
        <button className="bg-orange-500 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white">
          Edit
        </button>
      </div>

      <div className="grid gap-y-0 gap-x-7 grid-cols-2 truncate w-full">
        <div className="my-1">
          <div>Highest Education</div>
          <div className="flex bg-white py-2 px-4 mt-1">
            <input type="text" placeholder="Graduation" />
          </div>
        </div>

        <div className="my-1">
          <div>What do you do currently?</div>
          <div className="flex bg-white py-2 px-4 mt-1">
            <input type="text" placeholder="College Student" />
          </div>
        </div>
      </div>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default ProfessionalInfo;
