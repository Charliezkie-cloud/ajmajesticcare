"use client"

import { LuChevronDown, LuDot, LuX, LuMenu } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useState, useEffect, startTransition } from "react";

import Link from "next/link";
import Logo from "@/public/logo-edited.png";
import Image from "next/image";
import Button from "../ui/Button";

const links = [
  {
    href: "/",
    label: "Home"
  },
  {
    label: "About Us",
    href: "/about-us",
    dropdown: [
      { label: "Who are we?", href: "/who-are-we" },
      { label: "What do we do?", href: "/what-do-we-do" },
      { label: "Inspired", href: "/inspired" },
      { label: "FAQ", href: "/faq" },
    ]
  },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
  { href: "/reviews", label: "Reviews" }
]

export default function Navbar() {
  const pathname = usePathname();
  const [offcanvas, setOffcanvas] = useState(false);

  function toggleOffcanvas() { setOffcanvas(prev => !prev) }

  useEffect(() => {
    startTransition(() => setOffcanvas(false));
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = offcanvas ? "hidden" : "";
    return () => { document.body.style.overflow = "" };
  }, [offcanvas]);

  return (
    <>
      <nav aria-label="Main navigation" className="bg-gray-100/75 border-b border-b-gray-200 backdrop-blur-xl py-6">
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto flex flex-row md:flex-col lg:flex-row justify-between items-center gap-6 lg:gap-2">
          <Link href="/" aria-label="Go to homepage">
            <Image src={Logo} className="h-[40px] w-auto" alt="A & J Majestic Care" priority />
          </Link>

          <ul className="hidden md:inline-flex justify-center items-center gap-6 text-nowrap text-sm" role="list">
            {links.map((item, index) => {
              const isActive = pathname === item.href;

              if (!item.dropdown)
                return (
                  <li key={`link-item-${index}`}>
                    <Link href={item.href} aria-current={isActive ? "page" : undefined} className={`transition ${isActive ? "text-primary underline underline-offset-6" : ""} hover:text-secondary`}>
                      {item.label}
                    </Link>
                  </li>
                )

              return (
                <li key={`link-item-${index}`} className="relative group">
                  <Link href={item.href} aria-haspopup="true" aria-current={isActive ? "page" : undefined} className="inline-flex items-center justify-center gap-1 transition hover:text-secondary">
                    {item.label} <LuChevronDown className="size-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
                  </Link>

                  <ul role="menu" className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown?.map((sub) => {
                      const isSubActive = pathname === sub.href;

                      return (
                        <li key={sub.label} role="menuitem">
                          <Link href={sub.href} aria-current={isSubActive ? "page" : undefined} className={`block px-4 py-2 text-sm hover:bg-gray-100 hover:text-secondary ${isSubActive ? "text-primary underline underline-offset-8" : ""} transition`}>
                            {sub.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>

          <Button size="sm" variant="primary" className="hidden md:block">Book Consultation</Button>

          <button aria-label={offcanvas ? "Close menu" : "Open menu"} aria-expanded={offcanvas} aria-controls="mobile-menu" className="block md:hidden px-4 py-2" onClick={toggleOffcanvas}>
            <LuMenu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div aria-hidden="true" onClick={toggleOffcanvas} className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${offcanvas ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />

      {/* Mobile offcanvas */}
      <aside id="mobile-menu" aria-label="Mobile navigation" aria-hidden={!offcanvas} className={`fixed top-0 bottom-0 left-0 z-50 w-[min(80vw,24rem)] bg-white border-e border-e-gray-200 transition-transform duration-300 ease-in-out md:hidden ${offcanvas ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="bg-gray-100/75 border-b border-b-gray-200 p-4 space-y-4">
          <div className="flex items-center justify-end w-full">
            <button onClick={toggleOffcanvas} aria-label="Close menu" className="p-1 rounded-md hover:bg-gray-200 transition">
              <LuX className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="px-4 py-2 flex justify-center items-center">
            <Link href="/" aria-label="Go to homepage">
              <Image src={Logo} className="h-[40px] w-auto" alt="A & J Majestic Care" />
            </Link>
          </div>
        </div>

        <div className="p-8">
          <ul className="flex flex-col justify-center items-start gap-6 text-nowrap text-sm" role="list">
            {links.map((item, index) => {
              const isActive = pathname === item.href;

              if (!item.dropdown)
                return (
                  <li key={`link-item-${index}`}>
                    <Link href={item.href} aria-current={isActive ? "page" : undefined} className={`transition ${isActive ? "text-primary underline underline-offset-6" : ""}`}>
                      {item.label}
                    </Link>
                  </li>
                )

              return (
                <li key={`link-item-${index}`} className="space-y-4">
                  <Link href={item.href} aria-current={isActive ? "page" : undefined} className={`inline-flex items-center justify-center gap-1 ${isActive ? "text-primary underline underline-offset-8" : ""}`}>
                    {item.label} <LuChevronDown className="size-4" aria-hidden="true" />
                  </Link>

                  <ul role="list">
                    {item.dropdown?.map((sub) => {
                      const isSubActive = pathname === sub.href;

                      return (
                        <li key={sub.label}>
                          <Link href={sub.href} aria-current={isSubActive ? "page" : undefined} className={`inline-flex justify-center items-center gap-1 px-4 py-2 text-sm ${isSubActive ? "text-primary underline underline-offset-8" : ""}`}>
                            <LuDot className="size-5" aria-hidden="true" /> {sub.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}