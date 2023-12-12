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
import { storage } from "../../config/firebaseStorage";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

type CaptureActionFormProps = {
  investigationId: number;
};

const CaptureActionForm = ({ investigationId }: CaptureActionFormProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const actionId = 0; //TBA with API

  function handleUploadEvidenceButtonClick() {
    setModalVisible(true);
  }

  function handleModalCloseButtonClick() {
    setModalVisible(false);
  }

  function handleModalUploadEvidence(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files == null) return;
    const fileList = Array.from(files) as File[];
    setFilesToUpload(fileList);
  }

  function handleCaptureActionFinalButtonClick() {
    uploadImages(actionId);
    setModalVisible(false);
  }

  function uploadImages(actionId: number) {
    if (filesToUpload.length === 0) return;
    filesToUpload.forEach((file) => {
      const actionEvidenceRef = ref(
        storage,
        `action-evidence/${actionId}/${file.name + v4()}`,
      );
      uploadBytes(actionEvidenceRef, file).then(() => {
        alert("Uploaded successfully");
      });
    });
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
        {/* <div className="flex items-center justify-center">
          <TakePictureButton />
        </div> */}
        <BlankLine />
        <ActionDetailsInputField />
        <BlankLine />
        <BlankLine />
        <div className="flex items-center justify-center">
          <CaptureActionFinalButton
            investigationId={investigationId}
            onClick={handleCaptureActionFinalButtonClick}
          />
        </div>
        <BlankLine />
      </section>
      <UploadEvidenceModal
        isVisible={modalVisible}
        files={filesToUpload}
        handleCloseButtonClick={handleModalCloseButtonClick}
        handleUploadButtonClick={handleModalUploadEvidence}
      />
    </>
  );
};

export default CaptureActionForm;
