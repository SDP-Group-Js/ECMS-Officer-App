"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/firebase";
import LoginForm from "@/app/components/LoginForm";
import { signOut } from "firebase/auth";

interface AuthContextProps {
  user: any;
  userName: string | null;
  userOffice: string | null;
  loading: boolean;
  userOfficeInvestigations: any[];
  fetchUserData: (user: any) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  userName: null,
  userOffice: null,
  loading: false,
  userOfficeInvestigations: [],
  fetchUserData: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userOffice, setUserOffice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userOfficeInvestigations, setUserOfficeInvestigations] = useState<
    any[]
  >([]);

  const API_URL = "http://localhost:8080";

  const fetchUserData = async (user: any) => {
    try {
      const uid = user.uid;
      const token = await user.getIdToken(true);
      const response = await fetch(`${API_URL}/api/user/users/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await response.json();
      const name = userData.name;
      const userRole = userData.userRole;
      const office = userData.office.name;
      const investigations = userData.office.assignedInvestigations;

      if (userRole !== "FieldOfficer") {
        window.location.pathname = "/";
        alert("Only Field Officers are allowed to access the system.");
        await signOut(auth);
      }

      setUser(user);
      setUserName(name);
      setUserOffice(office);
      setLoading(false);
      setUserOfficeInvestigations(investigations);
    } catch (error: any) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchUserData(user);
      } else {
        setUser(null);
        setUserName(null);
        setUserOffice(null);
        setLoading(false);
        setUserOfficeInvestigations([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const AuthValues: AuthContextProps = {
    user: user,
    userName: userName,
    userOffice: userOffice,
    loading: loading,
    userOfficeInvestigations: userOfficeInvestigations,
    fetchUserData: fetchUserData,
  };

  return (
    <AuthContext.Provider value={AuthValues}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>{user ? <>{children}</> : <LoginForm />}</>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
