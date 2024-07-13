"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export const BackToTop = () => {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const SCROLL_THRESHOLD = 200

    const handle = () => {
      if (!ref.current) return

      const hasScrolled = window.scrollY > SCROLL_THRESHOLD

      if (hasScrolled) {
        ref.current.style.opacity = "1"
        return
      }

      ref.current.style.opacity = "0"
    }

    if (!ref.current) return

    if (window.scrollY > SCROLL_THRESHOLD) {
      ref.current.style.opacity = "1"
    } else {
      ref.current.style.opacity = "0"
    }

    document.addEventListener("scroll", handle)

    return () => {
      document.removeEventListener("scroll", handle)
    }
  }, [])

  return (
    <Link
      ref={ref}
      className={`top-button fixed bottom-8 right-8 z-50 rounded-full border-2 border-[#f9f5f2] bg-primary-dark p-4 shadow-xl transition duration-500 hover:bg-primary-dark`}
      style={{ opacity: 0 }}
      href="#topo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M9.47 4.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 6.31l-3.72 3.72a.75.75 0 1 1-1.06-1.06l4.25-4.25Zm-4.25 9.25 4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 11.31l-3.72 3.72a.75.75 0 0 1-1.06-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  )
}
