import React from "react";

const AboutMe = () => {
  return (
    <div className="px-10 pt-7 pb-5">
      <div className="flex justify-between align-center text-lg">
        {/* <h2 className="uppercase font-bold text-base leading-6">about me</h2> */}
        <label className="block text-lg font-semibold mb-4">ABOUT ME</label>
        <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white">
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
