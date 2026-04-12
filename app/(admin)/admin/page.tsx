"use client"

import { supabase } from "@/lib/supabase/supabase.client"
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { LuCalendarClock, LuLoaderCircle, LuMail, LuStar, LuUserPlus } from "react-icons/lu";
import { getTotalContacts, getTotalPendingContacts } from "@/lib/services/contact.services";

import AdminSideBar from "@/components/layout/AdminSideBar";

export default function AdminHomePage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const [totalContacts, setTotalContacts] = useState<number>(0);
  const [totalPendingContacts, setTotalPendingContacts] = useState<number>(0);
  
  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  // ========== GET TOTAL ROWS OF EACH TABLES ==========
  useEffect(() => {
    if (!isLoading && !user) return router.push("/admin/login");

    // ===== GET TOTAL CONTACTS =====
    async function fetchTotalContacts() {
      try {
        const count = await getTotalContacts();
        
        setTotalContacts(count ?? 0);
      } catch (err) {
        console.error(err instanceof Error ? err.message : err);
      }
    }

    // ===== GET TOTAL PENDING CONTACTS =====
    async function fetchTotalPendingContacts() {
      try {
        const count = await getTotalPendingContacts();

        setTotalPendingContacts(count ?? 0);
      } catch (err) {
        console.error(err instanceof Error ? err.message: err);
      }
    }

    fetchTotalContacts();
    fetchTotalPendingContacts();
  }, [isLoading, user, router]);

  // ========== GET CURRENT USER ==========
  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) setUser(user);

      setIsLoading(false);
    }
  
    getUser();
  }, []);

  // ========== CHECK IF LOGGED IN ==========
  useEffect(() => {
    if (!isLoading && !user) return router.push("/admin/login");
  }, [isLoading, user, router]);

  if (isLoading)
    return (
      <section className="min-h-screen flex items-center justify-center">
        <LuLoaderCircle className="size-12 animate-spin" />
      </section>
    )

  return (
    <section className="min-h-screen md:flex">
      {/* Sidebar */}
      <AdminSideBar onSignOut={handleSignOut} />

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="font-manrope font-bold text-primary uppercase tracking-widest mb-6">Dashboard Overview</h1>

        <div className="grid grid-rows-4 grid-cols-none sm:grid-cols-4 sm:grid-rows-none gap-4">

          {[
            {
              title: "Total Contacts",
              href: "/admin/contacts",
              icon: (
                <div className="bg-primary/10 p-3 rounded-full mb-auto">
                  <LuMail className="text-primary size-6 md:size-8" />
                </div>
              ),
              data: totalContacts
            },
            {
              title: "Total Applicants",
              href: "/admin/careers",
              icon: (
                <div className="bg-secondary/10 p-3 rounded-full mb-auto">
                  <LuUserPlus className="text-secondary size-6 md:size-8" />
                </div>
              ),
              data: totalContacts
            },
            {
              title: "Total Reviews",
              href: "/admin/reviews",
              icon: (
                <div className="bg-tertiary/10 p-3 rounded-full mb-auto">
                  <LuStar className="text-tertiary size-6 md:size-8" />
                </div>
              ),
              data: totalContacts
            },
            {
              title: "Pending Consultations",
              href: "/admin/contacts",
              icon: (
                <div className="bg-red-500/10 p-3 rounded-full mb-auto">
                  <LuCalendarClock className="text-red-500 size-6 md:size-8" />
                </div>
              ),
              data: totalPendingContacts
            },
          ].map((item, index) => (
            <div key={`total-card-${index}`} onClick={() => router.push(item.href)} className="bg-white hover:bg-transparent cursor-pointer p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6">
              {item.icon}
              <h2 className="font-manrope text text-black font-bold text-2xl sm:text-2xl">{item.data}</h2>
              <p className="text-sm md:text-base text-center font-semibold">{item.title}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}