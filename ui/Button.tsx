import NextLink from "next/link"
import { ReactNode } from "react"

export const Button = (props: {
  disabled?: boolean
  className?: string
  children: ReactNode
}) => {
  return (
    <button
      disabled={props.disabled}
      className={`flex items-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition hover:bg-primary ${props.className || ""}`}
    >
      {props.children}
    </button>
  )
}

export const Link = (props: {
  external?: boolean
  className?: string
  disabled?: boolean
  href: string
  children: ReactNode
}) => {
  return (
    <NextLink
      href={props.disabled ? "#" : props.href}
      target={props.external ? "_blank" : "_self"}
      aria-disabled={props.disabled || false}
      className={`flex items-center justify-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition ${props.className || ""} ${props.disabled ? "cursor-not-allowed opacity-50" : "hover:bg-primary"}`}
    >
      {props.children}
    </NextLink>
  )
}
