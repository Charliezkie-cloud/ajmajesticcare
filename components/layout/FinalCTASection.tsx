import Link from "next/link";

export default function FinalCTASection({ verticalSpacing = true }: { verticalSpacing?: boolean } ) {
  return (
    <section id="final-cta" aria-label="Free senior care consultation — personalized care plans for your family" className={verticalSpacing? "my-24 py-12" : ""}>
      <div className="max-w-6xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
        <div className="flex items-center justify-center">
          <div className="bg-primary text-gray-200 rounded-4xl shadow shadow-2xl w-full flex flex-col gap-8 justify-center items-center p-12">

            <h2 className="text-white text-center text-2xl sm:text-4xl font-bold text-manrope">
              Ready to experience the majestic way of care?
            </h2>
            <p className="text-center">
              Contact us today for a free consultation and let us help you build a personalized care plan for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/contact" title="Book a free senior care consultation — no hidden fees" className="transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-sm sm:text-md text-primary font-semibold px-6 py-4 rounded-lg shadow shadow-xl text-center">
                Book Your Free Consultation
              </Link>
              <Link href="/services" title="View our senior care services and care plans" className="transition text-center bg-transparent hover:bg-gray-200/50 active:bg-gray-300/50 text-sm sm:text-md text-gray-200 border border-2 border-gray-200 font-semibold px-6 py-4 rounded-lg shadow shadow-xl">
                View Our Services
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}