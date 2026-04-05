import { FormState } from "@/components/forms/ContactForm";
import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/services/nodemailer.services";
import { readFileSync } from "node:fs";
import path from "node:path";

const receiverEmail = process.env.NEXT_RECEIVER_EMAIL;
if (!receiverEmail) throw new Error("NEXT_RECEIVER_EMAIL is not defined");

const contactTemplatePath = path.join(process.cwd(), "public", "email_templates", "contact_template.html");
const template = readFileSync(contactTemplatePath, "utf-8"); // cached at module level

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_REGEX = /^\d{4,10}$/;

const sanitize = (str: string) =>
  str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

function validateFormBody(formState: FormState): string | boolean {
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

export async function POST(req: NextRequest) {
  let data: FormState;

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

  try {
    await transporter.sendMail({
      from: "no-reply@ajmajesticcare.com",
      to: receiverEmail,
      subject: `New Contact Request from ${sanitize(data.full_name)}`,
      html,
    });
  } catch (err) {
    console.error("[sendMail error]", err);
    return NextResponse.json({ message: "Failed to send email. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ message: "Your contact details has been submitted!" });
}