import React from "react";
import bgimg from "../assets/bg_img.jpg";
function HeaderSection() {
  return (
    <div className="block mb-10">
      <div className="lg:h-[700px] min-w-auto">
        <img src={bgimg} alt="banner img" className="w-full h-full" />
      </div>
      <div className="bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] lg:-mt-[30%] lg:absolute lg:ml-20 lg:w-[630px] p-5">
        <h1 className="text-5xl text-white font-semibold">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <button className="bg-[#F28D35] text-sm py-2 px-4 mt-2 text-white">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
}

export default HeaderSection;
