"use client"

import { Review } from "@/lib/types/table.types";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs"
import { LuLoaderCircle } from "react-icons/lu";

import ReviewForm from "@/components/forms/ReviewForm";
import Modal from "@/components/ui/Modal";


const avatarColors = [
  "bg-violet-200 text-violet-700",
  "bg-sky-200 text-sky-700",
  "bg-rose-200 text-rose-700",
  "bg-emerald-200 text-emerald-700",
  "bg-amber-200 text-amber-700",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ReviewsPage() {
  const [reviewModal, setReviewModal] = useState(false);

  // Page state
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Reviews
  const [reviews, setReviews] = useState<Review[]>([]);

  /**
   * Fetch reviews
   */
  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews", { method: "GET" });
        const json = await res.json();

        if (!res.ok)
          return setError(json.message);
        setReviews(json);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews();
  }, []);

  /**
   * Close review form modal
   */
  function onReviewModalClose() {
    setReviewModal(false);
  }

  return (
    <>

      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/HomeAndConstructionBusiness" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="flex justify-center items-center">
          <div className="space-y-6 max-w-2xl">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Kind words</p>
            <h1 id="hero-heading" itemProp="name" className="text-black text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope">Stories of <span className="text-primary">Compasion</span> and Trust.</h1>
            <p itemProp="description" className="text-center">
              Hear from the families we serve. We are honored to provide the care that allows your loved ones to thrive in the comfort of their own homes.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section id="reviews" className="my-12 py-12" aria-label="Customer Reviews">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">

          {error && (
            <div className="bg-red-50 border border-red-300 rounded-2xl shadow-xl flex items-center justify-center p-4 m-4">
              <p className="text-red-500 font-semibold">{error}</p>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center">
              <LuLoaderCircle className="size-12 animate-spin" />
            </div>
          ) : (
              <div className="flex flex-col md:flex-row justify-center gap-6">

                {reviews.map((review, index) => (
                  <article key={`review-item-${index}`} className="w-full md:w-md bg-white rounded-2xl shadow-2xl p-8 md:p-12" itemScope itemType="https://schema.org/Review">
                    <div className="flex flex-col gap-6 h-full">

                      <div className="inline-flex gap-2" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={review.rating.toString()} />
                        <meta itemProp="bestRating" content="5" />

                        {Array.from({ length: review.rating }).map((_, starIndex) => (
                          <BsStarFill key={`review-item-${index}-${starIndex}`} className="text-yellow-400 text-2xl" />
                        ))}
                      </div>

                      <p itemProp="reviewBody">{review.comment}</p>

                      <div className="mt-auto space-y-6">
                        <hr className="border-gray-100" />

                        <div className="flex flex-row items-center gap-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                          <div className={`rounded-full size-12 flex items-center justify-center font-bold text-sm shrink-0 ${avatarColors[index % avatarColors.length]}`} aria-hidden="true">
                            {getInitials(review.full_name)}
                          </div>
                          <h2 className="font-manrope text-black font-bold leading-tight" itemProp="name">{review.full_name}</h2>
                        </div>
                      </div>

                    </div>
                  </article>
                ))}

              </div>
          )}
        </div>
      </section>

      {/* Leave a review section */}
      <section id="final-cta" aria-labelledby="final-cta-heading" className="my-12 py-12" itemScope itemType="https://schema.org/ReviewAction">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="flex justify-center items-center">

            <div className="w-6xl bg-primary p-8 sm:p-12 rounded-3xl text-gray-200 shadow-2xl">
              <div className="flex flex-col gap-8 items-center justify-center">
                <h2 id="final-cta-heading" className="text-center text-white font-manrope font-bold text-2xl md:text-4xl">Have We Cared For Your Loved One?</h2>
                <p className="text-center">Your feedback helps us continue to provide the highest level of care. We would be honored if you shared your experience with us.</p>
                <button onClick={() => setReviewModal(!reviewModal)} aria-label="Open review form to share your care experience" aria-haspopup="dialog" className="transition bg-white hover:bg-gray-200 active:bg-gray-300 text-primary font-semibold px-8 py-4 rounded-full shadow-2xl text-sm sm:text-md">Leave a Review</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Review form modal */}
      <Modal show={reviewModal} onClose={onReviewModalClose} title="Share Your Experience">
        <ReviewForm
          onClose={onReviewModalClose}
        />
      </Modal>

    </>
  )
}