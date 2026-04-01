import { LuMapPin, LuPhone } from "react-icons/lu";

import GoogleMap from "@/components/ui/GoogleMap";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

const contacts = [
  {
    icon: (
      <div className="bg-secondary/15 rounded-2xl p-4">
        <LuMapPin className="text-secondary text-2xl" />
      </div>
    ),
    title: "Our location",
    titleColor: "text-secondary",
    informations: [process.env.NEXT_PUBLIC_LOCATION],
  },
  {
    icon: (
      <div className="bg-primary/15 rounded-2xl p-4">
        <LuPhone className="text-primary text-2xl" />
      </div>
    ),
    title: "Contact Details",
    titleColor: "text-primary",
    informations: [
      `Phone: ${process.env.NEXT_PUBLIC_PHONE}`,
      `Fax: ${process.env.NEXT_PUBLIC_FAX}`
    ],
    extras: ["RN Representatives available 24/7", "Office Hours: 9:00am-5:00pm (M-F)"]
  },
  {
    icon: (
      <div className="bg-tertiary/15 rounded-2xl p-4">
        <LuPhone className="text-tertiary text-2xl" />
      </div>
    ),
    title: "Email Support",
    titleColor: "text-tertiary",
    informations: [process.env.NEXT_PUBLIC_EMAIL_SUPPORT],
  },
];

export default function ContactPage() {
  return (
    <>

      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="w-full flex justify-center items-center">
          <div className="space-y-6 max-w-lg">
            <p className="text-tertiary uppercase font-bold tracking-widest text-xs text-center brightness-50">Get in touch</p>
            <h1 id="hero-heading" itemProp="name" className="text-black text-center text-2xl sm:text-4xl md:text-5xl font-extrabold font-manrope">Always Here For <span className="text-primary">You.</span></h1>
            <p itemProp="description" className="text-center">
              Whether you have questions about our specialized nursing care or need immediate assistance, our team ready to provide the compassionate support your family deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto my-12 py-12" aria-labelledby="contact-heading" itemScope itemType="https://schema.org/ContactPage">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">

          <div className="bg-white p-4 sm:p-8 md:p-12 rounded-2xl shadow shadow-xl space-y-6 col-span-2">
            <form className="space-y-6" aria-label="Contact form">
              <h2 id="contact-heading" className="text-black font-manrope font-bold text-xl sm:text-3xl mb-6">Send a Message</h2>

              <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="flex flex-col gap-2 md:w-full">
                  <label htmlFor="full_name" className="font-semibold">Full Name</label>
                  <Input id="full_name" name="full_name" type="text" placeholder="Jane Doe" autoComplete="name" required />
                </div>
                <div className="flex flex-col gap-2 md:w-full">
                  <label htmlFor="phone_number" className="font-semibold">Phone Number</label>
                  <Input id="phone_number" name="phone_number" type="text" placeholder="(555) 000-0000" autoComplete="tel" required />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="flex flex-col gap-2 md:w-full">
                  <label htmlFor="email_address" className="font-semibold">Email Address</label>
                  <Input id="email_address" name="email_address" type="email" placeholder="jane@example.com" autoComplete="email" required />
                </div>
                <div className="flex flex-col gap-2 md:w-full">
                  <label htmlFor="zip_code" className="font-semibold">Zip Code</label>
                  <Input id="zip_code" name="zip_code" type="number" placeholder="0000" autoComplete="postal-code" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="comments" className="font-semibold">Extra comments/info you would like for us to know</label>
                <Textarea id="comments" name="comments" placeholder="Tell us more about your needs..." rows={4}></Textarea>
              </div>

              <div className="flex justify-center items-center w-full">
                <Button type="submit" className="w-full font-bold">Send Message</Button>
              </div>

            </form>
            <p className="text-primary text-center font-semibold text-sm">Contact now for free consultation!</p>
          </div>

          <address className="space-y-6 not-italic" itemScope itemType="https://schema.org/LocalBusiness">

            {contacts.map((contact, index) => (

              <div key={`contact-item-${index}`} className="flex flex-row gap-4 items-start justify-start">
                {contact.icon}
                <div className="space-y-2 text-sm">
                  <h3 className={`tracking-wider uppercase brightness-75 font-bold ${contact.titleColor}`}>{contact.title}</h3>

                  <div className="space-y-1">
                    {contact.informations.map((info, infoIndex) => (
                      <p key={`contact-item-info-${infoIndex}`} className="text-black">{info}</p>
                    ))}
                  </div>

                  <div className="space-y-1">
                    {contact.extras?.map((extra, extraIndex) => (
                      <p key={`contact-item-extra-${extraIndex}`} className="text-xs opacity-75">{extra}</p>
                    ))}
                  </div>
                </div>
              </div>

            ))}

            <div className="relative mt-12">
              <div className="absolute size-25 rounded-full bg-gray-500/15 -z-10 -top-8 -left-5" />
              <GoogleMap />
            </div>

          </address>

        </div>
      </section>

    </>
  )
}