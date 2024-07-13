/* eslint-disable react/display-name */
import { ReactNode, forwardRef } from "react"

export const Div = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className: string }
>((props, ref) => {
  return (
    <div ref={ref as any} className={`${props.className}`}>
      {props.children}
    </div>
  )
})
