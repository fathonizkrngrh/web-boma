import React from "react";
import { motion } from "framer-motion";
import { textVariant2, textVariant3 } from "../utils/motion";

function Hero({ title, subtitle }) {
  return (
    <div>
      <div className="relative lg:py-40 py-24  max-w-7xl mx-auto lg:px-4 px-8 overflow-hidden">
        <motion.div
          variants={textVariant3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="flex">
            <p className="sm:text-lg md:text-xl lg:text-2xl text-md">
              Badan Olahraga Mahasiswa
            </p>
            <div className="bg-main md:lg-1 lg:h-1.5 h-0.5 sm:w-7 md:w-10 lg:w-12 w-5 lg:ml-4 ml-2 my-auto" />
          </div>
          <p className="text-main md:text-6xl lg:text-8xl text-4xl font-bold">
            {title}
          </p>
          <p className="text-black md:text-2xl lg:text-4xl text-xl font-bold">
            {subtitle}
          </p>
        </motion.div>
        <div className="absolute lg:-top-20 -top-0 right-0 -z-10">
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            <div className="bg-fixed font-bold lg:text-[250px] text-[100px] h-auto text-right text-stroke">
              <p className="lg:h-[200px] h-[100px]">BOMA</p>
              <p className="lg:h-[200px] h-[100px]">UPI</p>
              <p className="lg:h-[200px] h-[100px]">CIBIRU</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
