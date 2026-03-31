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

    </>
  )
}
