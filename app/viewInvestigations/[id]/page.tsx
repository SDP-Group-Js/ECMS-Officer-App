import ActionCard from "@/app/components/ActionCard";
import BlankLine from "@/app/components/BlankLine";
import CaptureActionButton from "@/app/components/CaptureActionButton";
import CompleteStageButton from "@/app/components/CompleteStageButton";
import ExpandedInvestigationCard from "@/app/components/ExpandedInvestigationCard";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";

interface ViewInvestigationParams {
  params: { id: number };
}

export default async function Home({ params }: ViewInvestigationParams) {
  const investigationId = params.id;
  return (
    <>
      <NavBar />
      <BlankLine />
      <main>
        <section>
          <ExpandedInvestigationCard
            investigationId={investigationId}
            dateAssigned={new Date()}
            currentStageName="[Stage Name]"
            currentStageDescription="[Description of the Stage]"
          />
          <BlankLine />
          <BlankLine />
          <div className="font-base mx-4 font-bold md:text-lg lg:text-xl">
            <h3 className="flex justify-center md:justify-start">
              Current Actions Taken
            </h3>
          </div>
          <ActionCard
            actionId={1}
            actionName="[Test Action]"
            actionDescription="[Test Action Description]"
            actionLocation="[Test Action Location]"
          />
          <ActionCard
            actionId={2}
            actionName="[Test Action]"
            actionDescription="[Test Action Description]"
            actionLocation="[Test Action Location]"
          />
          <ActionCard
            actionId={3}
            actionName="[Test Action]"
            actionDescription="[Test Action Description]"
            actionLocation="[Test Action Location]"
          />
        </section>
        <BlankLine />
        <section>
          <div className="flex w-full items-center justify-center">
            <CaptureActionButton investigationId={investigationId} />
          </div>
          <div className="flex w-full items-center justify-center">
            <CompleteStageButton investigationId={investigationId} />
          </div>
        </section>
        <BlankLine />
      </main>
    </>
  );
}
