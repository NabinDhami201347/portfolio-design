"use client";

import Toggle from "./Toggle";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import DropMenu from "../ui/DropMenu";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-background dark:bg-background_dark sticky top-0 z-10">
      <div className="h-14 w-11/12 mx-auto bg-background dark:bg-background_dark border-b-2 border-gray-300 dark:border-gray-600">
        <div className="flex justify-between items-center h-full w-full">
          {/* Left */}
          <div className="">
            <Link href="/">
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-lg font-semibold">
                ~{pathname}
                <Typewriter
                  options={{
                    strings: "",
                    autoStart: true,
                    loop: true,
                    delay: 300,
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-2 ">
            <Toggle />
            <DropMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
