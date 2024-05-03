import { ReactNode } from "react"
import NextLink from "next/link"

export const Button = (props: { className?: string; children: ReactNode }) => {
  return (
    <button
      className={`flex items-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition hover:bg-primary ${props.className || ""}`}
    >
      {props.children}
    </button>
  )
}

export const Link = (props: {
  external?: boolean
  className?: string
  href: string
  children: ReactNode
}) => {
  return (
    <NextLink
      href={props.href}
      target={props.external ? "_blank" : "_self"}
      className={`flex items-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition hover:bg-primary ${props.className || ""}`}
    >
      {props.children}
    </NextLink>
  )
}
