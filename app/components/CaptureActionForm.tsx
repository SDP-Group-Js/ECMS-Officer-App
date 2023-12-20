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
import { auth, storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";

type CaptureActionFormProps = {
  investigation: any;
};

const CaptureActionForm = ({ investigation }: CaptureActionFormProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const [actionName, setActionName] = useState("");
  const [actionDescription, setActionDescription] = useState("");
  const router = useRouter();
  const { fetchUserData } = useAuth();

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

  function handleActionNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setActionName(e.target.value);
  }

  function handleActionDescriptionChange(
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setActionDescription(e.target.value);
  }

  async function handleCaptureActionFinalButtonClick() {
    const investigationStageId = getCurrentStageId(investigation);
    const actionUserId = auth.currentUser?.uid;

    const SERVER_URL = "http://localhost:8080";

    const body = JSON.stringify({
      investigationStageId,
      actionName,
      actionDescription,
      actionUserId,
    });
    const response = await fetch(
      `${SERVER_URL}/api/investigation/captureAction`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      },
    );
    const data = await response.json();
    const actionId = data.id;
    uploadImages(actionId);
    setModalVisible(false);
    fetchUserData(auth.currentUser);
    alert("Action captured successfully.");
    router.push(`/viewInvestigations/${investigation.id}`);
  }

  const getCurrentStageId = (investigation: any): number => {
    for (const stage of investigation.investigationStages || []) {
      if (stage.status === "Ongoing") {
        return stage.id;
      }
    }
    throw new Error("No ongoing stage found");
  };

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
        <ActionNameInputField onChange={handleActionNameChange} />
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
        <ActionDetailsInputField onChange={handleActionDescriptionChange} />
        <BlankLine />
        <BlankLine />
        <div className="flex items-center justify-center">
          <CaptureActionFinalButton
            investigationId={investigation.id}
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
