import React from "react";
import logo from "../assets/logo/logo.png";

const TentangBoma = ({ tentangBoma }) => {
  return (
    <section className="w-full bg-main">
      <div className="flex max-w-7xl mx-auto lg:py-32 py-28  lg:px-12 px-8 ">
        <div className="lg:w-1/4 w-0 mx-auto bg-white rounded-full">
          <img className="h-[277px] px-5 py-10 " src={logo} alt="logo" />
        </div>
        <div className="lg:w-1/2 my-auto text-white ml-auto">
          <p className="font-medium lg:text-left text-center tracking-wide text-4xl ">
            Tentang <span className="text-white font-bold">BOMA</span>
          </p>
          <p className="font-normal text-justify mt-6">{tentangBoma}</p>
        </div>
      </div>
    </section>
  );
};

export default TentangBoma;
