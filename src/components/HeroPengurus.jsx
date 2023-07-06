import React from "react";

const HeroPengurus = ({ periode }) => {
  return (
    <div>
      <div className="relative lg:pt-40 pt-32 lg:py-10 py-6 max-w-7xl mx-auto lg:px-4 px-8">
        <div className="">
          <div className="flex">
            <p className="sm:text-lg md:text-xl lg:text-2xl text-md">
              Pengurus
            </p>
            <div className="bg-main md:lg-1 lg:h-1.5 h-0.5 sm:w-7 md:w-10 lg:w-12 w-5 lg:ml-4 ml-2 my-auto"></div>
          </div>
          <p className="text-main md:text-4xl lg:text-6xl text-3xl font-bold">
            BADAN OLAHRAGA MAHASISWA
          </p>
          <p className="text-black md:text-4xl lg:text-6xl text-3xl font-bold">
            {periode}
          </p>
        </div>
        <div className="absolute -top-20 right-0 -z-10">
          <div className="bg-fixed font-bold lg:text-[250px] text-[100px] h-auto text-right text-stroke">
            <p className="lg:h-[200px] h-[100px]">BOMA</p>
            <p className="lg:h-[200px] h-[100px]">BOMA</p>
            <p className="lg:h-[200px] h-[100px]">BOMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPengurus;
