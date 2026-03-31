import { LuDownload, LuFileUser } from "react-icons/lu";

import Link from "next/link";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

export default function CareersPage() {
  return (
    <>
    
      {/* Hero section */}
      <section id="hero" aria-labelledby="hero-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-4 sm:py-8 md:py-12 lg:py-16 flex items-center justify-center">
        <div className="max-w-xl space-y-6">
          <h1 id="hero-heading" className="text-center">
            If you are interested in becoming a CHHA/CNA with us, please download the form below and send it to us at
            <Link className="text-primary font-semibold" href="mailto:almz1majesticcare@gmail.com"> almz1majesticcare@gmail.com</Link>!
            We look forward to hearing from you.
          </h1>
          <Button size="auto" className="w-full font-semibold flex justify-center items-center gap-2">
            <LuDownload className="size-5" /> Click Here for the CHAA/CNA Application Form
          </Button>
        </div>
      </section>

      {/* Interest form */}
      <section id="form" aria-labelledby="form-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto my-12 py-12">
        <div className="flex items-center justify-center">

          <form aria-labelledby="form-heading" className="space-y-6 bg-white shadow shadow-2xl rounded-2xl p-4 sm:p-8 md:p-12 w-4xl">

            <div className="flex flex-col items-center justify-center gap-6">
              <LuFileUser className="size-14 text-primary" />
              <h2 id="form-heading" className="text-xl sm:text-4xl font-manrope text-black font-bold">Start Your Journey</h2>
              <p className="text-center">Please fill out this interest form and we will be in contact with you soon.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-2">
              <div className="sm:w-full flex flex-col gap-2">
                <label htmlFor="full_name" className="font-semibold">Full Name</label>
                <Input id="full_name" type="text" name="full_name" autoComplete="name" placeholder="Your full name" required />
              </div>
              <div className="sm:w-full flex flex-col gap-2">
                <label htmlFor="phone_number" className="font-semibold">Phone Number</label>
                <Input id="phone_number" type="tel" name="phone_number" autoComplete="tel" placeholder="(555) 000-0000" required />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-2">
              <div className="sm:w-full flex flex-col gap-2">
                <label htmlFor="email_address" className="font-semibold">Email Address</label>
                <Input id="email_address" type="email" name="email_address" autoComplete="email" placeholder="email@example.com" required />
              </div>
              <div className="sm:w-full flex flex-col gap-2">
                <label htmlFor="address" className="font-semibold">Address</label>
                <Input id="address" type="text" name="address" autoComplete="street-address" placeholder="Street, City, State, Zip" required />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="experience" className="font-semibold">Experience</label>
              <Textarea id="experience" name="experience" placeholder="Tell us about your relevant work experience and background" rows={6} required></Textarea>
            </div>
            
            <Button type="submit" className="font-semibold w-full">Submit Interest Form</Button>

          </form>

        </div>
      </section>

    </>
  )
}