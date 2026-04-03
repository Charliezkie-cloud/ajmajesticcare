export default function InspiredPage() {
  return (
    <>
    
      {/* Hero section */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        itemScope
        itemType="https://schema.org/WPHeader"
        className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16"
      >
        <div className="flex justify-center items-center">

          <div className="w-xl space-y-6" itemScope itemType="https://schema.org/Organization">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Our vision & values</p>
            <h1
              id="hero-heading"
              itemProp="name"
              className="text-center font-manrope font-extrabold text-black text-2xl sm:text-4xl md:text-6xl"
            >
              Inspired <span className="text-primary">to Care</span>
            </h1>
            <p itemProp="description" className="text-center">At A & J Majestic Care, our inspiration stems from the profound dignity of every individual. We are committed to a standard of excellence that honors the unique journey of those we serve.</p>
          </div>

        </div>
      </section>

    </>
  )
}