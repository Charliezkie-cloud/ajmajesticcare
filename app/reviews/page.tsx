"use client"

import ReviewForm from "@/components/forms/ReviewForm";
import Modal from "@/components/ui/Modal";

import { useState } from "react";
import { BsStarFill } from "react-icons/bs"

const reviews = [
  {
    user: "T. L.",
    role: "Verified Family Member",
    rating: 5,
    date: new Date("October 1, 2025"),
    comment: "We brought in A&J to provide 24x7 care for my elderly father after an unfortunate incident with a prior caregiver. They moved very quickly to put together a full schedule of top quality caregivers. They have been flexible, responsive and have ensured coverage whenever there are changes in the schedule."
  },
  {
    user: "Melanie Huashuayo",
    role: "Granddaughter",
    rating: 5,
    date: new Date("September 1, 2025"),
    comment: "The care my grandmother receives from A & J Majestic Care has been amazing. She looks forward to her visits and feels safe and comfortable. It's such a comfort knowing someone reliable is looking after her each day."
  },
  {
    user: "Venus Carandang",
    role: "Family Liaison",
    rating: 5,
    date: new Date("March 31, 2022"),
    comment: "This agency helped a lot with my nana. The care they provided was excellent and the staff were friendly and accommodating. Especially Maria was very helpful assisting me on the phone with my inquires."
  }
];

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

  function onReviewModalClose() { setReviewModal(false); }

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
                        {getInitials(review.user)}
                      </div>
                      <div className="space-y-0.5">
                        <h2 className="font-manrope text-black font-bold leading-tight" itemProp="name">{review.user}</h2>
                        <p className="opacity-50 text-sm">{review.role}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            ))}

          </div>
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
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </Modal>

    </>
  )
}