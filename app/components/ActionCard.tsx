import React, { useState } from "react";
import BlankLine from "./BlankLine";
import { FaUser } from "react-icons/fa";
import ViewEvidenceButton from "./ViewEvidenceButton";
import ViewEvidenceModal from "./ViewEvidenceModal";

type ActionCardProps = {
  actionId: number;
  actionName: String;
  actionDescription: String;
  actionUserName: string;
};

const ActionCard = ({
  actionId,
  actionName,
  actionDescription,
  actionUserName,
}: ActionCardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <section className="mx-4 my-4 rounded-lg border-2 border-gray-400 px-2 py-4 text-base text-gray-600 lg:mx-2 lg:text-lg">
        <div className="font-bold md:justify-start">
          <div className="mx-2 mb-3 mt-1 block w-full">{actionName}</div>
          <div className="mx-2 mb-0 mt-3 flex w-full items-center justify-start">
            <span>{actionUserName}</span>
            <span className="mx-2">
              <FaUser />
            </span>
          </div>
        </div>
        <BlankLine />
        <div className="flex items-center justify-start">
          <div className="mx-2">{actionDescription}</div>
        </div>
        <BlankLine />
        <BlankLine />
        <div className="flex items-center justify-center md:justify-start">
          <ViewEvidenceButton
            actionId={actionId}
            onClick={() => setModalVisible(true)}
          />
        </div>
      </section>
      <ViewEvidenceModal
        isVisible={modalVisible}
        actionId={actionId}
        handleCloseButtonClick={() => setModalVisible(false)}
      />
    </>
  );
};

export default ActionCard;
