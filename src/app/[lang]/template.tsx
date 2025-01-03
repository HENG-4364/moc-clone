"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/screen/Loading";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      // Set a 5-second delay before hiding the spinner
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    handleStart(); // Set initial state to loading

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  useEffect(() => {
    // Set a 5-second delay before hiding the spinner on route changes
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
}
