"use client";
import React from "react";
import "./ActionLocationInputField.css";

const ActionLocationInputField = () => {
  function handleFocus() {
    document
      .getElementById("actionLocationLabel")
      ?.classList.add("focused-label");
  }

  return (
    <>
      <div className="input-container w-full">
        <input
          type="text"
          id="actionLocation"
          className="flex h-16 w-full items-center justify-start rounded-lg border-2 border-gray-400 px-4"
          onFocus={handleFocus}
        />
        <label
          id="actionLocationLabel"
          htmlFor="actionLocation"
          className="floating-label text-gray-500"
        >
          &nbsp;Location&nbsp;
        </label>
      </div>
    </>
  );
};

export default ActionLocationInputField;
