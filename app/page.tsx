import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default async function Home() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
