"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import { Spinner } from "./Spinner"
import { cn } from "@/ui/utils"

export function SubmitButton({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      className={cn(
        "relative w-max rounded-full bg-[#00CC7A] px-6 font-bold transition-all ease-out hover:bg-primary-light active:scale-90",
        className
      )}
    >
      {pending && <Spinner mode="absolute" />}
      <span className={`transition ${pending ? "opacity-0" : ""}`}>
        {children || "Matricular"}
      </span>
    </Button>
  )
}
