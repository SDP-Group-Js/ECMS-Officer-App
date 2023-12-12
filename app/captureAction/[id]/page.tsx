import BlankLine from "@/app/components/BlankLine";
import CaptureActionForm from "@/app/components/CaptureActionForm";
import MinifiedInvestigationCard from "@/app/components/MinifiedInvestigationCard";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";

interface CaptureActionParams {
  params: { id: number };
}

export default async function Home({ params }: CaptureActionParams) {
  const investigationId = params.id;
  return (
    <>
      <NavBar />
      <BlankLine />
      <main>
        <section>
          <MinifiedInvestigationCard
            investigationId={investigationId}
            dateAssigned={new Date()}
            currentStageName="[Stage Name]"
          />
        </section>
        <BlankLine />
        <BlankLine />
        <CaptureActionForm investigationId={investigationId} />
      </main>
    </>
  );
}
