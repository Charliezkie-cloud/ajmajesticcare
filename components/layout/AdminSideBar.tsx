import { LuBriefcaseBusiness, LuContact, LuHouse, LuMenu, LuNotebookPen, LuPowerOff, LuSettings, LuX } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import Button from "../ui/Button";

import useIsMobile from "../hooks/useIsMobile";

type props = {
  onSignOut?: () => void;
}

const links = [
  {
    title: "Home",
    href: "/admin",
    icon: <LuHouse className="size-5" />
  },
  {
    title: "Contacts",
    href: "/admin/contacts",
    icon: <LuContact className="size-5" />
  },
  {
    title: "Careers",
    href: "/admin/careers",
    icon: <LuBriefcaseBusiness className="size-5" />
  },
  {
    title: "Reviews",
    href: "/admin/reviews",
    icon: <LuNotebookPen className="size-5" />
  }
]

export default function AdminSideBar({ onSignOut }: props) {
  const { isMobile } = useIsMobile();
  const pathname = usePathname();

  const [offcanvas, setOffcanvas] = useState(false);

  function toggleOffcanvas() {
    setOffcanvas(prev => !prev);
  }

  useEffect(() => {
    function openOffcanvas() {
      setOffcanvas(true);
    }

    function closeOffcanvas() {
      setOffcanvas(false);
    }

    if (isMobile)
      closeOffcanvas();
    else
      openOffcanvas();
  }, [isMobile]);

  return (
    <div>
      <nav className="bg-white md:hidden">
        <div className="max-w-7xl mx-auto py-4 px-6 grid grid-cols-2">
          <div className="flex items-center">
            <Link href={`/admin`} className="text-md sm:text-lg text-tertiary brightness-75 font-bold font-manrope">Management Console</Link>
          </div>
          <div className="flex items-center justify-end">
            <button onClick={toggleOffcanvas}>
              <LuMenu className="size-5" />
            </button>
          </div>
        </div>
      </nav>

      <div onClick={toggleOffcanvas} className={`${isMobile ? "fixed" : "hidden"} z-40 left-0 right-0 top-0 bottom-0 bg-black/15 backdrop-blur-sm transition duration-300 ${offcanvas ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />

      <aside className={`w-76 bg-white ${isMobile ? "fixed" : "block"} z-50 left-0 right-0 top-0 bottom-0 transition duration-300 ${offcanvas ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col min-h-screen">
          <div className="p-4 flex justify-end items-center block md:hidden">
            <button onClick={toggleOffcanvas}>
              <LuX className="size-6" />
            </button>
          </div>

          {/* Header */}
          <div className="p-4 px-8 sm:p-8">
            <Image src={Logo} alt="Logo" />
          </div>

          {/* Body */}
          <div className="p-4 sm:p-8">
            <ul className="flex flex-col gap-2">

              {links.map((link, index) => {
                const isActive = pathname === link.href

                return (
                  <li key={`link-item-${index}`} onClick={toggleOffcanvas} className={`${isActive ? "text-primary bg-gray-100" : ""} text-sm md:text-base hover:bg-gray-100 rounded-xl font-semibold px-3 py-2`}>
                    <Link href={link.href} className="flex flex-row gap-2 items-center">{link.icon} {link.title}</Link>
                  </li>
                )
              })}

            </ul>
          </div>

          {/* Footer */}
          <div className="mt-auto p-4 border-t border-t-gray-200">
            <div onClick={toggleOffcanvas}>
              <Button className="w-full flex items-center gap-2 opacity-75" variant="ghost" size="auto" href="/admin/settings">
                <LuSettings className="size-5" /> Settings
              </Button>
            </div>
            <div onClick={toggleOffcanvas}>
              <Button className="w-full flex items-center gap-2 opacity-75" variant="ghost" size="auto" onClick={onSignOut}>
                <LuPowerOff className="size-5" /> Logout
              </Button>
            </div>
          </div>
        </div>
      </aside>

    </div>
  )
}