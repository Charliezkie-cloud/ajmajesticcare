"use client"

import { useState } from "react";
import { LuStar } from "react-icons/lu";

type ReviewFormData = {
  fullName: string;
  rating: number | string;
  comment: string;
}

type ReviewFormProps = {
  onClose?: () => void;
  onSubmit?: (data: ReviewFormData) => void | Promise<void>;
}

export default function ReviewForm({ onClose, onSubmit }: ReviewFormProps) {
  const [fullName, setFullName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<Partial<ReviewFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ReviewFormData> = {};

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
      await onSubmit?.({ fullName, rating, comment });
      setFullName("");
      setRating(0);
      setComment("");
      setErrors({});
      onClose?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

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