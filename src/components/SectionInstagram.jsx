import React from "react";
import { motion } from "framer-motion";
import { InstagramEmbed } from "react-social-media-embed";
import { sectionVariant } from "../utils/motion";
import { urlInstagramFeed } from "../constants";

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
        <div className="flex flex-wrap w-full lg:mt-20 mt-10 mx-auto ">
          {urlInstagramFeed.map((url) => (
            <div className="lg:w-1/3  justify-center mx-auto mt-5">
              <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <InstagramEmbed
                  url={url}
                  width={326}
                  height={550}
                  className="mx-auto"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionInstagram;
