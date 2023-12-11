"use client";
import React from "react";

const ActionDetailsInputField = () => {
  return (
    <>
      <div className="input-container w-full">
        <label
          id="actionDetailsLabel"
          htmlFor="actionDetails"
          className="px-2 text-gray-500"
        >
          Details:
        </label>
        <input
          type="text"
          id="actionDetails"
          className="flex h-40 w-full items-center justify-start rounded-lg border-2 border-gray-400 px-4"
        />
      </div>
    </>
  );
};

export default ActionDetailsInputField;
