import { LuHospital, LuShieldCheck } from "react-icons/lu";

import Badge from "@/components/ui/Badge";
import Image from "next/image";

import AboutUsImage from "@/public/about-us-image.jpg";

export default function WhoAreWePage() {
  return (
    <>

      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12 lg:py-16 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center space-y-6 sm:space-y-12 w-full">

          <div className="max-w-2xl w-full space-y-6">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">
              Our Identity
            </p>
            <h1 id="hero-heading" className="font-manrope text-black font-bold text-2xl sm:text-4xl md:text-6xl text-center">
              Who are we?
            </h1>
            <p className="text-center text-sm sm:text-base leading-relaxed">
              A&amp;J Majestic Care is a home health care services provider inspired to care the
              majestic way for recovering disabled adults and senior living in the comfort of
              their homes or other living spaces they considered home... We believe in holistic
              approach for each unique client in maintaining or restoring physical, mental,
              emotional and spiritual health.
            </p>
            <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
              {[
                {
                  icon: <LuShieldCheck className="size-5" />,
                  content: "Holistic Approach",
                },
                {
                  icon: <LuHospital className="size-5" />,
                  content: "In-Home Specialist",
                },
              ].map((badge, index) => (
                <Badge key={`hero-badge-item-${index}`} variant="secondary" size="sm" className="font-bold flex items-center justify-center gap-2">
                  {badge.icon}
                  {badge.content}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative w-full mb-12 sm:mb-14">
            <Image src={AboutUsImage} alt="A caregiver from A&J Majestic Care providing companionship to an elderly client at home" className="rounded-2xl shadow-xl w-full h-auto object-cover" priority />
            <div className="bg-white p-4 absolute right-4 sm:right-10 -bottom-10 rounded-2xl shadow-2xl max-w-[200px] sm:max-w-xs">
              <h2 className="text-primary font-manrope font-bold">50+ Years</h2>
              <p className="text-sm">Combined nursing experience serving our community.</p>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}