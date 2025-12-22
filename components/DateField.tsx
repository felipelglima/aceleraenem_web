"use client"

import { InputMask } from "@react-input/mask"
import { useId, useState } from "react"

import { Label } from "./ui/label"

function formatDateInput(date: string) {
  // Remove caracteres não numéricos exceto a barra
  const cleaned = date.replace(/[^\d/]/g, "")
  const [day, month, year] = cleaned.split("/").filter(Boolean)

  if (day?.length === 2 && month?.length === 2 && year?.length === 4) {
    const dateObj = new Date(`${month}-${day}-${year}`)
    // Verifica se a data é válida
    if (!isNaN(dateObj.getTime())) {
      return dateObj
    }
  }

  return null
}

type Props = {
  label: string
  name: string
  placeholder: string
  error?: string[] | null | undefined
  min: Date
  max: Date
  onChange: (value: string) => void
}

export function DateField({
  label,
  name,
  placeholder,
  min,
  max,
  error: formError,
  onChange,
}: Props) {
  const [error, setError] = useState<string | null>(null)
  const id = useId()

  return (
    <Label htmlFor={id} className="flex w-full flex-col gap-2">
      {label}

      <InputMask
        id={id}
        mask="__/__/____"
        replacement={{ _: /\d/ }}
        name={name}
        placeholder={placeholder}
        className={
          "flex h-10 w-full rounded-xl border border-input bg-background bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:!ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        }
        onChange={(event) => {
          const value = event.target.value
          const date = formatDateInput(value)

          if (!date) return

          if (date.getTime() < min.getTime()) {
            setError(`O aluno não pode ser mais velho que 40 anos.`)
            return
          }

          if (date.getTime() > max.getTime()) {
            setError("O aluno precisa ter no mínimo 15 anos.")
            return
          }

          setError(null)
          onChange(value)
        }}
      />

      {error && <span className="text-red-500">{error}</span>}
      {formError && <span className="text-red-500">{formError[0]}</span>}
    </Label>
  )
}
