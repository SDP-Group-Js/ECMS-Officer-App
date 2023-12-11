import NavBar from "../components/NavBar";
import WelcomeRibbon from "../components/WelcomeRibbon";

export default function Home() {
  return (
    <>
      <NavBar />
      <WelcomeRibbon />
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        Wassup Beijing
      </main>
    </>
  );
}
