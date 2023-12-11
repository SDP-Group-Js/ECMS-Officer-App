import React from "react";
import BlankLine from "./BlankLine";

type InvestigationCardProps = {
  investigationId: number;
  dateAssigned: Date;
  currentStageName: String;
  currentStageDescription: String;
};

const InvestigationCard = ({
  investigationId,
  dateAssigned,
  currentStageName,
  currentStageDescription,
}: InvestigationCardProps) => {
  function formatInvestigationId(investigationId: number): string {
    const formattedId = investigationId.toString().padStart(3, "0");
    const hashedId = "#" + formattedId;
    return hashedId;
  }

  return (
    <section className="mx-4 my-2 rounded-lg border-2 border-gray-400 px-2 py-2 text-base text-gray-600 lg:mx-2 lg:text-lg">
      <div className="flex items-center justify-between font-bold md:justify-start">
        <div className="mx-2">Investigation</div>
        <div className="mx-2">{formatInvestigationId(investigationId)}</div>
        <div className="mx-2">{dateAssigned.toLocaleDateString()}</div>
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

export default InvestigationCard;
