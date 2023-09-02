import React from "react";

const CardPengurus = ({ nama, jabatan, prodi, img }) => {
  return (
    <div>
      <div className="flex justify-between flex-col md:w-48 lg:w-64 w-36 rounded-[20px]   md:mx-4 sm:mx-2 mx-2 my-5 pengurus-card bg-white ">
        {/* <div className="w-full  rounded-[20px] overflow-hidden bg-cover bg-card"> */}
          <div className="w-full  rounded-[20px] overflow-hidden bg-gradient-to-b from-[#97B8FC] to-white">
          <img
            class="object-cover w-full lg:h-96 h-72 rounded-[20px] duration-700 transition ease-in-out delay-150"
            src={img}
            alt="Sunset in the mountains"
          />
        </div>
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2">{nama}</div>
          <p class="text-main mb-1">{jabatan}</p>
          <p class="text-slate-500 ">{prodi}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPengurus;
