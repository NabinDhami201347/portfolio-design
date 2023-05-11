"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0, y: -200 },
      }}
      className="grid grid-cols-4 gap-6 h-[calc(100vh-3.5rem)] w-11/12 mx-auto py-6"
    >
      <div className="bg-yellow-500 col-span-4 md:col-span-2 h-[calc(100vh-7rem)]"></div>
      <div className="bg-yellow-500 col-span-4 md:col-span-2 h-[calc(100vh-7rem)]"></div>
    </motion.div>
  );
};

export default Hero;
