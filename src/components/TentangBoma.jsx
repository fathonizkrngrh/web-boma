import React from "react";
import logo from "../assets/logo/logo.png";

const TentangBoma = ({ tentangBoma }) => {
  return (
    <section>
      <div className="flex max-w-7xl mx-auto lg:py-48 py-28  lg:px-12 px-8 ">
        <div className="lg:w-1/2 w-0">
          <img className="h-[277px] " src={logo} alt="logo" />
        </div>
        <div className="lg:w-1/2 my-auto">
          <p className="font-medium lg:text-left text-center  text-4xl ">
            Tentang <span className="text-main font-bold">BOMA</span>
          </p>
          <p className="font-normal text-justify mt-6">{tentangBoma}</p>
        </div>
      </div>
    </section>
  );
};

export default TentangBoma;
