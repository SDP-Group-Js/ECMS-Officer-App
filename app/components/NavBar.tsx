import Link from "next/link";
import React from "react";
import { BsList } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="flex h-12 items-center justify-between bg-emerald-500 px-4 py-3 md:h-14 lg:h-16">
      <Link
        href="/viewInvestigations/"
        className="text-sm font-bold text-white md:text-base lg:text-lg"
      >
        <h1>[Division Name]</h1>
      </Link>
      <Link
        href="#"
        className="text-xl font-bold text-white md:text-2xl lg:text-3xl"
      >
        <BsList />
      </Link>
    </div>
  );
};

export default NavBar;
