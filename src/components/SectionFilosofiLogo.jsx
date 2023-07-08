import React from "react";
import { logo } from "../assets";
import { filosofiLogo } from "../constants";
import { motion } from "framer-motion";
import { textVariant2, textVariant3 } from "../utils/motion";

const SectionFilosofiLogo = () => {
  return (
    <section className="w-full bg-white max-w-7xl mx-auto lg:py-32 py-28  lg:px-12 px-8  ">
      <div className="lg:mb-0 mb-10 w-fit mx-auto">
        <p className="font-medium tracking-wide lg:text-4xl text-2xl ">
          Filosofi Logo
        </p>
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
