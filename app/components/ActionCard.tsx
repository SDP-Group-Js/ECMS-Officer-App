import React from "react";
import BlankLine from "./BlankLine";
import { FaLocationDot } from "react-icons/fa6";
import ViewEvidenceButton from "./ViewEvidenceButton";

type ActionCardProps = {
  actionId: number;
  actionName: String;
  actionDescription: String;
  actionLocation: any; //@nathan-wijayasekara
};

const ActionCard = ({
  actionId,
  actionName,
  actionDescription,
  actionLocation,
}: ActionCardProps) => {
  return (
    <section className="mx-4 my-4 rounded-lg border-2 border-gray-400 px-2 py-4 text-base text-gray-600 lg:mx-2 lg:text-lg">
      <div className="flex items-center justify-between font-bold md:justify-start">
        <div className="mx-2">{actionName}</div>
        <div className="mx-2 flex items-center justify-between">
          <span>{actionLocation.toString()}</span>
          <span>
            <FaLocationDot />
          </span>
        </div>
      </div>
      <BlankLine />
      <div className="flex items-center justify-start">
        <div className="mx-2">{actionDescription}</div>
      </div>
      <BlankLine />
      <div className="flex items-center justify-center md:justify-start">
        <ViewEvidenceButton actionId={actionId} />
      </div>
    </section>
  );
};

export default ActionCard;
