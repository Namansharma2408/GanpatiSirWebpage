"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "../src/Views/LoadingScreen";
import LandingPage from "../src/Views/LandingPage";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false); // already loaded
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return <div>{loading ? <LoadingScreen /> : <LandingPage />}</div>;
}
