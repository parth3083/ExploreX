import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="w-full h-12 mt-5 flex items-center justify-between lg:px-3 md:px-10 px-2">
      <Link
        href={"/"}
        className="font-pop text-2xl md:text-3xl lg:text-3xl font-semibold"
      >
        ExploreX.
      </Link>
      <div className="right flex items-center md:gap-10 gap-4 lg:gap-10 ">
        <Link
          href={"/about"}
          className="font-pop text-md lg:text-lg  capitalize  no-underline hover:underline  transition ease-in-out duration-300 md:text-xl  font-normal  "
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className="font-pop text-md lg:text-lg  capitalize no-underline hover:underline  transition ease-in-out duration-300 md:text-xl  font-normal " 
        >
          Contact Us
        </Link>
        <ModeToggle/>
      </div>
    </nav>
  );
}

export default Navbar;
