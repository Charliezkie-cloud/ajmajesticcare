import Image from "next/image";

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
    
    </>
  )
}