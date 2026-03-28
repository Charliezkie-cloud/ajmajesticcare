import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { LuClock, LuMail, LuPhone } from "react-icons/lu";

import Link from "next/link";

const data = {
  facebookLink: "https://www.facebook.com/",
  linkedInLink: "https://linkedin.com/",
  phoneNumber: "(732) 844-9021",
  schedule: "Monday to Friday 9 AM to 5 PM",
  email: "almz1majesticcare@gmail.com"
};

const linkClass = "uppercase tracking-wider font-semibold inline-flex items-center gap-2"
const spanClass = "tracking-wider font-semibold inline-flex items-center gap-2"

export default function UtilityBar() {
  return (
    <div className="bg-primary text-white py-3 text-xs">
      <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">

          <nav aria-label="Social media links" className="flex justify-center">
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-6 list-none">
              <li>
                <Link href={data.facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className={linkClass}>
                  <FaFacebook className="size-5" aria-hidden="true" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link href={data.linkedInLink} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className={linkClass}>
                  <FaLinkedin className="size-5" aria-hidden="true" />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </nav>

          <address className="not-italic flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-6">
            <a href={`tel:${data.phoneNumber}`} aria-label={`Call us at ${data.phoneNumber}`} className={linkClass}>
              <LuPhone className="size-5" aria-hidden="true" />
              {data.phoneNumber}
            </a>
            <span className={spanClass}>
              <LuClock className="size-5" aria-hidden="true" />
              {data.schedule}
            </span>
            <a href={`mailto:${data.email}`} aria-label={`Email us at ${data.email}`} className={spanClass}>
              <LuMail className="size-5" aria-hidden="true" />
              {data.email}
            </a>
          </address>

        </div>
      </div>
    </div>
  )
}