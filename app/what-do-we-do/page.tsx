import { LuArrowRightLeft, LuBriefcaseMedical, LuHospital, LuNetwork, LuStethoscope, LuUsers } from "react-icons/lu";

import Image from "next/image";
import Badge from "@/components/ui/Badge";

import AboutUsImage from "@/public/about-us-image.jpg";

export default function WhatDoWeDoPage() {
  return (
    <>

      {/* Hero section */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16"
      >
        <div className="space-y-8">

          <div className="flex items-center justify-center">
            <div className="w-lg space-y-6">
              <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Our mission</p>
              <h1 id="hero-heading" className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope text-black">What Do We Do?</h1>
              <p className="text-center">A personalized approach to home healthcare, ensuring every client receives the dignity, respect, and clinical excellence they deserve.</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={AboutUsImage}
              alt="A compassionate home healthcare professional providing personalized care to a client"
              priority
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Team approach section */}
      <section
        id="team-approach"
        aria-labelledby="team-approach-heading"
        aria-label="A&J Majestic Care collaborative home care team approach"
        className="bg-[#F5F2FF] my-24 py-12"
        itemScope
        itemType="https://schema.org/MedicalOrganization"
      >
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6">

            <div className="space-y-6">
              <p className="text-secondary uppercase font-bold tracking-widest text-xs brightness-50">Collaborative Excellence</p>
              <h2 id="team-approach-heading" className="font-manrope font-bold text-black text-2xl sm:text-4xl" itemProp="name">The Team Approach</h2>
              <p itemProp="description">A&J Majestic Care uses a team approach to start services. You, your nurses, Doctor and/or discharge planner are the initial team. We believe that open communication between healthcare providers and families is the cornerstone of effective care.</p>
              <p>Talk with them about what types of services you require. An A&J Majestic Care nurse can also be a good source for advice about determining services and how to proceed.</p>
              <div className="flex gap-4">

                {[
                  {
                    icon: <LuUsers className="size-5" />,
                    text: "Integrated Teams"
                  },
                  {
                    icon: <LuHospital className="size-5" />,
                    text: "Clinical Advice"
                  },
                ].map((item, index) => (
                  <Badge key={`team-approach-badge-${index}`} variant="secondary" className="flex gap-2 items-center justify-center font-semibold">
                    {item.icon}
                    {item.text}
                  </Badge>
                ))}

              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 size-10 bg-primary blur-2xl" />
              <div className="absolute bottom-0 right-0 size-10 bg-secondary blur-2xl" />

              <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-6">

                {[
                  {
                    icon: <LuStethoscope className="size-8 text-primary" />,
                    title: "Skilled RNs",
                    body: "Expert clinical oversight and assessment."
                  },
                  {
                    icon: <LuNetwork className="size-8 text-tertiary" />,
                    title: "Family",
                    body: "The core of our personalized strategy."
                  },
                  {
                    icon: <LuBriefcaseMedical className="size-8 text-secondary" />,
                    title: "Doctors",
                    body: "Coordinated care with your physicians."
                  },
                  {
                    icon: <LuArrowRightLeft className="size-8 text-secondary brightness-75" />,
                    title: "Planners",
                    body: "Seamless transition from hospital to home."
                  }
                ].map((item, index) => (
                  <article key={`team-approach-step-${index}`} className="bg-white shadow-xl rounded-2xl p-6 space-y-4" itemScope itemType="https://schema.org/MedicalBusiness">
                    {item.icon}
                    <h3 className="font-manrope font-bold text-black text-xl" itemProp="name">{item.title}</h3>
                    <p itemProp="description">{item.body}</p>
                  </article>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}