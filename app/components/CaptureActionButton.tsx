"use client";
import Link from "next/link";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

type CaptureActionButtonProps = {
  investigationId: number;
};

const CaptureActionButton = ({ investigationId }: CaptureActionButtonProps) => {
  return (
    <>
      <button className="mx-4 my-1 flex h-12 w-full items-center justify-center rounded-lg border-2 border-emerald-500 bg-white px-4 py-2 text-base text-emerald-500 transition-all hover:font-bold lg:h-14 lg:w-52 lg:text-lg">
        <Link href={`/captureAction/${investigationId}`}>
          <span>Capture Action</span>
        </Link>
        &nbsp;
        <FaPlusCircle />
      </button>
    </>
  );
};

export default CaptureActionButton;
