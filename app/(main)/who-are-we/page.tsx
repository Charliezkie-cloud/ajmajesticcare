import { LuBanknote, LuGraduationCap, LuHeartHandshake, LuHospital, LuShieldCheck } from "react-icons/lu";

import Badge from "@/components/ui/Badge";
import Image from "next/image";

import AboutUsImage from "@/public/about-us-image.jpg";
import FemaleNurse from "@/public/female-nurse.jpg";
import MaleNurse from "@/public/male-nurse.jpg";
import FinalCTASection from "@/components/layout/FinalCTASection";

export default function WhoAreWePage() {
  return (
    <>

      {/* Hero section */}
      <section 
        id="hero" 
        aria-labelledby="hero-heading" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12 lg:py-16 flex items-center justify-center"
        >
        <div className="flex flex-col justify-center items-center space-y-6 sm:space-y-12 w-full">

          <div className="max-w-2xl w-full space-y-6">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">
              Our Identity
            </p>
            <h1 id="hero-heading" className="font-manrope text-black font-bold text-2xl sm:text-4xl md:text-6xl text-center">
              Who are we?
            </h1>
            <p className="text-center leading-relaxed">
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
            <Image 
              src={AboutUsImage} 
              alt="A caregiver from A&J Majestic Care providing companionship to an elderly client at home" className="rounded-2xl shadow-xl w-full h-auto object-cover" priority 
            />
            <div className="bg-white p-4 absolute right-4 sm:right-10 -bottom-20 rounded-2xl shadow-2xl max-w-[200px] sm:max-w-xs">
              <h2 className="text-primary font-manrope font-bold">50+ Years</h2>
              <p className="text-sm">Combined nursing experience serving our community.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Origins Section */}
      <section
        id="our-origins"
        aria-labelledby="our-origins-heading"
        className="bg-[#F5F2FF] my-24 py-12"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
              <Image
                src={FemaleNurse}
                alt="A&J Majestic Care co-founder female nurse holding a clipboard"
                width={280}
                height={360}
                className="rounded-2xl shadow-xl object-cover mt-6 w-[46%] sm:w-[260px] lg:w-[280px]"
                itemProp="image"
              />
              <Image
                src={MaleNurse}
                alt="A&J Majestic Care co-founder male nurse with a stethoscope"
                width={280}
                height={360}
                className="rounded-2xl shadow-xl object-cover mb-6 w-[46%] sm:w-[260px] lg:w-[280px]"
                itemProp="image"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">
                Our Origins
              </p>
              <h2
                id="our-origins-heading"
                className="font-manrope font-bold text-black text-2xl sm:text-4xl md:text-5xl"
                itemProp="name"
              >
                A Passion to Serve Born from Two Nurses.
              </h2>
              <p itemProp="description">
                A&J Majestic Care has a humble beginning that grows out of passion and inspiration to serve those in need by two Nurses.
              </p>
              <p>
                Their more than 50 years combined nursing experiences from various areas of specialties make an unparalleled difference from other providers. We understand the clinical nuances and the human emotions that come with home health care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Commitment section */}
      <section 
        id="commitment"
        aria-labelledby="commitment-heading"
        className="w-full py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
          <div className="bg-primary/10 rounded-full p-4">
            <LuHeartHandshake className="size-8 text-primary" />
          </div>
          <h2 id="commitment-heading" className="font-manrope text-black font-bold text-2xl md:text-4xl">
            A Commitment to Care for Everyone
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-2xl w-full">
            <q className="text-gray-600 italic text-sm sm:text-base leading-relaxed">
              A&J Majestic Care does not discriminate against any application for services because of race, color, religion, sexual orientation, gender identity, national origin, ancestry, citizenship status, age (adult) or disability.
            </q>
          </div>
        </div>
      </section>

      {/* Support and accessibility section */}
      <section
        id="support-and-accessibility"
        aria-labelledby="support-and-accessibility-heading"
        className="bg-[#F5F2FF] my-24 py-12"
      >
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto space-y-8">

          <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">
                Resources
              </p>
              <h2 id="support-and-accessibility-heading" className="font-manrope font-bold text-black text-2xl md:text-4xl">Support & Accessibility</h2>
            </div>
            <div className="self-end">
              <p className="text-end text-sm">Navigating care options can be complex. We are here to guide you through every financial and educational step.</p>
            </div>
          </div>

          <ul className="flex flex-col md:grid md:grid-cols-2 gap-6" role="list">

            {[
              {
                icon: (
                  <div className="bg-secondary/10 rounded-full p-4" aria-hidden="true">
                    <LuBanknote className="size-8 text-black" />
                  </div>
                ),
                title: "Payments",
                content: "We accept Private Pay & Insurance, ensuring high-quality care is reachable for everyone. Our team handles the complexities so you can focus on health."
              },
              {
                icon: (
                  <div className="bg-primary/10 rounded-full p-4" aria-hidden="true">
                    <LuGraduationCap className="size-8 text-black" />
                  </div>
                ),
                title: "Family Education",
                content: "We inform and educate family caregivers and clients regarding insurance resources: Long Term Care, Veterans Benefits, Private & Managed Care. Knowledge is the first step to peace of mind."
              }
            ].map((item, index) => (
              <li key={`support-item-${index}`} className="bg-white p-6 sm:p-12 rounded-2xl shadow-xl space-y-6">
                <div className="flex items-center justify-start">
                  {item.icon}
                </div>
                <h3 className="font-manrope font-bold text-black text-xl sm:text-2xl">{item.title}</h3>
                <p>{item.content}</p>
              </li>
            ))}

          </ul>

        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTASection />

    </>
  )
}