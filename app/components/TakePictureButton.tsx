import React from "react";
import { FaCamera } from "react-icons/fa";

const TakePictureButton = () => {
  return (
    <>
      <button className="my-1 flex h-12 w-full items-center justify-center rounded-lg border-2 border-orange-950 bg-white px-4 py-2 text-lg text-orange-950 transition-all hover:font-bold md:w-60 lg:h-14 lg:text-xl">
        <FaCamera />
        &nbsp;
        <span>Take Picture</span>
      </button>
    </>
  );
};

export default TakePictureButton;
