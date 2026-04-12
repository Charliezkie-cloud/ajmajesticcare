import { CareerFormFields } from "@/components/forms/CareersForm";
import { sendMail } from "@/lib/services/nodemailer.services";
import { readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

import sanitize from "@/lib/misc/sanitizer";
import path from "path";

const RECEIVER_EMAIL = process.env.NEXT_RECEIVER_EMAIL!;
if (!RECEIVER_EMAIL) throw new Error("NEXT_RECEIVER_EMAIL is not defined");

const careersTemplatePath = path.join(process.cwd(), "public", "email_templates", "careers_template.html");
const template = readFileSync(careersTemplatePath, "utf-8");

const PHONE_REGEX = /^\+?[0-9\s\-().]{7,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'\-.]+$/;

// ========== VALIDATE FORM BODY ==========
function validateFormBody(data: Partial<CareerFormFields>): string | null {
  const full_name = data.full_name?.trim() ?? "";
  if (!full_name)
    return "Full name is required.";
  if (full_name.length < 2)
    return "Full name must be at least 2 characters.";
  if (full_name.length > 100)
    return "Full name must not exceed 100 characters.";
  if (!NAME_REGEX.test(full_name))
    return "Full name contains invalid characters.";

  const phone_number = data.phone_number?.trim() ?? "";
  if (!phone_number)
    return "Phone number is required.";
  if (!PHONE_REGEX.test(phone_number))
    return "Phone number is invalid.";

  const email_address = data.email_address?.trim() ?? "";
  if (!email_address)
    return "Email address is required.";
  if (!EMAIL_REGEX.test(email_address))
    return "Email address is invalid.";
  if (email_address.length > 254)
    return "Email address is too long.";

  const address = data.address?.trim() ?? "";
  if (!address)
    return "Address is required.";
  if (address.length < 5)
    return "Address must be at least 5 characters.";
  if (address.length > 300)
    return "Address must not exceed 300 characters.";

  const experience = data.experience?.trim() ?? "";
  if (!experience)
    return "Experience is required.";
  if (experience.length < 10)
    return "Experience must be at least 10 characters.";
  if (experience.length > 2000)
    return "Experience must not exceed 2000 characters.";

  return null;
}

// ========== POST METHOD ==========
export async function POST(req: NextRequest) {
  if (!req.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ message: "Content-Type must be application/json." }, { status: 415 });

  let data: Partial<CareerFormFields>;

  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const validationError = validateFormBody(data);
  if (validationError)
    return NextResponse.json({ message: validationError }, { status: 422 });

  const safe = data as CareerFormFields;

  const html = template
    .replaceAll("{{FULL_NAME}}", sanitize(safe.full_name))
    .replaceAll("{{PHONE_NUMBER}}", sanitize(safe.phone_number))
    .replaceAll("{{EMAIL_ADDRESS}}", sanitize(safe.email_address))
    .replaceAll("{{ADDRESS}}", sanitize(safe.address))
    .replaceAll("{{EXPERIENCE}}", sanitize(safe.experience));

  try {
    await sendMail(`New Application from ${sanitize(safe.full_name)}`, RECEIVER_EMAIL, html);
  } catch (err) {
    console.error("[sendMail error]", err);
    return NextResponse.json({ message: "Failed to send email. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ message: "Your interest form has been submitted successfully." }, { status: 200 });
}