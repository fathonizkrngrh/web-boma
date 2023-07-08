import React from "react";

const CardVisi = ({ content }) => {
  return (
    <div className="flex justify-between flex-col  py-auto rounded-[20px]  max-w-48 md:mx-4 sm:mx-2 mx-0  bg-cover bg-card  object-cover">
      <div className="px-10 my-5 text-center">
        <h4 className=" font-normal text-[16px] leading-[32px] ">{content}</h4>
      </div>
    </div>
  );
};

export default CardVisi;
