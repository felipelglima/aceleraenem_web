"use client"

import { useId, useState } from "react"
import ReactInputMask from "react-input-mask"

import { Label } from "./ui/label"

const formatter = Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
})

function formatDateInput(date: string) {
  const [day, month, year] = date.replaceAll("_", "").split("/")

  if (day.length === 2 && month.length === 2 && year.length === 4) {
    const date = new Date(`${month}-${day}-${year}`)
    return date
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

      <ReactInputMask
        id={id}
        mask="99/99/9999"
        name={name}
        placeholder={placeholder}
        className={
          "flex h-10 w-full rounded-xl border border-input bg-background bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:!ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        }
        onChange={(event) => {
          const date = formatDateInput(event.target.value)

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
          onChange(event.target.value)
        }}
      />

      {error && <span className="text-red-500">{error}</span>}
      {formError && <span className="text-red-500">{formError[0]}</span>}
    </Label>
  )
}
