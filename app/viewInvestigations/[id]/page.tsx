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
  const { userInvestigations } = useAuth();

  const filteredInvestigations = userInvestigations.filter(
    (investigation: any) => investigation.id == investigationId,
  );

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
                currentStageName="[Stage Name]"
                currentStageDescription={investigation.description}
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
          </>
        ))}
      </main>
    </>
  );
}
