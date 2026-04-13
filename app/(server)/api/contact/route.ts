import { ContactFormFields } from "@/components/forms/ContactForm";
import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/services/nodemailer.services";
import { readFileSync } from "node:fs";
import { insertContact } from "@/lib/services/contact.services";

import path from "node:path";
import sanitize from "@/lib/misc/sanitizer";

const RECEIVER_EMAIL = process.env.NEXT_RECEIVER_EMAIL!;
if (!RECEIVER_EMAIL) throw new Error("NEXT_RECEIVER_EMAIL is not defined");

const contactTemplatePath = path.join(process.cwd(), "public", "email_templates", "contact_template.html");
const template = readFileSync(contactTemplatePath, "utf-8"); // cached at module level

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_REGEX = /^\d{4,10}$/;

/**
 * Validate contact form fields
 * @param {ContactFormFields} formState
 * @returns {string | boolean}
 */
function validateFormBody(formState: ContactFormFields): string | boolean {
  if (!formState.full_name.trim())
    return "Full name is required.";
  else if (formState.full_name.trim().length < 2)
    return "Full name must be at least 2 characters.";

  if (!formState.phone_number.trim())
    return "Phone number is required.";

  if (!formState.email_address.trim())
    return "Email address is required.";
  else if (!EMAIL_REGEX.test(formState.email_address.trim()))
    return "Enter a valid email address.";

  if (!formState.zip_code.trim())
    return "Zip code is required.";
  else if (!ZIP_REGEX.test(formState.zip_code.trim()))
    return "Enter a valid zip code.";

  if (formState.comments && formState.comments.length > 2000)
    return "Comments must be under 2000 characters.";

  return true;
}

/**
 * Post method
 * @param {NextRequest} req 
 * @returns {NextResponse}
 */
export async function POST(req: NextRequest) {
  let data: ContactFormFields;

  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const validation = validateFormBody(data);
  if (typeof validation === "string")
    return NextResponse.json({ message: validation }, { status: 400 });

  const html = template
    .replaceAll("{{FULL_NAME}}", sanitize(data.full_name))
    .replaceAll("{{PHONE_NUMBER}}", sanitize(data.phone_number))
    .replaceAll("{{EMAIL_ADDRESS}}", sanitize(data.email_address))
    .replaceAll("{{ZIP_CODE}}", sanitize(data.zip_code))
    .replaceAll("{{EXTRA_COMMENTS}}", sanitize(data.comments ?? ""))
    .replaceAll("{{SENDER_NAME}}", sanitize(data.full_name));

  // ===== INSERT TO DATABASE =====
  try {
    await insertContact({
      full_name: sanitize(data.full_name),
      phone_number: sanitize(data.phone_number),
      email_address: sanitize(data.email_address),
      zip_code: Number(data.zip_code),
      message: sanitize(data.comments),
    });
  } catch (err) {
    console.error("[database error]", err);
    return NextResponse.json({ message: "Something went wrong with the database, please try again later." }, { status: 500 });
  }

  // ===== SEND EMAIL =====
  try {
    await sendMail(`New Contact Request from ${sanitize(data.full_name)}`, RECEIVER_EMAIL, html);
  } catch (err) {
    console.error("[sendMail error]", err);
    return NextResponse.json({ message: "Failed to send email. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ message: "Your contact details has been submitted!" });
}