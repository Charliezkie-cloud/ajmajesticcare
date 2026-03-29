import AboutUsImage from "@/public/about-us-image.jpg";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
    
      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-6 md:gap-12">
          <div className="space-y-6">
            <span className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">Our Legacy</span>
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-manrope font-extrabold text-black">
              About Us
            </h1>
            <p>
              We are a home care provider inspired to care the majestic way for recovering disabled adults and seniors.
              We believe each client deserves a holistic approach that restores and maintains their physical, mental,
              emotional, and spiritual health.
            </p>
            <p>
              Majestic Care Nurses are committed to quality home care. Our Registered Nurses perform initial assessments,
              delegate responsibilities, and make periodic visits to monitor progress and client satisfaction. RNs also
              design each client&apos;s individual plan of care, and supervise personal and assisted services provided by the
              Certified Homemaker-Home Health Aide. The CHHA assists RNs by providing personal care and homemaker services.
            </p>
            <div className="flex items-center bg-primary/5 gap-4 rounded-lg">
              <span className="w-1 h-20 bg-primary" aria-hidden="true" />
              <div className="p-4">
                <blockquote cite="https://ajmajesticcare.com/" className="text-primary font-bold font-manrope text-lg md:text-xl">
                  &quot;Informed clients and caregivers make better decisions&quot;
                </blockquote>
              </div>
            </div>
          </div>

          <div className="relative md:rotate-2">
            <Image src={AboutUsImage} alt="Majestic Care nurse providing compassionate home care to an elderly senior" className="h-100 w-auto object-cover rounded-2xl drop-shadow-xl/25" priority />
            <div className="absolute size-20 bg-sky-500 blur-2xl -z-10 bottom-0 left-0" aria-hidden="true" />
          </div>
        </div>
      </section>
    
    </>
  )
}