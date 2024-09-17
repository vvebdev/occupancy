"use client";
import { Auth } from "@/widgets/auth";
import { Header } from "@/widgets/header";
import { Stands } from "@/widgets/stands";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);

  const handleAuthChange = (user: string) => {
    if (user) {
      localStorage.setItem("user", user);
      setHasUser(Boolean(user));
    }
  };

  const handleQuitButtonClick = () => {
    setHasUser(false);
    localStorage.clear();
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setHasUser(Boolean(user));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return hasUser ? (
    <>
      <Header onQuit={handleQuitButtonClick} />
      <main>
        <Stands />
      </main>
    </>
  ) : (
    <Auth onChange={handleAuthChange} />
  );
};
