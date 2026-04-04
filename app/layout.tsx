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

const siteUrl = "https://ajmajesticcare.vercel.app"; // TODO: replace with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Home Health Care Services in New Providence, NJ",
    template: "%s | A & J Majestic Care", // TODO: replace with actual company name
  },
  description:
    "We are a home care provider inspired to care the majestic way for recovering disabled adults and seniors. We believe each client deserves a holistic approach that restores and maintains their physical, mental, emotional, and spiritual health.",
  keywords: [
    "home health care",
    "home care services",
    "senior care",
    "disabled adult care",
    "New Providence NJ",
    "in-home care New Jersey",
    "elder care NJ",
  ],
  authors: [{ name: "A & J Majestic Care", url: siteUrl }], // TODO: replace
  category: "Health Care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "A & J Majestic Care", // TODO: replace
    title: "Home Health Care Services in New Providence, NJ",
    description:
      "We are a home care provider inspired to care the majestic way for recovering disabled adults and seniors. We believe each client deserves a holistic approach that restores and maintains their physical, mental, emotional, and spiritual health.",
    images: [
      {
        url: "/og-image.jpg", // TODO: add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Home Health Care Services in New Providence, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Health Care Services in New Providence, NJ",
    description:
      "We are a home care provider inspired to care the majestic way for recovering disabled adults and seniors. We believe each client deserves a holistic approach that restores and maintains their physical, mental, emotional, and spiritual health.",
    images: ["/og-image.jpg"], // TODO: same image as OG
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness", // or "MedicalBusiness" / "LocalBusiness"
  name: "A & J Majestic Care", // TODO: replace
  url: siteUrl,
  description:
    "We are a home care provider inspired to care the majestic way for recovering disabled adults and seniors.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Providence",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
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