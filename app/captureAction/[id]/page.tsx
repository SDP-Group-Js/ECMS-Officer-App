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
  const { userInvestigations } = useAuth();

  const filteredInvestigations = userInvestigations.filter(
    (investigation: any) => investigation.id == investigationId,
  );

  return (
    <>
      <NavBar />
      <BlankLine />
      <main>
        <section>
          {filteredInvestigations.map((investigation: any) => (
            <MinifiedInvestigationCard
              investigationId={investigationId}
              investigationStatus={investigation.status}
              currentStageName="[Stage Name]"
            />
          ))}
        </section>
        <BlankLine />
        <BlankLine />
        <CaptureActionForm investigationId={investigationId} />
      </main>
    </>
  );
}
