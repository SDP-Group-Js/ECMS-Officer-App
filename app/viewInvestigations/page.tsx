"use client";
import BlankLine from "../components/BlankLine";
import Header from "../components/Header";
import InvestigationCard from "../components/InvestigationCard";
import { useAuth } from "@/context/auth";

export default function Home() {
  const { userOfficeInvestigations } = useAuth();

  const findMaxNumberOfCharacters = (investigations: any) => {
    const finalInvestigation = investigations[investigations.length - 1];
    const maxInvestigationId = finalInvestigation.id;
    return maxInvestigationId.toString().length;
  };

  const maxCharacters = findMaxNumberOfCharacters(userOfficeInvestigations);

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
      <Header />
      <BlankLine />
      <main>
        {userOfficeInvestigations.map((investigation: any, index: number) => (
          <InvestigationCard
            key={investigation.id}
            cardId={index + 1}
            investigationId={investigation.id}
            investigationStatus={investigation.status}
            currentStageName={getCurrentStageName(investigation)}
            currentStageDescription={investigation.description}
            maxCharacters={maxCharacters}
          />
        ))}
      </main>
    </>
  );
}
