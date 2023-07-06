import React from "react";

const CardBidang = ({ content, name, img }) => {
  return (
    <div className="flex justify-between flex-col  pt-12 rounded-[20px]  max-w-80 md:mx-4 sm:mx-2 mx-0 my-5 feedback-card transition ease-in-out delay-150 duration-700 bg-white hover:text-white">
      <img
        src={img}
        alt="icons"
        className="  w-20 p-2 mx-auto bg-white rounded-xl"
      />
      <div className="px-10 mt-10 text-center">
        <h4 className=" font-larsseit font-bold text-[25px] leading-[32px] ">
          {name}
        </h4>
        <p className="max-w-[200px]  font-larsseit font-normal text-[15px] leading-[32.4px]  my-5">
          {content}
        </p>
      </div>
    </div>
  );
};

export default CardBidang;
