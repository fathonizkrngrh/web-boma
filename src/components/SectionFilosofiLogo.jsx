import React from "react";
import { logo } from "../assets";
import { filosofiLogo } from "../constants";
import { motion } from "framer-motion";
import { textVariant2, textVariant3, sectionVariant } from "../utils/motion";

const SectionFilosofiLogo = () => {
  return (
    <section className="w-full bg-white max-w-7xl mx-auto lg:py-32 py-28  lg:px-12 px-8  ">
      <div className=" text-center w-fit mx-auto">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2
            className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px]   font-medium tracking-wide justify-center`}
          >
            Filosofi Logo
          </h2>
          <div className="bg-[#97B8FC] rou h-1.5 w-full my-auto mx-auto rounded-lg"></div>
        </motion.div>
      </div>
      <div className="flex flex-wrap lg:mt-0 mt-10 ">
        <div className="lg:w-1/2 w-full  my-auto mx-auto">
          <motion.div
            variants={textVariant3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img className="lg:w-4/6 w-3/5  mx-auto " src={logo} alt="logo" />
          </motion.div>
        </div>
        <div className="lg:w-1/2 mt-10 my-auto text-black ml-auto">
          <ul className="list-disc">
            {filosofiLogo.map((logo, index) => (
              <motion.div
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="flex flex-wrap w-full mt-5">
                  <div className="lg:w-1/12 w-full text-center my-auto pt-5">
                    <p className="text-2xl font-bold text-main">{index + 1}</p>
                  </div>
                  <div className="lg:w-10/12 w-full flex flex-col ml-5 mt-5">
                    <p className="font-medium lg:text-justify text-center text-xl">
                      {logo.logo}
                    </p>
                    <p className="font-normal lg:text-justify text-center mt-2">
                      {logo.arti}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionFilosofiLogo;
