import { LuArrowRight, LuBadgeCheck } from "react-icons/lu";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/hero-image.jpg";
import CAHC from "@/public/CAHC.png";

import ElderIcon from "@/public/icons/elder-icon.svg";
import MedicalIcon from "@/public/icons/medical-icon.svg";
import EducationIcon from "@/public/icons/education-icon.svg";
import FocusIcon from "@/public/icons/focus-icon.svg";

const services = [
  {
    icon: ElderIcon,
    heading: "Personal Care Needs",
    body: "Assistance with daily living activities while maintaining independence and comfort. (Bathing, grooming, personal hygiene, meal prep, and errands).",
    badges: ["Daily Support"]
  },
  {
    icon: MedicalIcon,
    heading: "Support & Coverage",
    body: "Flexible care options including companion and sitter services, live-in/out care, hospital bedside support, and respite care for families.",
  },
  {
    icon: EducationIcon,
    heading: "Educational Resources",
    body: "Expert guidance on fall prevention, medication safety, infection control, and client rights through professional consultation.",
  },
  {
    icon: FocusIcon,
    heading: "Specialized Focus",
    body: "Dedicated care for Alzheimer's, Dementia, ALS, Cancer, Stroke, and developmental disabilities with a focus on dignity.",
  }
];

export default async function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
        <div className="space-y-6">
          <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Inspired to care the majestic way</p>

          <div className="space-y-8 sm:space-y-10">
            <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope sm:space-y-3">
              <span className="block text-black">Providing quality home care with</span>
              <span className="block text-black"><span className="text-primary font-ireland">love and compassion</span> by</span>
              <span className="block text-black">experienced professionals.</span>
            </h1>

            <p className="text-center">Informed clients and caregivers make better decisions.</p>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
              <Button size="auto" className="w-full sm:w-auto">Download Brochure</Button>
              <Button variant="outlined" size="auto" className="inline-flex justify-center items-center gap-2 w-full sm:w-auto">
                Get Your Free Consultation <LuArrowRight className="size-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="flex justify-center items-center">
                <Image src={HeroImage} alt="Professional home caregiver providing compassionate care to a client" className="rounded-xl shadow shadow-xl" />
              </div>
              <div className="absolute -bottom-10 right-0 bg-gray-100 shadow shadow-xl rounded-xl p-3 inline-flex justify-content items-center gap-4 text-xs sm:text-sm">
                <LuBadgeCheck className="bg-secondary text-gray-800/75 rounded-full size-12 p-2" />
                <div>
                  <p className="font-medium">Certified Care</p>
                  <p className="opacity-75">Vetted Professionals Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate section */}
      <section style={{ background: "#F5F2FF" }} className="my-24 py-12">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            <Image src={CAHC} alt="Accreditation Commission for Health Care Certificate" className="h-[150px] w-auto" />
            <div className="space-y-3">
              <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">Recognized and accredited by</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-black">Accredited by the Commission on Accreditation for Homecare</h1>
              <p>As a member of CAHC we ensure that our agency delivers high-quality home care service by operating under the state of New Jersey’s regulations and guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section>
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
          <div className="space-y-3 sm:space-y-6">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs brightness-50">Recognized and accredited by</p>
            <h1 className="text-2xl sm:text-5xl font-semibold text-black">Services Tailored to Life</h1>
            
            <div className="flex flex-col gap-6">
              <div className="flex justify-end items-center">
                <Link href="/services" className="transition hover:underline hover:underline-offset-8 text-primary font-semibold inline-flex justify-center items-center gap-1">Explore All Services <LuArrowRight className="size-5" /></Link>
              </div>
              <div className="grid grid-rows-4 grid-cols-0 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-none lg:grid-cols-4 gap-4">
              
                {services.map((service, index) => (
                  <div key={`service-item-${index}`} className="bg-white space-y-6 p-6 rounded-xl">
                    <Image src={service.icon} alt={service.heading} />
                    <h2 className="text-black text-xl sm:text-2xl font-semibold">{service.heading}</h2>
                    <p>{service.body}</p>
                    <div>  
                      {service.badges?.map((badge, index) => (
                        <span key={`service-badge-item-${index}`} className="text-foreground bg-secondary/50 p-2 rounded-full px-6 text-xs font-bold">{badge}</span>
                      ))}
                    </div>
                  </div>
                ))}
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}