import React from "react";

import heroImage from "../assets/landingPage/landing.png";

function Hero() {
  return (
    <div>
      <div className="relative lg:pt-40 pt-32 lg:py-10 py-6 max-w-7xl mx-auto ">
        <div className="">
          <div className="flex">
            <p className="sm:text-lg md:text-xl lg:text-2xl text-md">
              Badan Olahraga Mahasiswa
            </p>
            <div className="bg-main md:lg-1 lg:h-1.5 h-0.5 sm:w-7 md:w-10 lg:w-12 w-5 lg:ml-4 ml-2 my-auto"></div>
          </div>
          <p className="text-main md:text-6xl lg:text-8xl text-5xl font-bold">
            UPI KAMPUS CIBIRU
          </p>
        </div>
        <div className="absolute -top-20 right-0 -z-10">
          <div className="bg-fixed font-bold text-[250px] h-auto text-right text-stroke">
            <p className="h-[200px]">BOMA</p>
            <p className="h-[200px]">BOMA</p>
            <p className="h-[200px]">BOMA</p>
          </div>
        </div>
      </div>
      <div className="z-10">
        <img className="w-full" src={heroImage} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
