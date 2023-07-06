import React from "react";

const CardPengurus = ({ nama, jabatan, prodi, img }) => {
  return (
    <div>
      <div className="flex justify-between flex-col  pt-12 rounded-[20px]  max-w-80 md:mx-4 sm:mx-2 mx-0 my-5 feedback-card transition ease-in-out delay-150 duration-700 bg-white hover:text-white">
        <img
          src={img}
          alt="icons"
          className=" ml-8 w-[60px] h-[55px] py-2 bg-white rounded-xl"
        />
        <div className="px-11 mt-10">
          <h4 className="text-left font-larsseit font-bold text-[25px] leading-[32px] ">
            {nama}
          </h4>
          <p className="max-w-[200px] text-left font-larsseit font-normal text-[15px] leading-[32.4px]  my-5">
            {jabatan}
          </p>
          <p className="max-w-[200px] text-left font-larsseit font-normal text-[15px] leading-[32.4px]  my-5">
            {prodi}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPengurus;
