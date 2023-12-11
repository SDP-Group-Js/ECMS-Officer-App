"use client";
import React from "react";

const LogoutButton = () => {
  return (
    <>
      <button className="rounded-full px-4 py-2 font-bold text-green-200 transition-colors hover:border-white hover:bg-white hover:text-emerald-500 md:h-8 md:text-sm lg:h-10 lg:text-base">
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
