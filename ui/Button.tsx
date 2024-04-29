import { ReactNode } from "react"
import NextLink from "next/link"

export const Button = (props: { className?: string; children: ReactNode }) => {
  return (
    <button
      className={`bg-primary-dark hover:bg-primary flex items-center gap-4 rounded-full px-3 py-1.5 font-bold text-white transition ${props.className || ""}`}
    >
      {props.children}
    </button>
  )
}

export const Link = (props: { href: string; children: ReactNode }) => {
  return (
    <NextLink
      href={props.href}
      className="bg-primary-dark hover:bg-primary flex items-center gap-4 rounded-full px-3 py-1.5 font-bold text-white transition"
    >
      {props.children}
    </NextLink>
  )
}
