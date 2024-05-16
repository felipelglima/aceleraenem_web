"use client"

import { useState } from "react"

function ControlledInput<TValue extends any>(props: {
  name: string
  type: "text" | "email" | "date"
  placeholder: string
  value: TValue
  onInput: (value: TValue) => void
}) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full rounded border border-zinc-300 bg-transparent text-zinc-700"
      value={props.value as string}
      onChange={(event) => props.onInput(event.target.value as TValue)}
    />
  )
}

export const BirthDate = () => {
  const [date, setDate] = useState("")

  const isMinor = new Date().getFullYear() - new Date(date).getFullYear() < 18

  return (
    <>
      <ControlledInput
        name="birthDate"
        type="date"
        placeholder="Data de Nascimento"
        value={date}
        onInput={setDate}
      />

      {isMinor && (
        <div className="rounded bg-red-100 p-4 font-medium text-red-800">
          Na hora de realizar o pagamento favor preencher os dados do seu
          responsável.
        </div>
      )}
    </>
  )
}
