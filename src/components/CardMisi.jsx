import React from "react";

const CardMisi = ({ content, number }) => {
  return (
    <div className="flex justify-between flex-col  py-auto rounded-[20px] w-full mt-4 md:mx-4 sm:mx-2 mx-4  bg-cover bg-card  object-cover">
      <div className=" bg-main rounded-full mx-auto p-2 w-10 mt-5 h-10">
        <p className="text-white text-center text-md font-bold ">{number}</p>
      </div>
      <div className="px-10 my-5 text-center min-h-[80px] h-full">
        <h4 className=" font-normal text-[16px] leading-[32px] my-auto align-middle">
          {content}
        </h4>
      </div>
    </div>
  );
};

export default CardMisi;
