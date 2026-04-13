"use client"

import "@/app/globals.css";

import { useRouter } from "next/navigation";
import { Manrope, Inter, Playwrite_IE } from "next/font/google";
import { supabase } from "@/lib/supabase/supabase.client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { LuLoaderCircle } from "react-icons/lu";

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

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  
  /**
   * Handle signout
   */
  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  /**
     * Get current user
     */
  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) setUser(user);

      setIsLoading(false);
    }

    getUser();
  }, []);

  /**
   * Check if logged in
   */
  useEffect(() => {
    if (!isLoading && !user) return router.push("/admin/login");
  }, [isLoading, user, router]);

  if (isLoading)
    return (
      <html lang="en">
        <body className={`${manrope.variable} ${inter.variable} ${playwriteIreland.variable} h-full antialiased`} style={{ background: "#FCF8FF", color: "#4C4356" }}>
          <main className="min-h-screen flex items-center justify-center">
            <LuLoaderCircle className="size-12 animate-spin" />
          </main>
        </body>
      </html>
    )

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