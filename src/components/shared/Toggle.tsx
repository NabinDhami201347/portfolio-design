"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>🌞</p>;
  return (
    <div>
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
    </div>
  );
};

export default Toggle;
