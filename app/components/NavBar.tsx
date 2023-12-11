"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import NavBarCollapseButton from "./NavBarCollapseButton";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <nav className="sticky top-0 h-full w-full">
        <div className="flex h-12 w-full items-center justify-between bg-emerald-500 px-4 py-3 md:h-14 lg:h-16">
          <Link
            href="/viewInvestigations/"
            className="text-sm font-bold text-white md:text-base lg:text-lg"
          >
            <h1>[Division Name]</h1>
          </Link>
          <div className="md:hidden">
            <NavBarCollapseButton onClick={handleCollapse} />
          </div>
          <div className="hidden md:block">
            <LogoutButton />
          </div>
        </div>
        <div className="flex-grow items-center justify-center rounded-md bg-white shadow md:hidden">
          {isExpanded && (
            <ul>
              <li className="block px-4 py-2 text-sm">Item 1</li>
              <li className="block px-4 py-2 text-sm">Item 2</li>
              <li className="block px-4 py-2 text-sm text-red-600">
                <button>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
