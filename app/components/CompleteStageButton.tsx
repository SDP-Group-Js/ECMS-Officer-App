import { auth } from "@/config/firebase";
import { useAuth } from "@/context/auth";
import React from "react";
import { GrStatusGood } from "react-icons/gr";

type CompleteStageButtonProps = {
  investigationStageId: number;
};

const CompleteStageButton = ({
  investigationStageId,
}: CompleteStageButtonProps) => {
  const { fetchUserData } = useAuth();
  const handleClick = async () => {
    const SERVER_URL = "http://localhost:8080";
    fetch(
      `${SERVER_URL}/api/investigation/completeStage/${investigationStageId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          alert("Stage completed successfully");
          fetchUserData(auth.currentUser);
        } else {
          alert("Failed to complete stage");
        }
      })
      .catch((error) => {
        console.error("Error completing stage:", error);
      });
  };
  return (
    <>
      <button
        className="mx-4 my-1 flex h-12 w-full items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-base text-white transition-all hover:font-bold lg:h-14 lg:w-52 lg:text-lg"
        onClick={handleClick}
      >
        <span>Complete Stage</span>
        &nbsp;
        <GrStatusGood />
      </button>
    </>
  );
};

export default CompleteStageButton;
