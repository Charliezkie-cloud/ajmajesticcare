import { BsStarFill } from "react-icons/bs"
import { LuUser } from "react-icons/lu"

const reviews = [
  {
    user: "T. L.",
    rating: 5,
    date: new Date("October 1, 2025"),
    comment: "We brought in A&J to provide 24x7 care for my elderly father after an unfortunate incident with a prior caregiver. They moved very quickly to put together a full schedule of top quality caregivers. They have been flexible, responsive and have ensured coverage whenever there are changes in the schedule."
  },
  {
    user: "Melanie Huashuayo",
    rating: 5,
    date: new Date("September 1, 2025"),
    comment: "The care my grandmother receives from A & J Majestic Care has been amazing. She looks forward to her visits and feels safe and comfortable. It’s such a comfort knowing someone reliable is looking after her each day."
  },
  {
    user: "Venus Carandang",
    rating: 5,
    date: new Date("March 31, 2022"),
    comment: "This agency helped a lot with my nana. The care they provided was excellent and the staff were friendly and accommodating. Especially Maria was very helpful assisting me on the phone with my inquires."
  },
]

export default function ReviewsPage() {
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
          <div className="flex flex-row justify-center gap-6">

            {reviews.map((review, index) => (
              <article key={`review-item-${index}`} className="w-md bg-white rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12" itemScope itemType="https://schema.org/Review">
                <div className="flex flex-col gap-6 h-full">

                  <div className="inline-flex gap-2" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={review.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />

                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <BsStarFill key={`review-item-${index}-${starIndex}`} className="text-yellow-400 text-2xl" />
                    ))}

                  </div>

                  <p itemProp="reviewBody">{review.comment}</p>

                  <div className="flex items-center gap-6 mt-auto" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <LuUser className="size-10" />
                    <h2 className="font-manrope text-black font-bold" itemProp="name">{review.user}</h2>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

    </>
  )
}
