"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import ScrollTop from "../components/shared/ScrollToTop";
import Loading from "@/components/shared/Loading";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 2000); // set the time to 5000ms or 5 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return <Loading />;

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
