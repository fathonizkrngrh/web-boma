import React from "react";
import { motion } from "framer-motion";
import { sectionVariant } from "../utils/motion";
import { bidangs } from "../constants";
import CardBidang from "./CardBidang";

const Bidang = () => {
  return (
    <section
      className={`bg-[#eeedf0] block items-center py-14  max-ss:px-6 max-[1060px]:text-center`}
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
              className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px] text-[#101010]  font-medium tracking-wide justify-center`}
            >
              Bidang Olahraga
            </h2>
          </motion.div>
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="w-full md:mt-0 mt-6">
              <p
                className={` font-larsseit max-lg:text-[14px] max-[1060px]:justify-center mt-5 text-[#10101088] tracking-wide`}
              >
                5 Bidang olahraga yang dinaungi oleh BOMA
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="flex flex-wrap  justify-center  w-full feedback-container relative z-[1]">
            {bidangs.map((card) => (
              <CardBidang key={card.id} {...card} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bidang;
