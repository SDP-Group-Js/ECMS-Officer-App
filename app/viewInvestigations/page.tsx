"use client";
import BlankLine from "../components/BlankLine";
import Header from "../components/Header";
import InvestigationCard from "../components/InvestigationCard";
import { useAuth } from "@/context/auth";

export default function Home() {
  const { userInvestigations } = useAuth();

  const findMaxNumberOfCharacters = (investigations: any) => {
    const finalInvestigation = investigations[investigations.length - 1];
    const maxInvestigationId = finalInvestigation.id;
    return maxInvestigationId.toString().length;
  };

  const maxCharacters = findMaxNumberOfCharacters(userInvestigations);

  return (
    <>
      <Header />
      <BlankLine />
      <main>
        {userInvestigations.map((investigation: any, index: number) => (
          <InvestigationCard
            key={investigation.id}
            cardId={index + 1}
            investigationId={investigation.id}
            investigationStatus={investigation.status}
            currentStageName={"[Stage Name]"}
            currentStageDescription={investigation.description}
            maxCharacters={maxCharacters}
          />
        ))}
      </main>
    </>
  );
}
