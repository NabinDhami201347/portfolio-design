"use client";

import { ThemeProvider } from "next-themes";
import { motion, useScroll } from "framer-motion";

import ScrollTop from "../components/shared/ScrollToTop";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ScrollTop />
        {children}
      </ThemeProvider>
    </>
  );
};
export default Provider;
