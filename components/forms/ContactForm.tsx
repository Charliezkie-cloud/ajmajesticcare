"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

type FormState = {
  full_name: string;
  phone_number: string;
  email_address: string;
  zip_code: string;
  comments: string;
};

type FormErrors = Partial<Record<keyof Omit<FormState, "comments">, string>>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialFormState: FormState = {
  full_name: "",
  phone_number: "",
  email_address: "",
  zip_code: "",
  comments: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_REGEX = /^\d{4,10}$/;

function validateForm(formState: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!formState.full_name.trim())
    errors.full_name = "Full name is required.";
  else if (formState.full_name.trim().length < 2)
    errors.full_name = "Full name must be at least 2 characters.";

  if (!formState.phone_number.trim())
    errors.phone_number = "Phone number is required.";

  if (!formState.email_address.trim())
    errors.email_address = "Email address is required.";
  else if (!EMAIL_REGEX.test(formState.email_address.trim()))
    errors.email_address = "Enter a valid email address.";

  if (!formState.zip_code.trim())
    errors.zip_code = "Zip code is required.";
  else if (!ZIP_REGEX.test(formState.zip_code.trim()))
    errors.zip_code = "Enter a valid zip code.";

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialFormState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="bg-white p-4 sm:p-8 md:p-12 rounded-2xl shadow shadow-xl space-y-6 col-span-2">
      <form className="space-y-6" aria-label="Contact form" onSubmit={handleSubmit} noValidate>
        <h2 id="contact-heading" className="text-black font-manrope font-bold text-xl sm:text-3xl mb-6">Send a Message</h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          <div className="flex flex-col gap-2 md:w-full">
            <label htmlFor="full_name" className="font-semibold">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="full_name"
              name="full_name"
              type="text"
              placeholder="Jane Doe"
              autoComplete="name"
              value={form.full_name}
              onChange={handleChange}
              required
            />
            {errors.full_name && <p className="text-red-500 text-xs">{errors.full_name}</p>}
          </div>
          <div className="flex flex-col gap-2 md:w-full">
            <label htmlFor="phone_number" className="font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone_number"
              name="phone_number"
              type="text"
              placeholder="(555) 000-0000"
              autoComplete="tel"
              value={form.phone_number}
              onChange={handleChange}
              required
            />
            {errors.phone_number && <p className="text-red-500 text-xs">{errors.phone_number}</p>}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          <div className="flex flex-col gap-2 md:w-full">
            <label htmlFor="email_address" className="font-semibold">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email_address"
              name="email_address"
              type="email"
              placeholder="jane@example.com"
              autoComplete="email"
              value={form.email_address}
              onChange={handleChange}
              required
            />
            {errors.email_address && <p className="text-red-500 text-xs">{errors.email_address}</p>}
          </div>
          <div className="flex flex-col gap-2 md:w-full">
            <label htmlFor="zip_code" className="font-semibold">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <Input
              id="zip_code"
              name="zip_code"
              type="number"
              placeholder="0000"
              autoComplete="postal-code"
              value={form.zip_code}
              onChange={handleChange}
              required
            />
            {errors.zip_code && <p className="text-red-500 text-xs">{errors.zip_code}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="comments" className="font-semibold">
            Extra comments/info you would like for us to know
          </label>
          <Textarea
            id="comments"
            name="comments"
            placeholder="Tell us more about your needs..."
            rows={4}
            value={form.comments}
            onChange={handleChange}
          />
        </div>

        {status === "error" && errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        {status === "success" && (
          <p className="text-green-600 text-sm text-center font-semibold">
            Your message has been sent! We&apos;ll get back to you shortly.
          </p>
        )}

        <div className="flex justify-center items-center w-full">
          <Button type="submit" className="w-full font-bold" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
      <p className="text-primary text-center font-semibold text-sm">Contact now for free consultation!</p>
    </div>
  );
}
