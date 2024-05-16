import { ReactNode, forwardRef } from "react"

export const Li = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className: string }
>((props, ref) => {
  return (
    <li ref={ref} className={`${props.className}`}>
      {props.children}
    </li>
  )
})
