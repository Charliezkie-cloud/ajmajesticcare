export default function ServicesPage() {
  return (
    <>
    
      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/Service" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="space-y-6">
          <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Our comprehensive care</p>
          <h1 id="hero-heading" itemProp="name" className="text-black text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope">Dedicated Support For Your Loved Ones</h1>
          <p itemProp="description" className="text-center">
            We provide professional, compassionate home care services tailored to meet the unique needs of every client.
            {" "}<q itemProp="slogan" className="text-primary">Inspired to care the majestic way</q>
          </p>
        </div>
      </section>

    </>
  )
}