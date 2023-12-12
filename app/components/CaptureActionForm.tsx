import React from "react";
import BlankLine from "./BlankLine";
import ActionDetailsInputField from "./ActionDetailsInputField";
import ActionLocationInputField from "./ActionLocationInputField";
import ActionNameInputField from "./ActionNameInputField";
import CaptureActionFinalButton from "./CaptureActionFinalButton";
import TakePictureButton from "./TakePictureButton";
import UploadEvidenceButton from "./UploadEvidenceButton";

type CaptureActionFormProps = {
  investigationId: number;
};

const CaptureActionForm = ({ investigationId }: CaptureActionFormProps) => {
  return (
    <>
      <section>
        <h3 className="mx-4 flex items-center justify-center font-bold md:justify-start">
          Capture Action
        </h3>
      </section>
      <BlankLine />
      <BlankLine />
      <section className="mx-4 lg:mx-2">
        <ActionNameInputField />
        <BlankLine />
        <ActionLocationInputField />
        <BlankLine />
        <div className="flex items-center justify-center">
          <UploadEvidenceButton />
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
    </>
  );
};

export default CaptureActionForm;
