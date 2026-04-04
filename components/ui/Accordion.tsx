"use client"

import { ReactNode, useRef, useState } from "react"
import { LuChevronDown } from "react-icons/lu"

type props = {
  heading?: string;
  children?: ReactNode;
}

export default function Accordion({ heading, children }: props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggleAccordion() { setOpen(!open); }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl space-y-2">
      <div className="flex items-center justify-center">
        <h3 className="font-manrope font-bold text-black text-lg sm:text-xl">{heading}</h3>
        <button
          className="ms-auto"
          onClick={toggleAccordion}
          aria-expanded={open}
          aria-controls={`accordion-body-${heading}`}
        >
          <LuChevronDown aria-hidden="true" className={`size-6 transition-all duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
        </button>
      </div>
      <div
        id={`accordion-body-${heading}`}
        role="region"
        aria-labelledby={`accordion-heading-${heading}`}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div ref={contentRef} className="p-4">
          {children}
        </div>
      </div>
    </div>
  )
}