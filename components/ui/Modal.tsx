"use client"

import { useEffect } from "react";
import { ReactNode } from "react"
import { LuX } from "react-icons/lu";

type props = {
  show?: boolean;
  title?: string;
  size?: "sm" | "md" | "lg";
  closeOnBackdrop?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-2xl",
  lg: "max-w-4xl",
}

export default function Modal({ show = false, title, size = "md", closeOnBackdrop = true, onClose, children }: props) {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", show);
    return () => document.body.classList.remove("overflow-hidden");
  }, [show]);

  return (
    <div className={`fixed z-50 inset-0 transition duration-300 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

      <div onClick={closeOnBackdrop ? onClose : undefined} className={`fixed inset-0 bg-black/40 transition-all duration-300 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />

      <div className="flex items-center justify-center w-full h-full px-4">
        <div className={`relative w-full ${sizeMap[size]} bg-white shadow-2xl rounded-2xl transition duration-300 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

          <button onClick={onClose} className="absolute top-4 right-4 transition hover:bg-gray-100 active:bg-gray-200 p-2 rounded-xl">
            <LuX className="size-5 text-gray-500" />
          </button>

          <div className="p-6">
            {title && <h2 className="font-manrope font-bold text-2xl text-black mb-5">{title}</h2>}
            {children}
          </div>

        </div>
      </div>

    </div>
  )
}