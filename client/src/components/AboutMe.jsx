import React from "react";

const AboutMe = () => {
  return (
    <div className="px-10 pt-7 pb-5">
      <div className="flex justify-between mb-5">
        <h2 className="uppercase font-bold text-base leading-6">about me</h2>
        <button className="bg-orange-500 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white">
          Edit
        </button>
      </div>
      <textarea
        className="p-4 w-full bg-white"
        rows="4"
        placeholder="Add something about you."
      ></textarea>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default AboutMe;
