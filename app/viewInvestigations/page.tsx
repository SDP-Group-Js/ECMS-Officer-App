import BlankLine from "../components/BlankLine";
import Header from "../components/Header";
import InvestigationCard from "../components/InvestigationCard";

export default function Home() {
  return (
    <>
      <Header />
      <BlankLine />
      <main>
        <InvestigationCard
          cardId={1}
          investigationId={1}
          dateAssigned={new Date()}
          currentStageName={"Stage 1"}
          currentStageDescription={"Description of stage 1"}
        />
        <InvestigationCard
          cardId={2}
          investigationId={2}
          dateAssigned={new Date()}
          currentStageName={"Stage 2"}
          currentStageDescription={"Description of stage 2"}
        />
        <InvestigationCard
          cardId={3}
          investigationId={4}
          dateAssigned={new Date()}
          currentStageName={"Stage 3"}
          currentStageDescription={"Description of stage 3"}
        />
        <InvestigationCard
          cardId={4}
          investigationId={5}
          dateAssigned={new Date()}
          currentStageName={"Stage 4"}
          currentStageDescription={"Description of stage 4"}
        />
        <InvestigationCard
          cardId={5}
          investigationId={10}
          dateAssigned={new Date()}
          currentStageName={"Stage 5"}
          currentStageDescription={"Description of stage 5"}
        />
      </main>
    </>
  );
}
