"use client"

import { useId, useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

import { Label } from "./ui/label"
import { Input } from "./ui/input"

type Props = {
  label: string
  name: string
  type?: React.ComponentProps<"input">["type"]
  placeholder?: string
  className?: string
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
  className,
  ...props
}: Props) {
  const id = useId()
  const [visible, setVisible] = useState(false)

  return (
    <Label htmlFor={id} className="flex w-full flex-col gap-2">
      {label}

      <div className="relative w-full">
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          type={visible ? "text" : type}
          value={props?.value}
          className={className}
          onChange={
            props?.onChange &&
            ((event) => props?.onChange?.(event.target.value))
          }
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl p-1 text-zinc-600 hover:bg-black/5"
          >
            {visible ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
          </button>
        )}
      </div>

      {error && <span className="text-red-500">{error[0]}</span>}
    </Label>
  )
}
