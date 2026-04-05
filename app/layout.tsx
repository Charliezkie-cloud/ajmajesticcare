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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!; // TODO: replace with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Home Health Care Services in New Providence, NJ",
    template: "%s | A & J Majestic Care", // TODO: replace with actual company name
  },
  description:
    "We are a home care provider inspired to care the majestic way for recovering disabled adults and seniors. We believe each client deserves a holistic approach that restores and maintains their physical, mental, emotional, and spiritual health.",
  keywords: [
    // Core service keywords
    "home health care",
    "home care services",
    "in-home care",
    "private duty nursing",
    "personal care services",
    "companion care",
    "respite care",
    "skilled nursing care at home",
    "non-medical home care",
    "24-hour home care",
    "live-in care",

    // Target demographics
    "senior care",
    "elder care",
    "elderly care at home",
    "disabled adult care",
    "care for adults with disabilities",
    "post-surgery home care",
    "chronic illness care",
    "Alzheimer's care at home",
    "dementia care",
    "Parkinson's care",

    // Service-specific
    "activities of daily living assistance",
    "ADL assistance",
    "medication reminders",
    "mobility assistance",
    "fall prevention care",
    "wound care at home",
    "physical therapy support",
    "occupational therapy support",
    "holistic home care",
    "mental health support home care",
    "spiritual care seniors",

    // Geo-targeted — New Providence & surrounding NJ areas
    "New Providence NJ",
    "New Providence home care",
    "in-home care New Jersey",
    "elder care NJ",
    "home health aide NJ",
    "home care agency New Jersey",
    "Somerset County home care",
    "Union County home care",
    "Morris County home care",
    "Millburn NJ home care",
    "Summit NJ home care",
    "Chatham NJ home care",
    "Basking Ridge NJ home care",
    "Westfield NJ elder care",
    "Springfield NJ senior care",

    // Trust & intent keywords
    "licensed home care agency NJ",
    "affordable home health care NJ",
    "trusted home care provider NJ",
    "best home care New Jersey",
    "compassionate senior care NJ",
    "family-centered home care",
    "caregiver services NJ",
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
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "City", name: "New Providence" },
    { "@type": "City", name: "Summit" },
    { "@type": "City", name: "Millburn" },
    { "@type": "City", name: "Chatham" },
    { "@type": "City", name: "Basking Ridge" },
    { "@type": "City", name: "Westfield" },
    { "@type": "City", name: "Springfield" },
    { "@type": "AdministrativeArea", name: "Somerset County" },
    { "@type": "AdministrativeArea", name: "Union County" },
    { "@type": "AdministrativeArea", name: "Morris County" },
  ],
  knowsAbout: [
    "Home Health Care",
    "Senior Care",
    "Disabled Adult Care",
    "Companion Care",
    "Respite Care",
    "Dementia Care",
    "Alzheimer's Care",
    "Personal Care Services",
    "Activities of Daily Living",
    "Post-Surgery Recovery Care",
    "Holistic Health Care",
  ],
  serviceType: [
    "Home Health Care",
    "Personal Care",
    "Companion Care",
    "Respite Care",
    "Live-In Care",
    "24-Hour Home Care",
    "Dementia and Alzheimer's Care",
    "Post-Surgery Recovery Support",
  ],
  medicalSpecialty: [
    "Geriatrics",
    "Rehabilitation",
    "Chronic Disease Management",
    "Palliative Care",
  ],
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
          <UtilityBar className="sticky top-0 z-40" />
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