"use client";
import Link from "next/link";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

type CaptureActionFinalButtonProps = {
  investigationId: number;
};

const CaptureActionFinalButton = ({
  investigationId,
}: CaptureActionFinalButtonProps) => {
  //Hanlde button onclick TBA

  return (
    <>
      <button className="my-1 flex h-12 w-full items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-base text-white transition-all hover:font-bold lg:h-14 lg:w-52 lg:text-lg">
        <span>Capture Action</span>
        &nbsp;
        <FaPlusCircle />
      </button>
    </>
  );
};

export default CaptureActionFinalButton;
