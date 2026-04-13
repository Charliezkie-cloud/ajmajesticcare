"use client"

import "@/app/globals.css";

import { useRouter } from "next/navigation";
import { Manrope, Inter, Playwrite_IE } from "next/font/google";
import { supabase } from "@/lib/supabase/supabase.client";

import AdminSideBar from "@/components/layout/AdminSideBar";


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

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  
  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} ${playwriteIreland.variable} h-full antialiased`} style={{ background: "#FCF8FF", color: "#4C4356" }}>
        <div className="min-h-screen block md:flex">
          {/* Sidebar */}
          <AdminSideBar onSignOut={handleSignOut} />
          
          {/* Main contents */}
          <main className="block md:flex-1 p-4 sm:p-6 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}