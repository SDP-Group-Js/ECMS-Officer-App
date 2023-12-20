"use client";

import BlankLine from "@/app/components/BlankLine";
import CaptureActionForm from "@/app/components/CaptureActionForm";
import MinifiedInvestigationCard from "@/app/components/MinifiedInvestigationCard";
import NavBar from "@/app/components/NavBar";
import { useAuth } from "@/context/auth";
import Image from "next/image";

interface CaptureActionParams {
  params: { id: number };
}

export default function Home({ params }: CaptureActionParams) {
  const investigationId = params.id;
  const { userOfficeInvestigations } = useAuth();

  const filteredInvestigations = userOfficeInvestigations.filter(
    (investigation: any) => investigation.id == investigationId,
  );

  const getCurrentStageName = (investigation: any): string => {
    for (const stage of investigation.investigationStages || []) {
      if (stage.status === "Ongoing") {
        return stage.stageName;
      }
    }
    return "Undefined";
  };

  return (
    <>
      <NavBar />
      <BlankLine />
      <main>
        {filteredInvestigations.map((investigation: any) => (
          <>
            <section>
              <MinifiedInvestigationCard
                investigationId={investigationId}
                investigationStatus={investigation.status}
                currentStageName={getCurrentStageName(investigation)}
              />
            </section>
            <BlankLine />
            <BlankLine />
            <CaptureActionForm investigation={investigation} />
          </>
        ))}
      </main>
    </>
  );
}
