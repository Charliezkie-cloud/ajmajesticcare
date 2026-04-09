import "@/app/globals.css";

import type { Metadata } from "next";
import { Manrope, Inter, Playwrite_IE } from "next/font/google";

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
  title: {
    template: '%s | Admin',
    default: 'Admin',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} ${playwriteIreland.variable} h-full antialiased`} style={{ background: "#FCF8FF", color: "#4C4356" }}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}