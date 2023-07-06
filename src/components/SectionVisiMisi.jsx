import React from "react";
import { motion } from "framer-motion";
import { sectionVariant } from "../utils/motion";
import CardVisi from "./CardVisi";
import { visi, misi } from "../constants/index";
import CardMisi from "./CardMisi";

const SectionVisiMisi = () => {
  return (
    <section
      className={`bg-main block items-center lg:py-20 py-14  max-ss:px-6 max-[1060px]:text-center`}
    >
      <div className="max-w-7xl mx-auto   lg:px-12 px-8">
        <div className="block justify-center items-center sm:mb-16 mb-6 relative z-[1] text-center ">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2
              className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px] text-white  font-medium tracking-wide justify-center`}
            >
              Visi
            </h2>
            <div className="bg-[#97B8FC] rou h-1.5 w-16 my-auto mx-auto rounded-lg"></div>
          </motion.div>
        </div>
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="flex flex-wrap  justify-center  w-full feedback-container relative z-[1]">
            <CardVisi {...visi} />
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 lg:px-12 px-8">
        <div className="block justify-center items-center sm:mb-16 mb-6 relative z-[1] text-center ">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2
              className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px] text-white  font-medium tracking-wide justify-center`}
            >
              Misi
            </h2>
            <div className="bg-[#97B8FC] rou h-1.5 w-16 my-auto mx-auto rounded-lg"></div>
          </motion.div>
        </div>
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="flex flex-wrap  justify-center  w-full feedback-container relative z-[1]">
            {misi.map((card) => (
              <CardMisi key={card.id} {...card} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionVisiMisi;
