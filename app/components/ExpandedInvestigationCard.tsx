"use client";
import React from "react";
import BlankLine from "./BlankLine";
import { useAuth } from "@/context/auth";

type ExpandedInvestigationCardProps = {
  investigationId: number;
  investigationStatus: string;
  currentStageName: string;
  currentStageDescription: string;
};

const ExpandedInvestigationCard = ({
  investigationId,
  investigationStatus,
  currentStageName,
  currentStageDescription,
}: ExpandedInvestigationCardProps) => {
  const { userOfficeInvestigations } = useAuth();

  const findMaxNumberOfCharacters = (investigations: any) => {
    const finalInvestigation = investigations[investigations.length - 1];
    const maxInvestigationId = finalInvestigation.id;
    return maxInvestigationId.toString().length;
  };

  const maxCharacters = findMaxNumberOfCharacters(userOfficeInvestigations);

  function formatInvestigationId(
    investigationId: number,
    maxCharacters: number,
  ): string {
    const characters = Math.max(maxCharacters, 3);
    const formattedId = investigationId.toString().padStart(characters, "0");
    const hashedId = "#" + formattedId;
    return hashedId;
  }

  return (
    <section className="mx-4 my-2 rounded-lg border-2 border-gray-400 px-2 py-2 text-base text-gray-600 lg:mx-2 lg:text-lg">
      <div className="flex items-center justify-between font-bold md:justify-start">
        <div className="mx-2">Investigation</div>
        <div className="mx-2">
          {formatInvestigationId(investigationId, maxCharacters)}
        </div>
        <div className="mx-2 block">{investigationStatus}</div>
      </div>

      <div>
        <BlankLine />
        <div className="mx-2 block font-bold">{currentStageName}</div>
        <BlankLine />
        <div className="mx-2 block">{currentStageDescription}</div>
      </div>
    </section>
  );
};

export default ExpandedInvestigationCard;
