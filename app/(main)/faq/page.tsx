import Accordion from "@/components/ui/Accordion";
import Link from "next/link";

const questionsAndAnswers = [
  {
    question: "What do homemaker-home health aides (CHHHAs) do?",
    answer: "CHHHAs provide essential personal care and household assistance. Their responsibilities include helping with bathing, toileting, and dressing, as well as meal preparation, laundry, running errands, and assisting with prescribed exercise routines.",
    answerText: "CHHHAs provide essential personal care and household assistance. Their responsibilities include helping with bathing, toileting, and dressing, as well as meal preparation, laundry, running errands, and assisting with prescribed exercise routines."
  },
  {
    question: "How does the certified homemaker-home health aide know what to do?",
    answer: "To ensure high-quality care, a Registered Professional Nurse (RN) assesses the patient’s specific needs and designs a personalized plan of care. The CHHHA follows this professional roadmap to deliver targeted support.",
    answerText: "To ensure high-quality care, a Registered Professional Nurse (RN) assesses the patient’s specific needs and designs a personalized plan of care. The CHHHA follows this professional roadmap to deliver targeted support."
  },
  {
    question: "How do I know if a homemaker-home health aide is certified?",
    answer: (
      <div className="space-y-4 text-sm">
        <p>All CHHHAs are supervised by the NJ Board of Nursing. Certification requires completing a formal training program, passing a competency evaluation, and a thorough criminal history background check.</p>
        <div className="border-s border-s-4 border-s-emerald-800 p-6 rounded-lg bg-primary/5 space-y-1">
          <p>Verification Resources:</p>
          <ul className="list-disc ms-6">
            <li>Call the Board of Nursing at <span className="font-semibold">973-504-6546</span></li>
          </ul>
        </div>
      </div>
    ),
    answerText: "In New Jersey, homemaker-home health aides fall under the supervision of the New Jersey Board of Nursing and are certified only after successfully completing a required training program, a competency evaluation and a criminal history background check. Check the On-line directory of certified homemaker-home health aides to ensure the person you are considering hiring is a certified CHHHA. You may call the Board of Nursing at (973) 504-6546 to check the certification status of a CHHA."
  },
  {
    question: "How can I find a homemaker-home health aide to assist my family?",
    answer: "By New Jersey law, CHHHAs must be employed by a NJ-licensed health care services firm or home health agency. They are strictly prohibited from working privately for families or patients without agency employment.",
    answerText: "By New Jersey law, CHHHAs must be employed by a NJ-licensed health care services firm or home health agency. They are strictly prohibited from working privately for families or patients without agency employment."
  },
  {
    question: "What NJ government agency regulates Health Care Services Firms?",
    answer: (
      <p>
        The <Link target="_blank" href="http://www.njconsumeraffairs.gov/ocp.htm" className="text-primary hover:underline underline-offset-4">Division of Consumer Affairs’ Regulated Business Section</Link> oversees the licensing and standards of firms that employ CHHHAs.
      </p>
    ),
    answerText: "The Division of Consumers Affairs’ Regulated Business Section regulates Health Care Service Firms in NJ. CHHHAs may not work independently. They must be employed by a health care service firm and be under the supervision of an RN. (http://www.njconsumeraffairs.gov/ocp.htm)"
  },
  {
    question: "What NJ government agency regulates CHHHAs?",
    answer: (
      <p>The <Link target="_blank" href="http://njconsumersaffairs.gov/medical/nursing.htm" className="text-primary hover:underline underline-offset-4">NJ Board of Nursing</Link> is the primary regulatory body responsible for the certification and conduct of CHHHAs.</p>
    ),
    answerText: "The New Jersey Board of Nursing regulates certified homemaker-home health aides. (http://njconsumersaffairs.gov/medical/nursing.htm)"
  },
  {
    question: "Who regulates residential healthcare facilities and assisted living?",
    answer: (
      <p>The <Link target="_blank" href="http://www.state.nj.us/health/ltc/cgi/facilitysearch.htm" className="text-primary hover:underline underline-offset-4">NJ Department of Health and Senior Services</Link> regulates residential healthcare facilities, assisted living residences, assisted living programs, and alternate family care providers.</p>
    ),
    answerText: "The NJ Department of Health and Senior Services licenses and/or regulates nursing homes and other long-term care settings and programs. (http://www.state.nj.us/health/ltc/cgi/facilitysearch.htm)"
  },
]

export default function FaqPage() {
  return (
    <>

      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/FAQPage" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="flex justify-center items-center">

          <div className="w-2xl space-y-6">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">frequently asked questions</p>
            <h1 id="hero-heading" itemProp="name" className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope text-black">Certified Homemaker-Home Health Aides (CHHHAs)</h1>
            <h2 className="text-center text-xl sm:text-2xl font-manrope font-bold text-primary">Frequently Asked Questions (FAQ&apos;s)</h2>
            <p itemProp="description" className="text-center">Clear answers to help you navigate professional home care services in New Jersey with confidence and peace of mind.</p>
          </div>

        </div>
      </section>

      {/* Questions and answers section */}
      <section id="questions-and-answers" aria-labelledby="questions-and-answers-heading" className="my-24 py-12">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <h2 id="questions-and-answers-heading" className="sr-only">Questions and Answers</h2>

          <div className="flex flex-col gap-4" itemScope itemType="https://schema.org/FAQPage">
            {questionsAndAnswers.map((item, index) => (
              <div key={`accordion-item-${index}`} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <meta itemProp="name" content={item.question} />
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <meta itemProp="text" content={item.answerText} />
                </div>
                <Accordion heading={item.question}>{item.answer}</Accordion>
              </div>
            ))}
          </div>

        </div>
      </section>
    
    </>
  )
}