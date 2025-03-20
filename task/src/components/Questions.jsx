import { Minus, Plus } from "lucide-react";
import React from "react";

function Questions() {
  return (
    <div className="flex flex-col justify-center mx-5 md:mx-[10%] lg:mx-[20%] my-10 w-auto">
      <div className="text-center mb-2">
        <h1 className="text-[#4F46E5] text-2xl font-semibold">
          Frequently asked questions
        </h1>
      </div>
      {/* first question */}
      <div className="bg-[#FAF8FF] p-4 mb-2">
        <div className="flex justify-between">
          <h2 className="text-[#4F46E5] font-semibold">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </h2>
          <Minus color="#4F46E5" />
        </div>
        <p className="text-gray-500 text-sm pr-8">
          Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
          ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien
          massa morbi risus sagittis tortor integer.
        </p>
      </div>
      {/* second question */}
      <div className="bg-[#FAF8FF] p-4 mb-2">
        <div className="flex justify-between font-semibold">
          <h2>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h2>
          <Plus />
        </div>
      </div>
      {/* Third question */}
      <div className="bg-[#FAF8FF] p-4">
        <div className="flex justify-between font-semibold">
          <h2>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h2>
          <Plus />
        </div>
      </div>
    </div>
  );
}

export default Questions;
