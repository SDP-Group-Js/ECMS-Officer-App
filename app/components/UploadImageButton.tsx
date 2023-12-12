import React from "react";

const UploadImageButton = () => {
  return (
    <>
      <label
        id="imageInputLabel"
        htmlFor="imageInput"
        className="my-1 text-gray-900"
      >
        Choose Files:
      </label>
      <input
        id="imageInput"
        type="file"
        multiple
        className="my-1 flex h-16 w-full items-center justify-start rounded-lg border-2 border-gray-400 px-4 py-4"
      />
    </>
  );
};

export default UploadImageButton;
