import { LuBriefcaseBusiness, LuContact, LuHouse, LuNotebookPen, LuPowerOff } from "react-icons/lu";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import Button from "../ui/Button";

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
  const pathname = usePathname();

  return (
    <aside className="w-70 bg-white flex flex-col">
      {/* Header */}
      <div className="p-8">
        <Image src={Logo} alt="Logo" />
      </div>
      
      {/* Body */}
      <div className="p-8">
        <ul className="flex flex-col gap-2">
          
          {links.map((link, index) => {
            const isActive = pathname === link.href
            
            return (
              <li key={`link-item-${index}`} className={`${isActive ? "text-primary bg-gray-100" : ""} hover:bg-gray-100 rounded-xl font-semibold px-3 py-2`}>
                <Link href={link.href} className="flex flex-row gap-2 items-center">{link.icon} {link.title}</Link>
              </li>
            )
          })}

        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-t-gray-200">
        <Button className="w-full flex items-center gap-2 opacity-75" variant="ghost" size="auto" onClick={onSignOut}>
          <LuPowerOff className="size-5" /> Logout
        </Button>
      </div>
    </aside>
  )
}