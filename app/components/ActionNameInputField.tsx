"use client";
import React from "react";
import "./ActionNameInputField.css";

type ActionNameInputFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ActionNameInputField = ({ onChange }: ActionNameInputFieldProps) => {
  function handleFocus() {
    document.getElementById("actionNameLabel")?.classList.add("focused-label");
  }

  return (
    <>
      <div className="input-container w-full">
        <input
          type="text"
          id="actionName"
          className="flex h-16 w-full items-center justify-start rounded-lg border-2 border-gray-400 px-4"
          onFocus={handleFocus}
          onChange={onChange}
        />
        <label
          id="actionNameLabel"
          htmlFor="actionName"
          className="floating-label text-gray-500"
        >
          &nbsp;Action Name&nbsp;
        </label>
      </div>
    </>
  );
};

export default ActionNameInputField;
