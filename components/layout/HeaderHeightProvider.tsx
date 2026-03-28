"use client"

import { useEffect, useRef } from "react"

export default function HeaderHeightProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-height", `${el.offsetHeight}px`)
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={ref} className="fixed top-0 left-0 right-0 z-50">
      {children}
    </header>
  )
}