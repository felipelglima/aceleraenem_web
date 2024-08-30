"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import { Spinner } from "./Spinner"

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button className="relative w-max rounded-full bg-[#00CC7A] px-6 font-bold ease-out hover:bg-primary-light active:scale-90">
      {pending && <Spinner mode="absolute" />}
      <span className={`transition ${pending ? "opacity-0" : ""}`}>
        Matricular
      </span>
    </Button>
  )
}
