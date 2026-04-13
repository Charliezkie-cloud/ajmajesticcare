"use client"

import Button from "@/components/ui/Button";
import { supabase } from "@/lib/supabase/supabase.client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";

const IS_PRODUCTION = process.env.NEXT_PUBLIC_PRODUCTION === "true";
const PRODUCTION_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const PASSWORD_RESET_URL = `${IS_PRODUCTION ? PRODUCTION_URL : "http://localhost:3000/admin/"}reset-password`;

export default function AdminSettingsPage() {
  const [user, setUser] = useState<User | null>(null);

  // Reset password state
  const [isPassRequesting, setIsPassRequesting] = useState(false);
  const [passReqMsg, setPassReqMsg] = useState<string | null>(null);
  const [passReqErrMsg, setPassReqErrMsg] = useState<string | null>(null);

  /**
   * Sends a password reset requests to the current user.
   */
  async function sendPasswordResetRequest() {
    if (!user?.email) return;

    setIsPassRequesting(true);

    const currentUserEmail = user.email;
    const { error } = await supabase
      .auth
      .resetPasswordForEmail(currentUserEmail, {
        redirectTo: PASSWORD_RESET_URL
      });

    if (error) {
      setPassReqErrMsg(error.message);
      setIsPassRequesting(false);
      return;
    }

    setPassReqMsg(`Your password reset request has been sent, please check your \"${currentUserEmail}\" inbox.`);
    setIsPassRequesting(false);

    setTimeout(() => {
      setPassReqMsg(null);
      setPassReqErrMsg(null);
    }, 3000);
  }

  /**
   * Get current user
   */
  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user)
        setUser(user);
    }

    getUser();
  }, []);

  return (
    <>
      <h1 className="font-manrope font-bold text-primary uppercase tracking-widest mb-6">Settings</h1>

      {/* Security section */}
      <section className="bg-white rounded-2xl shadow-xl">
        <div className="p-6 border-b border-b-gray-200 space-y-4">

          {/* Password error and success messages */}
          {passReqErrMsg && (
            <p className="bg-red-50 border border-red-200 p-3 text-center font-semibold text-red-500 rounded-2xl">{passReqErrMsg}</p>
          )}
          {passReqMsg && (
            <p className="bg-green-100 border border-green-300 p-3 text-center font-semibold text-green-600 rounded-2xl">{passReqMsg}</p>
          )}
          
          <h2 className="font-manrope font-bold text-black text-xl sm:text-2xl">Security</h2>
        </div>
      
        <div className="p-6 space-y-3">
          <h3 className="opacity-75">Passsword</h3>

          <Button size="auto" className="flex items-center justify-center gap-2" onClick={sendPasswordResetRequest}>
            {isPassRequesting ? (
              <>
                Requesting <LuLoaderCircle className="size-5 animate-spin" />
              </>
            ) : ("Change Password")}
          </Button>
        </div>
      </section>
    </>
  )
}