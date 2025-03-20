import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-[#4F46E5] p-5">
      <div className="block lg:flex justify-between">
        {/* left side */}
        <div className="block md:w-[50%] lg:w-[30%] text-white text-sm">
          <img src={logo} alt="logo" className="w-[45%] md:w-[50%]" />
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        {/* right side */}
        <div className="block mt-10 md:mt-5 lg:mt-0  md:flex justify-around w-[60%] lg:ml-[20%] text-white">
          {/* first column */}
          <div>
            <h3 className="text-xl font-semibold">Our Technologies</h3>
            <ul>
              <li>
                <a href="">React js</a>
              </li>
              <li>
                <a href="">Gatsby</a>
              </li>
              <li>
                <a href="">Next js</a>
              </li>
              <li>
                <a href="">Node js</a>
              </li>
            </ul>
          </div>
          {/* second column */}
          <div>
            <h3 className="text-xl font-semibold mt-5 md:mt-0">Our services</h3>
            <ul>
              <li>
                <a href="">Social media marketing</a>
              </li>
              <li>
                <a href="">Web & Mobile app development</a>
              </li>
              <li>
                <a href="">Data Analytics</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* second section of footer */}
      <div className="mt-5 text-center text-white">
        <hr className="lg:mx-[30%] mb-1" />
        <p>Privacy Policy | Terms and Condition</p>
      </div>
    </div>
  );
}

export default Footer;
