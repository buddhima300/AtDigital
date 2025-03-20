import React from "react";
import img1 from "../assets/intro2.png";

function Intro2() {
  return (
    <div className="block sm:flex items-center justify-center lg:mx-[20%]">
      <div className="px-5 text-justify w-full">
        <h1 className="text-2xl text-[#4F46E5] font-semibold">
          Digital Strategy Consulting
        </h1>
        <p>
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button className="bg-[#F28D35] px-4 py-2 mt-2 text-white rounded-md">
          LEARN MORE
        </button>
      </div>
      <div className="sm:w-150 h-auto ">
        <img src={img1} alt="side img" className="w-full h-full " />
      </div>
    </div>
  );
}

export default Intro2;
