import React from "react";

const Banner = () => {
  return (
    <div className="bg-slate-400 h-24 py-1.5 px-10 flex">
      <div className="flex items-center">
        <img
          className="h-20 relative"
          src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
          alt="img"
        />
        <div className="inline ml-3 text-sm">
          <span className="block">Hello,</span>
          <span className="block font-bold text-base">Cipher Schools</span>
          <span>***********@gmail.com</span>
        </div>
      </div>

      <div className="absolute right-0 mr-9 mt-3">
        <button>**.2K followers</button>
      </div>
    </div>
  );
};

export default Banner;
