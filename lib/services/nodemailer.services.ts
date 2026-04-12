import nodemailer from "nodemailer";
import sanitize from "../misc/sanitizer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_SENDER_EMAIL,
    pass: process.env.NEXT_SENDER_PASSWORD
  }
})

export async function sendMail(subject: string, to: string, html: string) {
  const sanitizedEmail = sanitize(to);

  try {
    await transporter.sendMail({
      from: "no-reply@ajmajesticcare.com",
      to: sanitizedEmail,
      subject,
      html,
    });
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
}