"use client"

import { useState } from "react";
import { LuStar } from "react-icons/lu";

export type ReviewFormFields = {
  fullName: string;
  rating: number | string;
  comment: string;
}

type ReviewFormProps = {
  onClose?: () => void;
}

export default function ReviewForm({ onClose }: ReviewFormProps) {
  const [fullName, setFullName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<Partial<ReviewFormFields>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitErrMessage, setSubmitErrMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<ReviewFormFields> = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (rating < 1 || rating > 5) newErrors.rating = "Please select a rating.";
    if (!comment.trim()) newErrors.comment = "Comment is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fullName, rating, comment })
      });

      if (!res.ok) {
        const data = await res.json();
        setSubmitErrMessage(data.message);
        return;
      }

      setFullName("");
      setRating(0);
      setComment("");
      setErrors({});
      onClose?.();
      setSubmitErrMessage("");
    } catch (err) {
      console.error(err instanceof Error ? err.message : err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {submitErrMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <p className="text-sm font-medium text-center">{submitErrMessage}</p>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="font-manrope font-semibold text-sm text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition ${errors.fullName ? "border-red-400" : "border-gray-200"}`}
        />
        {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-manrope font-semibold text-sm text-gray-700">Rating</label>
        <div className="flex flex-row gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition active:scale-90"
            >
              <LuStar className={`size-7 transition ${star <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`} />
            </button>
          ))}
        </div>
        {errors.rating && <p className="text-xs text-red-500">{errors.rating}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-manrope font-semibold text-sm text-gray-700">Comment</label>
        <textarea
          placeholder="Tell us about your experience..."
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={`w-full border bg-gray-50 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition resize-none ${errors.comment ? "border-red-400" : "border-gray-200"}`}
        />
        {errors.comment && <p className="text-xs text-red-500">{errors.comment}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-manrope font-semibold text-base py-4 rounded-xl transition"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>

    </form>
  )
}