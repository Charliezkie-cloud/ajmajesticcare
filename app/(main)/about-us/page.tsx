import { LuMapPin } from "react-icons/lu";

import GoogleMap from "@/components/ui/GoogleMap";
import AboutUsImage from "@/public/about-us-image.jpg";
import Image from "next/image";
import FinalCTASection from "@/components/layout/FinalCTASection";

export default function AboutUsPage() {
  return (
    <>
    
      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-6 md:gap-12">
          <div className="space-y-6">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">Our Legacy</p>
            <h1 id="hero-heading" className="text-4xl sm:text-6xl font-manrope font-extrabold text-black">
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

      {/* Mission section */}
      <section id="mission" className="bg-[#F5F2FF] my-24 py-12">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="sticky top-45 lg:top-40 font-manrope font-extrabold text-2xl sm:text-4xl text-black">Our Mission</h2>
              <span className="sticky top-55 lg:top-53 h-1 w-25 bg-primary rounded-full" />
            </div>

            <div className="col-span-2 space-y-6">
              <h3 className="text-primary font-bold font-manrope text-xl sm:text-2xl">
                Majestic (madzestik; majes’tik) adj. beautiful, dignified and impressive.
              </h3>
              <p>We believe life is a beautiful gift. Majestic Care Nurses and CHHAs are passionate about giving quality care to our clients to achieve a better quality of life.</p>
              <p>A&J Majestic Care is a unique and holistic healthcare service for in home and other familiar living spaces</p>
              <p>Our mission is to collaborate with our client and family health care service, in a self-directed way that respects their individuality, faith and values. We seek to coordinate the highest quality of care by reaching out to clients and their families for their physical, emotional, social, and spiritual needs during illness or other life changes.</p>
              <p>We also seek to create connections through social media to educate and guide communities on the importance of quality care for a better life among adults, aging clients and caregivers alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations section */}
      <section id="locations" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto" aria-label="A&J Majestic Care service areas in New Jersey" itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="A&J Majestic Care" />
        <meta itemProp="areaServed" content="Union, Middlesex, Morris, Sussex, Warren, Essex, Bergen Counties, New Jersey" />

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-5">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">Where we serve</p>
            <h2 className="font-manrope font-extrabold text-2xl sm:text-4xl text-black">
              Home Care Services in New Jersey
            </h2>
            <p>
              A&J Majestic Care provides services in Union, Middlesex, Morris, Sussex, Warren, Essex, Bergen Counties or 50 miles from home location (New Providence, NJ).
            </p>

            <address className="bg-primary/10 border-gray-200 p-6 rounded-xl flex flex-row items-center gap-4 not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <LuMapPin className="text-primary size-7" aria-hidden="true" />
              <div>
                <h3 className="font-manrope font-bold text-lg sm:text-xl text-black">Home Office</h3>
                <p>
                  <span itemProp="addressLocality">New Providence</span>,{" "}
                  <span itemProp="addressRegion">NJ</span>
                </p>
              </div>
            </address>
          </div>

          <div>
            <GoogleMap />
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}