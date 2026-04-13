import nodemailer from "nodemailer";
import sanitize from "../misc/sanitizer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_SENDER_EMAIL,
    pass: process.env.NEXT_SENDER_PASSWORD
  }
})

/**
 * Send email using gmail
 * @param {string} subject 
 * @param {string} to 
 * @param {string} html
 */
export async function sendMail(subject: string, to: string, html: string): Promise<void> {
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