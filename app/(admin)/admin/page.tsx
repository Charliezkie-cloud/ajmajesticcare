"use client"

import { supabase } from "@/lib/supabase/supabase.client"
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { LuLoaderCircle } from "react-icons/lu";

import AdminSideBar from "@/components/layout/AdminSideBar";

export default function AdminHomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  
  async function handleSignOut() {
    await supabase.auth.signOut();
    redirect("/admin/login");
  }

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) setUser(user);

      setIsLoading(false);
    }
  
    getUser();
  }, []);

  useEffect(() => {
    if (!isLoading && !user) return redirect("/admin/login");
  }, [isLoading, user]);

  if (isLoading)
    return (
      <section className="min-h-screen flex items-center justify-center">
        <LuLoaderCircle className="size-12 animate-spin" />
      </section>
    )

  return (
    <section className="min-h-screen flex">
      {/* Sidebar */}
      <AdminSideBar onSignOut={handleSignOut} />

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1>Dashboard Overview</h1>
      </div>
    </section>
  )
}