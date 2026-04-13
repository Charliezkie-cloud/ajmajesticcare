"use client"

import { supabase } from "@/lib/supabase/supabase.client"
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { LuCalendarClock, LuChevronRight, LuLoaderCircle, LuMail, LuStar, LuUserPlus } from "react-icons/lu";
import { getRecentContacts, getTotalContacts, getTotalPendingContacts } from "@/lib/services/contact.services";
import { toStringDate } from "@/lib/misc/dateFormatter";
import { getRecentCareers, getTotalCareers } from "@/lib/services/careers.services";
import { Career, Contact } from "@/lib/types/table.types";

import AdminSideBar from "@/components/layout/AdminSideBar";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function AdminHomePage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // CONTACTS
  const [totalContacts, setTotalContacts] = useState<number>(0);
  const [totalPendingContacts, setTotalPendingContacts] = useState<number>(0);
  const [recentContacts, setRecentContacts] = useState<Contact[] | null>(null);

  // CAREERS
  const [totalCareers, setTotalCareers] = useState<number>(0);
  const [recentCareers, setRecentCareers] = useState<Career[] | null>(null);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  /**
   * Get total rows of each tables
   */
  useEffect(() => {
    if (!isLoading && !user) return router.push("/admin/login");

    /**
     * Fetch total contacts
     */
    async function fetchTotalContacts() {
      try {
        const count = await getTotalContacts();
        
        setTotalContacts(count ?? 0);
      } catch (err) {
        console.error(err);
      }
    }

    /**
     * Fetch total pending contacts
     */
    async function fetchTotalPendingContacts() {
      try {
        const count = await getTotalPendingContacts();

        setTotalPendingContacts(count ?? 0);
      } catch (err) {
        console.error(err);
      }
    }

    /**
     * Fetch recent contacts
     */
    async function fetchRecentContacts() {
      try {
        const res = await getRecentContacts();

        setRecentContacts(res);
      } catch (err) {
        console.error(err);
      }
    }

    /**
     * Fetch total careers
     */
    async function fetchTotalCareers() {
      try {
        const res = await getTotalCareers();

        setTotalCareers(res ?? 0);
      } catch (err) {
        console.error(err);
      }
    }

    /**
     * Fetch recent careers
     */
    async function fetchRecentCareers() {
      try {
        const res = await getRecentCareers();

        setRecentCareers(res);
      } catch (err) {
        console.error(err);
      }
    }
  
    // Counts
    fetchTotalContacts();
    fetchTotalPendingContacts();
    fetchTotalCareers();
    
    // Recent Data
    fetchRecentContacts();
    fetchRecentCareers();
  }, [isLoading, user, router]);

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
      <section className="min-h-screen flex items-center justify-center">
        <LuLoaderCircle className="size-12 animate-spin" />
      </section>
    )

  return (
    <section className="min-h-screen md:flex">
      {/* Sidebar */}
      <AdminSideBar onSignOut={handleSignOut} />

      {/* Main content */}
      <div className="md:flex-1 p-4 sm:p-6 md:p-8">
        <h1 className="font-manrope font-bold text-primary uppercase tracking-widest mb-6">Dashboard Overview</h1>

        {/* Cards */}
        <div className="grid grid-rows-4 grid-cols-none sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-none gap-4 mb-4 md:mb-6">

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
              data: totalCareers
            },
            {
              title: "Total Reviews",
              href: "/admin/reviews",
              icon: (
                <div className="bg-tertiary/10 p-3 rounded-full mb-auto">
                  <LuStar className="text-tertiary size-6 md:size-8" />
                </div>
              ),
              data: 0
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
            <div key={`total-card-${index}`} onClick={() => router.push(item.href)} className="bg-white hover:bg-transparent cursor-pointer p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-6">
              {item.icon}
              <h2 className="font-manrope text text-black font-bold text-2xl sm:text-2xl">{item.data}</h2>
              <p className="text-sm md:text-base text-center font-semibold">{item.title}</p>
            </div>
          ))}

        </div>

        
        <div className="grid grid-cols-none grid-rows-2 md:grid-cols-5 md:grid-rows-none gap-4">

          {/* Recent contacts */}
          <div className="md:col-span-3 bg-white shadow-lg rounded-2xl">
            <div className="flex items-center p-6">
              <h2 className="font-semibold text-lg sm:text-xl">Recent Contacts</h2>
              <Link href="/admin/contacts" className="text-primary hover:underline hover:underline-offset-4 hover:underline-primary font-semibold ms-auto">View all</Link>
            </div>

            <div className="overflow-x-auto overflow-y-auto">
              <div className="h-96">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-gray-100">
                      <th scope="col" className="py-4 px-6 font-manrope font-bold uppercase text-sm tracking-widest text-start">Full name</th>
                      <th scope="col" className="py-4 px-6 font-manrope font-bold uppercase text-sm tracking-widest text-start">Date</th>
                      <th scope="col" className="py-4 px-6 font-manrope font-bold uppercase text-sm tracking-widest text-start">Status</th>
                    </tr>
                  </thead>
                  <tbody>

                    {recentContacts && recentContacts.map((contact, index) => (
                      <tr key={`recent-contact-item-${index}`} className="border-b border-b-gray-200">
                        <th scope="row" className="p-6 text-start">{contact.full_name}</th>
                        <td>{toStringDate(contact.created_at)}</td>
                        <td>{contact.status === "pending" ? (
                          <Badge size="auto" variant="secondary" className="font-semibold capitalize">{contact.status}</Badge>
                        ) : (
                          <Badge size="auto" variant="primary" className="font-semibold capitalize">{contact.status}</Badge>
                        )}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Careers */}
          <div className="md:col-span-2 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="font-semibold text-lg sm:text-xl mb-6">Recent Careers</h2>

            <div className="overflow-y-auto">
              <div className="h-96">
                <div className="flex flex-col gap-2">

                  {recentCareers && recentCareers.map((career, index) => (
                    <Link href={`/admin/careers/${career.id}`} key={`recent-career-item-${index}`} className="p-3 flex flex-row items-center gap-2 hover:bg-gray-100 rounded-2xl">
                      <div>
                        <h3 className="font-bold">{career.full_name}</h3>
                        <span className="text-sm opacity-75">{toStringDate(career.created_at)}</span>
                      </div>
                      <LuChevronRight className="size-5 ms-auto" />
                    </Link>
                  ))}

                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <Button variant="outlined" size="sm" className="border-dashed w-full" href="/admin/careers">Browse All Applications</Button>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}