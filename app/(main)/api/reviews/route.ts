import { ReviewFormData } from "@/components/forms/ReviewForm";
import { sendMail } from "@/lib/services/nodemailer.services";
import { readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import sanitize from "@/lib/sanitizer";
import path from "path";

const RECEIVER_EMAIL = process.env.NEXT_RECEIVER_EMAIL!;
if (!RECEIVER_EMAIL) throw new Error("NEXT_RECEIVER_EMAIL is not defined");

const reviewsTemplatePath = path.join(process.cwd(), "public", "email_templates", "reviews_template.html");
const template = readFileSync(reviewsTemplatePath, "utf-8");

const NAME_REGEX = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'\-.]+$/;

// ========== VALIDATE FORM BODY ==========
function validateFormBody(data: Partial<ReviewFormData>): string | null {
	const full_name = data.fullName?.trim() ?? "";
	if (!full_name)
		return "Full name is required.";
	if (full_name.length < 2)
		return "Full name must be at least 2 characters.";
	if (full_name.length > 100)
		return "Full name must not exceed 100 characters.";
	if (!NAME_REGEX.test(full_name))
		return "Full name contains invalid characters.";

	const rating = Number(data.rating);
	if (!rating)
		return "Rating is required.";
	if (rating < 1 || rating > 5)
		return "Rating must be between 1 and 5.";

	const comment = data.comment?.trim() ?? "";
	if (!comment)
		return "Comment is required.";
	if (comment.length < 10)
		return "Comment must be at least 10 characters.";
	if (comment.length > 2000)
		return "Comment must not exceed 2000 characters.";

	return null;
}

// ========== POST METHOD ==========
export async function POST(req: NextRequest) {
	if (!req.headers.get("content-type")?.includes("application/json"))
		return NextResponse.json({ message: "Content-Type must be application/json." }, { status: 415 });

	let data: Partial<ReviewFormData>;

	try {
		data = await req.json();
	} catch {
		return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
	}

	const validationError = validateFormBody(data);
	if (validationError)
		return NextResponse.json({ message: validationError }, { status: 422 });

	const safe = data as ReviewFormData;

	const html = template
		.replaceAll("{{FULL_NAME}}", sanitize(safe.fullName))
		.replaceAll("{{RATING}}", safe.rating.toString())
		.replaceAll("{{COMMENT}}", sanitize(safe.comment));

	try {
		await sendMail(`New Review from ${sanitize(safe.fullName)}`, RECEIVER_EMAIL, html);
	} catch (err) {
		console.error("[sendMail error]", err);
		return NextResponse.json({ message: "Failed to send email. Please try again later." }, { status: 500 });
	}

	return NextResponse.json({ message: "Your interest form has been submitted successfully." }, { status: 200 });
}