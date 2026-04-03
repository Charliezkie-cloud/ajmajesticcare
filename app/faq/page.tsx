export default function FaqPage() {
  return (
    <>

      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/FAQPage" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
        <div className="flex justify-center items-center">

          <div className="w-2xl space-y-6">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">frequently asked questions</p>
            <h1 id="hero-heading" itemProp="name" className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope text-black">Certified Homemaker-Home Health Aides (CHHHAs)</h1>
            <h2 className="text-center text-xl sm:text-2xl font-manrope font-bold text-primary">Frequently Asked Questions (FAQ&apos;s)</h2>
            <p itemProp="description" className="text-center">Clear answers to help you navigate professional home care services in New Jersey with confidence and peace of mind.</p>
          </div>

        </div>
      </section>
    
    </>
  )
}