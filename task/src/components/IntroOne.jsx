import React from "react";
import img1 from "../assets/intro1.png";

function IntroOne() {
  return (
    <div className="block sm:flex items-center justify-center md:mx-[20%]">
      <div className=" sm:w-150 h-auto ">
        <img src={img1} alt="side img" className="w-full h-full " />
      </div>
      <div className="px-5 my-5 text-justify w-full">
        <h1 className="text-2xl text-[#4F46E5] font-semibold">
          Web & Mobile Development
        </h1>
        <p>
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <button className="bg-[#F28D35] px-4 py-2 mt-2 text-white rounded-md">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default IntroOne;
