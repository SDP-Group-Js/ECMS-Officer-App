"use client";
import React from "react";
import { GrStatusGood } from "react-icons/gr";

type CompleteStageButtonProps = {
  investigationId: number;
};

const CompleteStageButton = ({ investigationId }: CompleteStageButtonProps) => {
  //Hanlde button onclick TBA

  return (
    <>
      <button className="mx-4 my-1 flex h-12 w-full items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-base text-white transition-all hover:font-bold lg:h-14 lg:w-52 lg:text-lg">
        <span>Complete Stage</span>
        &nbsp;
        <GrStatusGood />
      </button>
    </>
  );
};

export default CompleteStageButton;
