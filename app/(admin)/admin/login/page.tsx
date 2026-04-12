"use client"

import { LuLoaderCircle, LuMoveRight, LuShieldCheck } from "react-icons/lu";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase.client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

type LoginFormFields = {
  email: string;
  password: string;
};

type FormFieldsStatus = {
  email: string | null;  // null = no error
  password: string | null;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export default function AdminLoginPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const [loginForm, setLoginForm] = useState<LoginFormFields>({ email: "", password: "" });
  const [loginFieldsStatus, setLoginFieldsStatus] = useState<FormFieldsStatus>({ email: null, password: null });
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  function validateLoginForm(): boolean {
    const errors: FormFieldsStatus = {
      email: null,
      password: null,
    };

    // ─── Email ────────────────────────────────────────────────────────────────
    if (!loginForm?.email?.trim()) {
      errors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(loginForm.email.trim())) {
      errors.email = "Enter a valid email address.";
    }

    // ─── Password ─────────────────────────────────────────────────────────────
    if (!loginForm?.password) {
      errors.password = "Password is required.";
    } else if (loginForm.password.length < MIN_PASSWORD_LENGTH) {
      errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    // ─── Commit all errors at once ────────────────────────────────────────────
    setLoginFieldsStatus(prev => ({ ...prev, ...errors }));

    return Object.values(errors).every(msg => msg === null);
  }

  async function handleLoginSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoggingIn(true);
    if (!validateLoginForm())
      return setIsLoggingIn(false);

    const { error } = await supabase.auth.signInWithPassword(loginForm);
    if (error) {
      setLoginStatus(error.message);
      return setIsLoggingIn(false);
    }

    setLoginStatus(null);
    setIsLoggingIn(false);
    router.push("/admin");
  }

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
    if (!isLoading && user) return router.push("/admin");
  }, [isLoading, user, router]);

  if (isLoading)
    return (
      <section className="min-h-screen flex items-center justify-center">
        <LuLoaderCircle className="size-12 animate-spin" />
      </section>
    )

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">

      <div className="fixed top-75 left-25 size-15 bg-secondary blur-3xl -z-50" />
      <div className="fixed bottom-75 right-25 size-15 bg-primary blur-3xl -z-50" />

      <div className="w-full max-w-xl lg:max-w-2xl bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="uppercase font-semibold tracking-widest text-xs sm:text-sm">Administration</h1>
          <h2 className="font-manrope text-2xl sm:text-4xl text-black font-bold">Welcome Back</h2>
          <p className="text-sm sm:text-base text-gray-600">Please enter your credentials to access the A & J Majestic Care Portal.</p>
        </div>
        
        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-6 w-full">
          {loginStatus && (
            <div className="bg-red-300/25 border border-red-300 rounded-xl p-4 flex items-center justify-center">
              <p className="font-semibold text-red-400">{loginStatus}</p>
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-semibold text-sm sm:text-base">Email Address</label>
            <Input type="email" id="email" name="email_address" value={loginForm.email} onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))} placeholder="name@ajmajesticcare.com" />
            {loginFieldsStatus.email && (
              <p className="text-red-500">{loginFieldsStatus.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="font-semibold text-sm sm:text-base">Password</label>
            <Input type="password" id="password" name="password" value={loginForm.password} onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))} />
            {loginFieldsStatus.password && (
              <p className="text-red-500">{loginFieldsStatus.password}</p>
            )}
          </div>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Input type="checkbox" id="rememberMe" name="remember_me" />
              <label htmlFor="rememberMe" className="font-semibold text-sm sm:text-base">Remember Me</label>
            </div>
            <Link href="/admin/forgot_password" className="text-primary hover:underline font-semibold text-sm sm:text-base">Forgot password?</Link>
          </div>
          <Button type="submit" variant="primary" size="lg" className="flex flex-row gap-2 items-center justify-center font-semibold mt-2 w-full">Sign In {isLoggingIn ? (
            <LuLoaderCircle className="size-5 animate-spin" />
          ) : (
            <LuMoveRight className="size-5" />
          )}</Button>
        </form>
        
        <hr className="opacity-25"/>
        <div className="flex items-center justify-center">
          <Badge variant="secondary" size="sm" className="font-semibold text-sky-700 flex flex-row gap-2 items-center justify-center text-xs sm:text-sm w-full sm:w-auto text-center"><LuShieldCheck className="shrink-0 size-4 sm:size-5"/> Secure Server Connection Active</Badge>
        </div>
      </div>

    </section>
  )
}