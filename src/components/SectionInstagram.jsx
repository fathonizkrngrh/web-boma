import React from "react";
import { motion } from "framer-motion";
import { sectionVariant } from "../utils/motion";
import { feedIg } from "../constants";

const SectionInstagram = () => {
  return (
    <section className="w-full bg-main  ">
      <div className="max-w-7xl mx-auto lg:py-32 py-28  lg:px-12 px-8 ">
        <div className=" text-center w-fit mx-auto">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2
              className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px]  text-white font-medium tracking-wide justify-center`}
            >
              Instagram
            </h2>
            <div className="bg-[#97B8FC] rou h-1.5 w-full my-auto mx-auto rounded-lg"></div>
          </motion.div>
        </div>
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-wrap w-full lg:mt-20 mt-10 mx-auto justify-center ">
            {feedIg.map((feed) => (
              <div className="flex justify-between flex-col lg:w-1/4 w-full md:mx-4 sm:mx-2 mx-0 my-5 overflow-hidden border">
                <a href={feed.url}>
                  <img
                    class="object-cover w-full h-96 hover:scale-110 hover:scale-120 duration-700 transition ease-in-out delay-150"
                    src={feed.img}
                    alt="Sunset in the mountains"
                  />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionInstagram;
