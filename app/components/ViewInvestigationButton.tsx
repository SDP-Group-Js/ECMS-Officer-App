"use client";
import Link from "next/link";
import React from "react";

type InvestigationCardProps = {
  investigationId: number;
};

const ViewInvestigationButton = ({
  investigationId,
}: InvestigationCardProps) => {
  return (
    <>
      <button className="flex h-8 w-44 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-sm text-white transition-all hover:font-bold lg:h-10 lg:w-48 lg:text-base">
        <Link href={`/viewInvestigations/${investigationId}`}>
          View Investigation
        </Link>
      </button>
    </>
  );
};

export default ViewInvestigationButton;
