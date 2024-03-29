"use client";
import React from "react";
import { IoMdOpen } from "react-icons/io";

type EvidenceButtonProps = {
  actionId: number;
  onClick: () => void;
};

const ViewEvidenceButton = ({ actionId, onClick }: EvidenceButtonProps) => {
  return (
    <>
      <button
        className="flex h-8 w-44 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-sm text-white transition-all hover:font-bold lg:h-10 lg:w-48 lg:text-base"
        onClick={onClick}
      >
        <span>View Evidence</span>
        &nbsp;
        <IoMdOpen />
      </button>
    </>
  );
};

export default ViewEvidenceButton;
