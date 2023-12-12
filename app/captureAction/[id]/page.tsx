import ActionNameInputField from "@/app/components/ActionNameInputField";
import ActionLocationInputField from "@/app/components/ActionLocationInputField";
import ActionDetailsInputField from "@/app/components/ActionDetailsInputField";
import BlankLine from "@/app/components/BlankLine";
import MinifiedInvestigationCard from "@/app/components/MinifiedInvestigationCard";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import UploadEvidenceButton from "@/app/components/UploadEvidenceButton";
import TakePictureButton from "@/app/components/TakePictureButton";
import CaptureActionFinalButton from "@/app/components/CaptureActionFinalButton";

interface CaptureActionParams {
  params: { id: number };
}

export default async function Home({ params }: CaptureActionParams) {
  const investigationId = params.id;
  return (
    <>
      <NavBar />
      <BlankLine />
      <main>
        <section>
          <MinifiedInvestigationCard
            investigationId={investigationId}
            dateAssigned={new Date()}
            currentStageName="[Stage Name]"
          />
        </section>
        <BlankLine />
        <BlankLine />
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
      </main>
    </>
  );
}
