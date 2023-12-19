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
        <textarea
          id="actionDetails"
          className="h-40 w-full rounded-lg border-2 border-gray-400 px-4 py-3"
        />
      </div>
    </>
  );
};

export default ActionDetailsInputField;
