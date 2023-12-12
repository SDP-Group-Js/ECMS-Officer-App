"use client";
import React, { useState } from "react";
import BlankLine from "./BlankLine";
import ActionDetailsInputField from "./ActionDetailsInputField";
import ActionLocationInputField from "./ActionLocationInputField";
import ActionNameInputField from "./ActionNameInputField";
import CaptureActionFinalButton from "./CaptureActionFinalButton";
import TakePictureButton from "./TakePictureButton";
import UploadEvidenceButton from "./UploadEvidenceButton";
import UploadEvidenceModal from "./UploadEvidenceModal";

type CaptureActionFormProps = {
  investigationId: number;
};

const CaptureActionForm = ({ investigationId }: CaptureActionFormProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  function handleUploadEvidenceButtonClick() {
    setModalVisible(true);
  }

  function handleModalCloseButtonClick() {
    setModalVisible(false);
  }

  function handleModalUploadEvidence() {
    console.log("Upload");
  }

  return (
    <>
      <section>
        <h1 className="mx-4 flex items-center justify-center text-base font-bold md:justify-start md:text-lg lg:text-xl">
          Capture Action
        </h1>
      </section>
      <BlankLine />
      <BlankLine />
      <section className="mx-4 lg:mx-2">
        <ActionNameInputField />
        <BlankLine />
        <ActionLocationInputField />
        <BlankLine />
        <div className="flex items-center justify-center">
          <UploadEvidenceButton handleClick={handleUploadEvidenceButtonClick} />
        </div>
        <div className="flex items-center justify-center">
          <TakePictureButton />
        </div>
        <BlankLine />
        <ActionDetailsInputField />
        <BlankLine />
        <BlankLine />
        <div className="flex items-center justify-center">
          <CaptureActionFinalButton investigationId={investigationId} />
        </div>
        <BlankLine />
      </section>
      <UploadEvidenceModal
        isVisible={modalVisible}
        handleCloseButtonClick={handleModalCloseButtonClick}
        handleUploadButtonClick={handleModalUploadEvidence}
      />
    </>
  );
};

export default CaptureActionForm;
