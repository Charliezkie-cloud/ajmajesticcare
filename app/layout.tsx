import "./globals.css";

import type { Metadata } from "next";
import { Manrope, Inter, Playwrite_IE } from "next/font/google";

import UtilityBar from "@/components/layout/UtilityBar";
import Navbar from "@/components/layout/Navbar";
import HeaderHeightProvider from "@/components/layout/HeaderHeightProvider";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-sans-manrope",
  subsets: ["latin"]
});

const inter = Inter({
  variable: "--font-sans-inter",
  subsets: ["latin"]
});

const playwriteIreland = Playwrite_IE({
  variable: "--font-cursive-ireland"
});

export const metadata: Metadata = {
  title: "Home Health Care Services in New Province, NJ",
  description: "We are a home care provider inspired to care the majestic way for recovering disabled adults and seniors. We believe each client deserves a holistic approach that restores and maintains their physical, mental, emotional, and spiritual health.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} ${playwriteIreland.variable} h-full antialiased`} style={{ background: "#FCF8FF", color: "#4C4356" }}>
        <HeaderHeightProvider>
          <UtilityBar />
          <Navbar />
        </HeaderHeightProvider>
        <main className="pt-[var(--header-height)] my-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
