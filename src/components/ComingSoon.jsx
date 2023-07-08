import React from "react";

const ComingSoon = ({ image, soon }) => {
  return (
    <div className=" flex justify-center items-center text-center py-40 bg-slate-200">
      <div className=" flex-col justify-center">
        <div className=" flex justify-center">
          <img className=" lg:w-2/5 w-1/2" src={image} alt="soon" />
        </div>

        <h1 className=" pt-12 font-medium text-[28px] max-[500px]:text-[20px]">
          {soon}
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
