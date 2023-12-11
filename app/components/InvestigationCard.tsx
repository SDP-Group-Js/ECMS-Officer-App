import React from "react";

type InvestigationCardProps = {
  cardId: number;
  investigationId: number;
};

const InvestigationCard = ({
  cardId,
  investigationId,
}: InvestigationCardProps) => {
  function formatInvestigationId(investigationId: number): string {
    const formattedId = investigationId.toString().padStart(3, "0");
    const hashedId = "#" + formattedId;
    return hashedId;
  }

  return (
    <section className="mx-4 my-2 flex items-center justify-start rounded-sm border-2 border-gray-400 px-2 py-2 text-base font-bold text-gray-600 lg:mx-2">
      <div className="mx-2">{cardId}</div>
      <div className="mx-2">Investigation</div>
      <div className="mx-2">{formatInvestigationId(investigationId)}</div>
    </section>
  );
};

export default InvestigationCard;
