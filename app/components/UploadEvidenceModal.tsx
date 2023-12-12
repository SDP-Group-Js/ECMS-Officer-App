import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import BlankLine from "./BlankLine";
import UploadImageButton from "./UploadImageButton";
import PreviewEvidenceCard from "./PreviewEvidenceCard";
import ModalUploadEvidenceButton from "./ModalUploadEvidenceButton";

type UploadEvidenceModalProps = {
  isVisible: boolean;
  handleCloseButtonClick: () => void;
  handleUploadButtonClick: () => void;
};

const UploadEvidenceModal = ({
  isVisible,
  handleCloseButtonClick,
  handleUploadButtonClick,
}: UploadEvidenceModalProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="UploadEvidenceModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Upload Files
          </h2>
          <button
            className="place-self-end text-xl text-black"
            onClick={handleCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <BlankLine />
        <BlankLine />
        <div id="UploadEvidenceModalBody" className="mx-1 md:mx-3 lg:mx-5">
          <UploadImageButton />
          <BlankLine />
          <PreviewEvidenceCard />
        </div>
        <BlankLine />
        <BlankLine />
        <div
          id="UploadEvidenceModalFooter"
          className="mx-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <ModalUploadEvidenceButton handleClick={handleUploadButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default UploadEvidenceModal;
