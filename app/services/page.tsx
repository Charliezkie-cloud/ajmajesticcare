import { LuCircleCheck } from "react-icons/lu";

import Image from "next/image";
import FinalCTASection from "@/components/layout/FinalCTASection";

import PersonalCareIcon from "@/public/icons/personal-care-icon.svg";
import SupportIcon from "@/public/icons/support-icon.svg";
import EducationIcon from "@/public/icons/education-service-icon.svg";
import FocusIcon from "@/public/icons/areas-of-focus-icon.svg";
import Badge from "@/components/ui/Badge";

const services = [
  {
    icon: PersonalCareIcon,
    title: "Personal Care Needs",
    badges: ["Daily Assistance", "Hygiene", "Mobility"],
    items: [
      "Bathing",
      "Dressing",
      "Toileting",
      "Transferring",
      "Assistance with ambulation",
      "Grooming and other aspects of personal hygiene",
      "Personal meal Preparation",
      "Feeding",
      "Light Laundering for the patient",
      "Tidying the patients room",
      "Exercise regimens",
      "Errands",
      "Other Activities of Daily Living",
      "Transportation",
    ]
  },
  {
    icon: SupportIcon,
    title: "Support Care/Coverage",
    badges: ["Flexible Scheduling", "Campanion Care"],
    items: [
      "Companion Services",
      "Sitter Services",
      "Hourly Services",
      "Daily/Weekly",
      "Live-In/Live-Out Services",
      "Hospital/Nursing Home Bedside Services",
      "Respite Care for Family Caregivers",
    ]
  },
  {
    icon: EducationIcon,
    title: "Educational Services",
    badges: ["Preventative Care", "Rights & Safety"],
    items: [
      "Fall Prevention/Aspiration Precautions",
      "Right Medication",
      "CHHA 101",
      "Your Rights as a Client",
      "Infection Control",
      "Assessment and Consultation",
    ]
  },
  {
    icon: FocusIcon,
    title: "Specialized Areas of Focus",
    description: "Dedicated expertise for complex conditions requiring specialized clinical and emotional support.",
    items: [
      "Alzheimer’s and Dementia",
      "Failure to thrive/Debility",
      "ALS",
      "Cancer",
      "MS",
      "Stroke",
      "End of Life Crisis",
      "Developmental Disabilities",
      "Other Disabling Disorder",
    ]
  },
];

export default function ServicesPage() {
  return (
    <>
    
      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/Service" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="flex w-full items-center justify-center">
          <div className="space-y-6 max-w-lg">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Our comprehensive care</p>
            <h1 id="hero-heading" itemProp="name" className="text-black text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope">Dedicated Support For Your Loved Ones</h1>
            <p itemProp="description" className="text-center">
              We provide professional, compassionate home care services tailored to meet the unique needs of every client.
              {" "}<q itemProp="slogan" className="text-primary">Inspired to care the majestic way</q>
            </p>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="my-12 py-12" aria-label="Services">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">

          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-6">

            {services.map((item, index) => (
              <div key={`services-item-${index}`} className="bg-[#F5F2FF] relative overflow-hidden space-y-6 p-8 rounded-2xl" itemScope itemType="https://schema.org/Service">
                <div className="absolute -bottom-30 -right-20 size-50 bg-primary/5 rounded-full" aria-hidden="true" />

                <Image src={item.icon} alt={item.title} className="bg-primary/10 size-13 p-3 rounded-xl" />
                <h2 className="text-xl sm:text-2xl text-black font-manrope font-bold" itemProp="name">{item.title}</h2>

                {item.description ? (
                  <p itemProp="description">{item.description}</p>
                ) : <></>}

                <div className="flex flex-wrap gap-2">

                  {item.badges?.map((badge, badgeIndex) => (
                    <Badge key={`services-item-${index}-badge-${badgeIndex}`} variant="neutral" size="sm">{badge}</Badge>
                  ))}

                </div>
                <ul className="list-none space-y-2">

                  {item.items.map((service, serviceItemIndex) => (
                    <li key={`services-item-${index}-item-${serviceItemIndex}`} className="">
                      <div className="inline-flex gap-2 items-center justify-center text-sm sm:text-md">
                        <LuCircleCheck className="size-5 text-primary" />
                        {service}
                      </div>
                    </li>
                  ))}

                </ul>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTASection />

    </>
  )
}