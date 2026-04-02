"use client";

import { useState } from "react";

import { LuFileUser } from "react-icons/lu";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

type FormFields = {
  full_name: string;
  phone_number: string;
  email_address: string;
  address: string;
  experience: string;
};

type FormErrors = Record<keyof FormFields, string>;

type FormStatus = "idle" | "loading" | "success" | "error";

const initialFields: FormFields = {
  full_name: "",
  phone_number: "",
  email_address: "",
  address: "",
  experience: "",
};

const initialErrors: FormErrors = {
  full_name: "",
  phone_number: "",
  email_address: "",
  address: "",
  experience: "",
};

function validate(fields: FormFields): FormErrors {
  const errors = { ...initialErrors };

  if (!fields.full_name.trim())
    errors.full_name = "Full name is required.";

  if (!fields.phone_number.trim())
    errors.phone_number = "Phone number is required.";
  else if (!/^\+?[\d\s\-().]{7,20}$/.test(fields.phone_number.trim()))
    errors.phone_number = "Please enter a valid phone number.";

  if (!fields.email_address.trim())
    errors.email_address = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email_address.trim()))
    errors.email_address = "Please enter a valid email address.";

  if (!fields.address.trim())
    errors.address = "Address is required.";

  if (!fields.experience.trim())
    errors.experience = "Experience is required.";

  return errors;
}

function hasErrors(errors: FormErrors): boolean {
  return Object.values(errors).some((e) => e !== "");
}

export default function CareersForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(fields);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFields(initialFields);
      setErrors(initialErrors);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby="form-heading" className="space-y-6 bg-white shadow shadow-2xl rounded-2xl p-4 sm:p-8 md:p-12 w-4xl">

      <div className="flex flex-col items-center justify-center gap-6">
        <LuFileUser className="size-14 text-primary" />
        <h2 id="form-heading" className="text-xl sm:text-4xl font-manrope text-black font-bold">Start Your Journey</h2>
        <p className="text-center">Please fill out this interest form and we will be in contact with you soon.</p>
      </div>

      {status === "success" && (
        <div role="alert" className="rounded-xl bg-green-50 border border-green-200 p-4 text-center text-green-700 font-semibold">
          Thank you for your interest! We&apos;ll be in contact with you soon.
        </div>
      )}

      {status === "error" && (
        <div role="alert" className="rounded-xl bg-red-50 border border-red-200 p-4 text-center text-red-600 font-semibold">
          {errorMessage}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-2">
        <div className="sm:w-full flex flex-col gap-2">
          <label htmlFor="full_name" className="font-semibold">Full Name</label>
          <Input id="full_name" type="text" name="full_name" autoComplete="name" placeholder="Your full name" value={fields.full_name} onChange={handleChange} aria-describedby="full_name_error" required />
          {errors.full_name && <p id="full_name_error" role="alert" className="text-sm text-red-500">{errors.full_name}</p>}
        </div>
        <div className="sm:w-full flex flex-col gap-2">
          <label htmlFor="phone_number" className="font-semibold">Phone Number</label>
          <Input id="phone_number" type="tel" name="phone_number" autoComplete="tel" placeholder="(555) 000-0000" value={fields.phone_number} onChange={handleChange} aria-describedby="phone_number_error" required />
          {errors.phone_number && <p id="phone_number_error" role="alert" className="text-sm text-red-500">{errors.phone_number}</p>}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-2">
        <div className="sm:w-full flex flex-col gap-2">
          <label htmlFor="email_address" className="font-semibold">Email Address</label>
          <Input id="email_address" type="email" name="email_address" autoComplete="email" placeholder="email@example.com" value={fields.email_address} onChange={handleChange} aria-describedby="email_address_error" required />
          {errors.email_address && <p id="email_address_error" role="alert" className="text-sm text-red-500">{errors.email_address}</p>}
        </div>
        <div className="sm:w-full flex flex-col gap-2">
          <label htmlFor="address" className="font-semibold">Address</label>
          <Input id="address" type="text" name="address" autoComplete="street-address" placeholder="Street, City, State, Zip" value={fields.address} onChange={handleChange} aria-describedby="address_error" required />
          {errors.address && <p id="address_error" role="alert" className="text-sm text-red-500">{errors.address}</p>}
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="experience" className="font-semibold">Experience</label>
        <Textarea id="experience" name="experience" placeholder="Tell us about your relevant work experience and background" rows={6} value={fields.experience} onChange={handleChange} aria-describedby="experience_error" required />
        {errors.experience && <p id="experience_error" role="alert" className="text-sm text-red-500">{errors.experience}</p>}
      </div>

      <Button type="submit" className="font-semibold w-full" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Interest Form"}
      </Button>

    </form>
  );
}
