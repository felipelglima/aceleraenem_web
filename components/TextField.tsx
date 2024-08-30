"use client"

import { useId } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

type Props = {
  label: string
  name: string
  type?: React.ComponentProps<"input">["type"]
  placeholder?: string
  error?: string[] | null | undefined
  value?: string
  onChange?: (value: string) => void
}

export function TextField({
  label,
  name,
  placeholder = "Digite aqui...",
  type = "text",
  error,
  ...props
}: Props) {
  const id = useId()

  return (
    <Label htmlFor={id} className="flex w-full flex-col gap-2">
      {label}

      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={props?.value}
        onChange={
          props?.onChange && ((event) => props?.onChange?.(event.target.value))
        }
      />

      {error && <span className="text-red-500">{error[0]}</span>}
    </Label>
  )
}
