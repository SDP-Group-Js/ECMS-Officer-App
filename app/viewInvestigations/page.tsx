import BlankLine from "../components/BlankLine";
import Header from "../components/Header";
import InvestigationCard from "../components/InvestigationCard";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const getInvestigations = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/investigation");
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data from the server: " + error);
    }
  };

  const investigations = await getInvestigations();

  return (
    <>
      <Header />
      <BlankLine />
      <main>
        {investigations.map((investigation: any, index: number) => (
          <InvestigationCard
            key={investigation.id}
            cardId={index + 1}
            investigationId={investigation.id}
            dateAssigned={new Date()}
            currentStageName={investigation.name}
            currentStageDescription={"TBA"}
          />
        ))}
      </main>
    </>
  );
}
