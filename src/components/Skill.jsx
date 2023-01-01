import React from "react";
import { motion } from "framer-motion";

export default function Skill({ directionLeft, logo, proficiency }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="group filter group-hover:grayscale"
      >
        <img
          className="group relative flex cursor-pointer rounded-full border border-gray-500 object-cover h-[80px] w-[80px] short:h-16 short:w-16 md:h-24 md:w-24 xl:w-32 xl:h-32 short:xl:h-24 short:xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          src={logo}
          alt=""
          loading="lazy"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[80px] w-[80px] short:h-16 short:w-16 md:w-24 md:h-24 xl:h-32 xl:w-32 short:xl:h-24 short:xl:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="hidden md:inline-flex md:text-[1rem] font-bold text-[#F7AB0A] opacity-100">
            {proficiency}
          </p>
        </div>
      </div>
    </div>
  );
}
