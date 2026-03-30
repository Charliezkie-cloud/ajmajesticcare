export default function ContactPage() {
  return (
    <>

      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="space-y-6">
          <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Get in touch</p>
          <h1 id="hero-heading" itemProp="name" className="text-black text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope">Always Here For <span className="text-primary">You.</span></h1>
          <p itemProp="description" className="text-center">
            Whether you have questions about our specialized nursing care or need immediate assistance, our team ready to provide the compassionate support your family deserves.
          </p>
        </div>
      </section>

    </>
  )
}