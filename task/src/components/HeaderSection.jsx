import React from "react";
import bgimg from "../assets/bg_img.jpg";
function HeaderSection() {
  return (
    <div className="h-[700px] w-auto">
      <div className="flex">
        <img src={bgimg} alt="banner img" />
        <div className="absolute mt-[25%] ml-[10%] w-[630px] bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] p-[40px]">
          <h1 className="text-5xl text-white font-semibold">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <button className="bg-[#F28D35] text-sm py-2 px-4 mt-2 text-white">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
