"use client";
import React from "react";
import { useState } from "react";
import BlankLine from "./BlankLine";
import ViewInvestigationButton from "./ViewInvestigationButton";

type InvestigationCardProps = {
  cardId: number;
  investigationId: number;
  investigationStatus: string;
  currentStageName: String;
  currentStageDescription: String;
  maxCharacters: number;
};

const InvestigationCard = ({
  cardId,
  investigationId,
  investigationStatus,
  currentStageName,
  currentStageDescription,
  maxCharacters,
}: InvestigationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleCardClick() {
    setIsExpanded(!isExpanded);
  }

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
    <section
      className={`mx-4 mt-2 ${
        isExpanded ? "mb-8" : "mb-2"
      } rounded-lg border-2 border-gray-400 px-2 py-2 text-base text-gray-600 lg:mx-2 lg:text-lg`}
    >
      <div
        className={`flex items-center ${
          isExpanded ? "justify-between md:justify-start" : "justify-start"
        } font-bold`}
        onClick={handleCardClick}
      >
        <div className={`mx-2 ${isExpanded ? "hidden" : ""}`}>{cardId}</div>
        <div className="mx-2">Investigation</div>
        <div className="mx-2">
          {formatInvestigationId(investigationId, maxCharacters)}
        </div>
        <div className={`mx-2 ${isExpanded ? "" : "hidden"}`}>
          {investigationStatus}
        </div>
      </div>
      <>
        {isExpanded && (
          <div>
            <BlankLine />
            <div className="mx-2 block font-bold">{currentStageName}</div>
            <BlankLine />
            <div className="mx-2 block">{currentStageDescription}</div>
            <BlankLine />
            <ViewInvestigationButton investigationId={investigationId} />
          </div>
        )}
      </>
    </section>
  );
};

export default InvestigationCard;
