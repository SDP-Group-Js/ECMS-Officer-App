import React from "react";
import BlankLine from "./BlankLine";

type ExpandedInvestigationCardProps = {
  investigationId: number;
  investigationStatus: string;
  currentStageName: string;
  currentStageDescription: string;
};

const ExpandedInvestigationCard = async ({
  investigationId,
  investigationStatus,
  currentStageName,
  currentStageDescription,
}: ExpandedInvestigationCardProps) => {
  const getInvestigations = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/investigation");
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data from the server: " + error);
    }
  };

  const findMaxNumberOfCharacters = (investigations: any) => {
    const finalInvestigation = investigations[investigations.length - 1];
    const maxInvestigationId = finalInvestigation.id;
    return maxInvestigationId.toString().length;
  };

  const investigations = await getInvestigations();
  const maxCharacters = findMaxNumberOfCharacters(investigations);

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
