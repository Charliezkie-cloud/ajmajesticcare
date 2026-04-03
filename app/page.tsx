import { LuArrowRight, LuBadgeCheck, LuCircleCheck } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/hero-image.jpg";
import CAHC from "@/public/CAHC.png";

import ElderIcon from "@/public/icons/elder-icon.svg";
import MedicalIcon from "@/public/icons/medical-icon.svg";
import EducationIcon from "@/public/icons/education-icon.svg";
import FocusIcon from "@/public/icons/focus-icon.svg";

const services = [
  {
    icon: ElderIcon,
    heading: "Personal Care Needs",
    body: "Assistance with daily living activities while maintaining independence and comfort. (Bathing, grooming, personal hygiene, meal prep, and errands).",
    badges: ["Daily Support"]
  },
  {
    icon: MedicalIcon,
    heading: "Support & Coverage",
    body: "Flexible care options including companion and sitter services, live-in/out care, hospital bedside support, and respite care for families.",
  },
  {
    icon: EducationIcon,
    heading: "Educational Resources",
    body: "Expert guidance on fall prevention, medication safety, infection control, and client rights through professional consultation.",
  },
  {
    icon: FocusIcon,
    heading: "Specialized Focus",
    body: "Dedicated care for Alzheimer's, Dementia, ALS, Cancer, Stroke, and developmental disabilities with a focus on dignity.",
  }
];

const testimonial = {
  rating: 5,
  content: "We brought in A & J to provide 24x7 care for my elderly father after an unfortunate incident with a prior caregiver. They moved very quickly to put together a full schedule of top quality caregivers. They have been flexible, responsive and have ensured coverage whenever there are changes in the schedule.",
  author: {
    name: "T. L.",
    address: "Somewhere in New York"
  }
};

export default async function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="space-y-6">
          <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Inspired to care the majestic way</p>

          <div className="space-y-8 sm:space-y-10">
            <h1 id="hero-heading" className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope sm:space-y-3">
              <span className="block text-black">Providing quality home care with</span>
              <span className="block text-black"><span className="text-primary font-ireland">love and compassion</span> by</span>
              <span className="block text-black">experienced professionals.</span>
            </h1>

            <p className="text-center">Informed clients and caregivers make better decisions.</p>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
              <Button size="auto" className="w-full sm:w-auto">Download Brochure</Button>
              <Button variant="outlined" size="auto" className="inline-flex justify-center items-center gap-2 w-full sm:w-auto">
                Get Your Free Consultation <LuArrowRight className="size-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="flex justify-center items-center">
                <Image src={HeroImage} alt="Professional home caregiver providing compassionate care to a client" className="rounded-xl shadow shadow-xl" />
              </div>
              <div className="absolute -bottom-10 right-0 bg-gray-100 shadow shadow-xl rounded-xl p-3 inline-flex justify-content items-center gap-4 text-xs sm:text-sm">
                <LuBadgeCheck className="bg-secondary text-gray-800/75 rounded-full size-12 p-2" />
                <div>
                  <p className="font-medium">Certified Care</p>
                  <p className="opacity-75">Vetted Professionals Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate section */}
      <section id="certificate" style={{ background: "#F5F2FF" }} className="my-24 py-12" aria-label="Accreditation">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            <Image src={CAHC} alt="CAHC official accreditation certificate seal" className="h-[150px] w-auto" />
            <div className="space-y-3">
              <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">
                Recognized and accredited by
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-black">
                Accredited by the Commission on Accreditation for Homecare (CAHC)
              </h2>
              <p>
                As a CAHC-accredited home care agency in New Jersey, we meet and exceed state regulations
                to deliver safe, high-quality in-home care services to our patients and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="space-y-3 sm:space-y-6">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">
              Recognized and accredited by
            </p>
            <h2 id="services-heading" className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black">
              Services Tailored to Life
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex justify-end items-center">
                <Link href="/services" className="transition hover:underline hover:underline-offset-8 text-primary font-semibold inline-flex justify-center items-center gap-1">
                  Explore All Services <LuArrowRight className="size-5" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid grid-rows-4 grid-cols-0 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-none lg:grid-cols-4 gap-4">

                {services.map((service, index) => (
                  <div key={`service-item-${index}`} className="bg-white space-y-6 p-6 rounded-xl">
                    <Image src={service.icon} alt="" aria-hidden="true" />
                    <h3 className="text-black text-xl sm:text-2xl font-semibold">{service.heading}</h3>
                    <p>{service.body}</p>
                    <div>
                      {service.badges?.map((badge, index) => (
                        <span key={`service-badge-item-${index}`} className="text-foreground bg-secondary/50 p-2 rounded-full px-6 text-xs font-bold">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" style={{ background: "#F5F2FF" }} className="my-24 py-12" aria-label="Customer testimonials" itemScope itemType="https://schema.org/Review">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto flex justify-center">

          <div className="w-xl space-y-6">
            {/* Star Rating — structured data for rich snippets */}
            <div className="inline-flex gap-2" aria-label="5 out of 5 stars" itemScope itemType="https://schema.org/Rating" itemProp="reviewRating" role="img">
              <meta itemProp="ratingValue" content="5" />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="worstRating" content="1" />
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <BsStarFill key={i} className="size-5 text-yellow-400" aria-hidden="true" />
              ))}
            </div>

            {/* Review body */}
            <div>
              <q className="font-manrope text-xl sm:text-2xl font-bold text-black" itemProp="reviewBody">{testimonial.content}</q>
            </div>

            {/* Author */}
            <div className="flex flex-row gap-4" itemScope itemType="https://schema.org/Person" itemProp="author">
              <div className="flex items-center justify-center">
                <div className="w-10 text-primary">
                  <span className="block h-0.5 bg-primary" aria-hidden="true" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-lg sm:text-xl" itemProp="name">{testimonial.author.name}</p>
                <p itemProp="address">{testimonial.author.address}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA section */}
      <section id="final-cta" aria-label="Book a free consultation" className="my-24 py-12">
        <div className="max-w-6xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-primary text-gray-200 rounded-4xl shadow shadow-2xl w-full flex flex-col gap-8 justify-center items-center p-12">

              <h2 className="text-white text-center text-2xl sm:text-4xl font-bold text-manrope">
                Ready to find the right care?
              </h2>
              <p className="text-center">
                Schedule your no-obligation consultation today and let us create a personalized senior care plan for your loved one — at no cost to you.
              </p>
              <Link href="/contact" title="Book a free senior care consultation &mdash; no hidden fees" className="transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-sm sm:text-md text-primary font-semibold px-6 py-4 rounded-lg shadow shadow-xl">
                Book Your Free Consultation
              </Link>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <span className="inline-flex items-center justify-center gap-1 text-sm">
                  <LuCircleCheck className="size-5" /> No hidden fees
                </span>
                <span className="inline-flex items-center justify-center gap-1 text-sm">
                  <LuCircleCheck className="size-5" /> Free care assessment
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}