"use client";

import ActionCard from "@/app/components/ActionCard";
import BlankLine from "@/app/components/BlankLine";
import CaptureActionButton from "@/app/components/CaptureActionButton";
import CompleteStageButton from "@/app/components/CompleteStageButton";
import ExpandedInvestigationCard from "@/app/components/ExpandedInvestigationCard";
import NavBar from "@/app/components/NavBar";
import { useAuth } from "@/context/auth";
import Image from "next/image";

interface ViewInvestigationParams {
  params: { id: number };
}

export default function Home({ params }: ViewInvestigationParams) {
  const investigationId = params.id;
  const { userOfficeInvestigations } = useAuth();

  const filteredInvestigations = userOfficeInvestigations.filter(
    (investigation: any) => investigation.id == investigationId,
  );

  const getCurrentStage = (investigation: any): any => {
    for (const stage of investigation.investigationStages || []) {
      if (stage.status === "Ongoing") {
        return stage;
      }
    }
    return null;
  };

  const currentStage = getCurrentStage(filteredInvestigations[0]);
  const currentStageActions = currentStage?.actions || [];

  return (
    <>
      <NavBar />
      <BlankLine />
      <main>
        {filteredInvestigations.map((investigation: any) => (
          <>
            <section>
              <ExpandedInvestigationCard
                investigationId={investigationId}
                investigationStatus={investigation.status}
                currentStageName={currentStage.stageName}
                currentStageDescription={investigation.description}
              />
              <BlankLine />
              <BlankLine />
              <div className="font-base mx-4 font-bold md:text-lg lg:text-xl">
                <h3 className="flex justify-center md:justify-start">
                  Current Actions Taken
                </h3>
              </div>
              {currentStageActions.map((action: any) => (
                <ActionCard
                  key={action.id}
                  actionId={action.id}
                  actionName={action.name}
                  actionDescription={action.description}
                  actionUserName={action.user.name}
                />
              ))}
            </section>
            <BlankLine />
            <section>
              <div className="flex w-full items-center justify-center">
                <CaptureActionButton investigationId={investigationId} />
              </div>
              <div className="flex w-full items-center justify-center">
                <CompleteStageButton investigationStageId={currentStage.id} />
              </div>
            </section>
            <BlankLine />
          </>
        ))}
      </main>
    </>
  );
}
