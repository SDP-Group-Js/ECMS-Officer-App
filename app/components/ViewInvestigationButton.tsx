"use client";
import Link from "next/link";
import React from "react";
import { IoMdOpen } from "react-icons/io";

type InvestigationButtonProps = {
  investigationId: number;
};

const ViewInvestigationButton = ({
  investigationId,
}: InvestigationButtonProps) => {
  return (
    <>
      <button className="flex h-8 w-48 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-sm text-white transition-all hover:font-bold lg:h-10 lg:w-52 lg:text-base">
        <Link href={`/viewInvestigations/${investigationId}`}>
          <span>View Investigation</span>
        </Link>
        &nbsp;
        <IoMdOpen />
      </button>
    </>
  );
};

export default ViewInvestigationButton;
