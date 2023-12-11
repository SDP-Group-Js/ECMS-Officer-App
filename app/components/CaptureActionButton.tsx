"use client";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

type CaptureActionButtonProps = {
  investigationId: number;
  stageId: number;
};

const CaptureActionButton = ({
  investigationId,
  stageId,
}: CaptureActionButtonProps) => {
  //Hanlde button onclick TBA

  return (
    <>
      <button className="flex h-12 w-48 items-center justify-center rounded-lg border-2 border-emerald-500 bg-white px-4 py-2 text-base text-emerald-500 transition-all hover:font-bold lg:h-14 lg:w-52 lg:text-lg">
        <span>Capture Action</span>
        &nbsp;
        <FaPlusCircle />
      </button>
    </>
  );
};

export default CaptureActionButton;
