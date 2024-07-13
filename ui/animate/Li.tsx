/* eslint-disable react/display-name */
import { ReactNode, forwardRef } from "react"

export const Li = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className: string }
>((props, ref) => {
  return (
    <li ref={ref as any} className={`${props.className}`}>
      {props.children}
    </li>
  )
})
