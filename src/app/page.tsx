"use client";

import { useState, useEffect } from "react";
import { LandingPage } from "@/components/layout/LandingPage";
import { AuthPage } from "@/components/layout/AuthPage";
import { WelcomePage } from "@/components/layout/WelcomePage";
import { Dashboard } from "@/components/layout/Dashboard";
import type { AppPage } from "@/types";

const MOCK_USER = {
  name: "Alex Johnson",
  email: "alex.johnson@gmail.com",
  avatar: "AJ",
};

export default function Home() {
  const [page, setPage] = useState<AppPage>("landing");

  const handleConnect = () => {
    setPage("auth");
    // Simulate OAuth flow
    setTimeout(() => setPage("welcome"), 2000);
  };

  const handleStart = () => {
    setPage("dashboard");
  };

  const handleLogout = () => {
    setPage("landing");
  };

  return (
    <>
      {page === "landing" && <LandingPage onConnect={handleConnect} />}
      {page === "auth" && <AuthPage />}
      {page === "welcome" && (
        <WelcomePage user={MOCK_USER} onStart={handleStart} />
      )}
      {page === "dashboard" && <Dashboard onLogout={handleLogout} />}
    </>
  );
}
