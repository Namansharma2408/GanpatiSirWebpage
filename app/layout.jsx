'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar, Footer } from "../components";
import LoadingScreen from "./LoadingPage";
import { useState,useEffect } from "react";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const minLoadingTime = 1000; // 1 second minimum
    
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      
      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad(); // already loaded
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />

            {/* main content grows to push footer to bottom */}
            <main className="flex-grow">
              {children}
            </main>

            {/* footer sits at the bottom */}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
