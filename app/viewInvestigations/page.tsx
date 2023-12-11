import BlankLine from "../components/BlankLine";
import Header from "../components/Header";
import InvestigationCard from "../components/InvestigationCard";

export default function Home() {
  return (
    <>
      <Header />
      <BlankLine />
      <main>
        <InvestigationCard cardId={1} investigationId={1} />
        <InvestigationCard cardId={2} investigationId={2} />
        <InvestigationCard cardId={3} investigationId={4} />
        <InvestigationCard cardId={4} investigationId={5} />
        <InvestigationCard cardId={5} investigationId={10} />
      </main>
    </>
  );
}
