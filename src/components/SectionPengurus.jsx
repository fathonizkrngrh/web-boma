import React from "react";
import { motion } from "framer-motion";
import { sectionVariant } from "../utils/motion";
import CardPengurus from "./CardPengurus";
import { pengurus } from "../constants";

const PengurusSection = () => {
  return (
    <section
      className={`bg-main block items-center lg:py-8 py-8  max-ss:px-6 max-[1060px]:text-center`}
    >
      {pengurus.map((jabatan) => (
        <div key={jabatan.nama} {...jabatan} className=" mx-auto  my-20">
          <div className="block justify-center items-center sm:mb-16 mb-6 relative z-[1] text-center ">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2
                className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px] text-white  font-medium tracking-wide justify-center w-1/2 mx-auto`}
              >
                {jabatan.jabatan}
              </h2>
            </motion.div>
          </div>
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            <div className="flex flex-wrap  justify-center  w-full feedback-container relative z-[1]">
              {jabatan.anggota.map((card) => (
                <CardPengurus key={card.id} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default PengurusSection;
