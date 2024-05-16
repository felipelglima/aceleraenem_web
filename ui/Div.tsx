import { ReactNode, forwardRef } from "react"

export const Div = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className: string }
>((props, ref) => {
  return (
    <div ref={ref} className={`${props.className}`}>
      {props.children}
    </div>
  )
})
