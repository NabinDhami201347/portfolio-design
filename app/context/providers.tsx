"use client";

import { ThemeProvider } from "next-themes";
import { motion, useScroll } from "framer-motion";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
};
