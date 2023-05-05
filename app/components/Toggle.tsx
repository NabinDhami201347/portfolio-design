"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

import { Loader } from "./Loader";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-around flex-wrap w-4/5 mx-auto h-screen">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  return (
    <motion.div>
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme("light")}
          size={25}
          className="cursor-pointer hover:animate-spin"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme("dark")}
          size={25}
          className="cursor-pointer hover:animate-spin"
        />
      )}
    </motion.div>
  );
};

export default Toggle;
