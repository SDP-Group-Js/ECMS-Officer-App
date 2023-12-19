"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/firebase";
import LoginForm from "@/app/components/LoginForm";

interface AuthContextProps {
  user: any;
  userName: string | null;
  userOffice: string | null;
  loading: boolean;
  userInvestigations: any[];
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  userName: null,
  userOffice: null,
  loading: false,
  userInvestigations: [],
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userOffice, setUserOffice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userInvestigations, setUserInvestigations] = useState<any[]>([]);

  const API_URL = "http://localhost:8080";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const response = await fetch(`${API_URL}/api/user/users/${uid}`);
        const userData = await response.json();
        const name = userData.name;
        const office = userData.office.name;
        const investigations = userData.office.assignedInvestigations;

        setUser(user);
        setUserName(name);
        setUserOffice(office);
        setLoading(false);
        setUserInvestigations(investigations);
      } else {
        setUser(null);
        setUserName(null);
        setUserOffice(null);
        setLoading(false);
        setUserInvestigations([]);
      }
    });

    return () => unsubscribe(); // Cleanup the subscription when the component unmounts
  }, []); // Run this effect only once when the component mounts

  const AuthValues: AuthContextProps = {
    user: user,
    userName: userName,
    userOffice: userOffice,
    loading: loading,
    userInvestigations: userInvestigations,
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
