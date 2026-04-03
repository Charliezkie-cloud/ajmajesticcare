import Badge from "@/components/ui/Badge"
import { LuBadgeCheck, LuContactRound, LuFingerprint, LuGlobe, LuGraduationCap, LuShieldCheck, LuUsers } from "react-icons/lu"

const values = [
  {
    icon: <LuFingerprint className="text-primary size-6" />,
    title: "Individuality",
    body: "Each client is special, with unique personalities and specific preferences. Majestic Care will take these factors into consideration when matching CHHA availability."
  },
  {
    icon: <LuContactRound className="text-primary size-6" />,
    title: "24/7 Commitment",
    body: "Nursing Services are a 24/7 commitment. An on-call staffer will always be available to address concerns related to your care."
  },
  {
    icon: <LuShieldCheck className="text-primary size-6" />,
    title: "Safety & Security",
    body: "Safety & Security of our clients is our priority. Majestic Care conducts employment screening on all applicants prior to employment, including references and background checks."
  },
  {
    icon: <LuBadgeCheck className="text-primary size-6" />,
    title: "Integrity",
    body: "A & J Majestic Care is Licensed, Registered, Insured and Bonded. Our professionals are skilled in specialized care including Alzheimer’s, dementia, and stroke recovery.",
    badges: ["Licensed", "Insured", "Bonded"]
  },
];

const coreValues = [
  {
    icon: <LuUsers className="text-primary size-6" />,
    title: "Participation",
    body: "Participation of family caregivers and clients in creating their customized Plan of Care with their RN provider is encouraged."
  },
  {
    icon: <LuContactRound className="text-primary size-6" />,
    title: "Responsibility",
    body: "Employees receive competency and performance training. All CHHAs are supervised by an RN to ensure the highest standards."
  },
  {
    icon: <LuGraduationCap className="text-primary size-6" />,
    title: "Educational Services",
    body: "Educational Services for our clients and family. We strive to educate through social media and in-service training."
  },
  {
    icon: <LuGlobe className="text-primary size-6" />,
    title: "Diversity",
    body: "We believe health care is universal. We offer variety in programs and payment options, accepting Private Pay and Insurance."
  },
]

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

      {/* Values section */}
      <section id="values" aria-labelledby="values-heading" className="my-24 py-12">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <h2 id="values-heading" className="sr-only">Our Core Values</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4">

            {values.map((item, index) => (
              <article
                key={`value-item-${index}`}
                itemScope
                itemType="https://schema.org/Thing"
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-4"
              >
                <div className="flex items-center">
                  <div className="p-4 bg-primary/5 rounded-xl" aria-hidden="true">{item.icon}</div>
                </div>
                <h3 itemProp="name" className="font-manrope font-bold text-black text-2xl">{item.title}</h3>
                <p itemProp="description">{item.body}</p>

                {item.badges ? (
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3" role="list" aria-label={`${item.title} highlights`}>

                    {item.badges.map((badge, badgeIndex) => (
                      <Badge key={`value-item-${index}-badge-${badgeIndex}`} role="listitem" variant="secondary" size="sm" className="font-semibold">{badge}</Badge>
                    ))}

                  </div>
                ) : <></>}

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Core values section */}
      <section id="core-values" aria-labelledby="core-values-heading" className="py-12">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <h2 id="core-values-heading" className="sr-only">Our Core Values</h2>

          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row gap-6">

            {coreValues.map((item, index) => (
              <article
                key={`core-value-item-${index}`}
                itemScope
                itemType="https://schema.org/Thing"
                className="space-y-4"
              >
                <div aria-hidden="true">{item.icon}</div>
                <h3 itemProp="name" className="font-manrope font-bold text-black">{item.title}</h3>
                <p itemProp="description">{item.body}</p>
              </article>
            ))}

          </div>

        </div>
      </section>

    </>
  )
}