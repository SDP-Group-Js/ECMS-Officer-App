"use client";
import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      router.push("./viewInvestigations");
    }
  }, []);

  const login = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const uid = auth.currentUser?.uid;

      const API_URL = "http://localhost:8080";
      const response = await fetch(`${API_URL}/api/user/users/${uid}`);
      const userData = await response.json();
      const userRole = userData.userRole;

      if (userRole !== "FieldOfficer") {
        await signOut(auth);
        window.location.pathname = "/";
        alert("Only field officers can access the system.");
        return;
      }

      alert("Login Successful");
      router.push("./viewInvestigations");
      return;
    } catch (error: any) {
      setError(error.message);
      alert(error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="mx-4 w-full rounded-lg border-t-4 border-green-400 p-5 shadow-lg md:w-[50%] lg:w-[30%]">
        <h1 className="my-4 flex justify-center text-xl font-bold">Login</h1>

        <form onSubmit={login} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="mb-0 mt-4 rounded-sm border-2 border-gray-200 px-4 py-2"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="mb-4 mt-0 rounded-sm border-2 border-gray-200 px-4 py-2"
          />
          <button className="cursor-pointer bg-green-600 px-6 py-2 font-bold text-white">
            Login
          </button>
          {error && (
            <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
