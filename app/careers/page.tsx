import { LuDownload } from "react-icons/lu";

import Link from "next/link";

import Button from "@/components/ui/Button";
import CareersForm from "@/components/forms/CareersForm";

// ========== APPLICATION FORM PATH ==========

const applicationFormPath = "/CHHACNA-Application-Form.pdf";

// ========== APPLICATION FORM PATH ==========

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
          <Button download href={applicationFormPath} size="auto" className="w-full font-semibold flex justify-center items-center gap-2">
            <LuDownload className="size-5" /> Click Here for the CHAA/CNA Application Form
          </Button>
        </div>
      </section>

      {/* Interest form */}
      <section id="form" aria-labelledby="form-heading" className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto my-12 py-12">
        <div className="flex items-center justify-center">
          <CareersForm />
        </div>
      </section>

    </>
  );
}
