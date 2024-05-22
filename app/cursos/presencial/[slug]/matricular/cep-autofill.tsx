"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import { ControlledInput, Input } from "@/ui/Input"

type DebouncedFunction<F extends (...args: any[]) => any> = (
  ...args: Parameters<F>
) => void

function debounce<F extends (...args: any[]) => any>(
  fn: F,
  delay: number
): DebouncedFunction<F> {
  let timerId: number | undefined
  return (...args: Parameters<F>) => {
    if (timerId) {
      clearTimeout(timerId)
    }
    // @ts-ignore
    timerId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export const CEPAutofill = () => {
  const [cep, setCep] = useState("")
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
  })

  return (
    <>
      <ControlledInput
        name="cep"
        type="text"
        placeholder="CEP (Apenas números)"
        value={cep}
        onInput={(text) => {
          setCep(text)

          if (text.length !== 8) return

          const autofill = debounce(async () => {
            const response = await fetch(
              `https://viacep.com.br/ws/${text}/json`
            )
            const data = (await response.json()) as {
              cep: string
              logradouro: string
              complemento: string
              bairro: string
              localidade: string
              uf: string
            }

            setAddress({
              street: data.logradouro,
              neighborhood: data.bairro,
              city: data.localidade,
              state: data.uf,
            })
          }, 500)

          autofill()
        }}
      />

      <div className="flex w-full items-center gap-4">
        <div className="max-w-[80px]">
          <ControlledInput
            name="state"
            type="text"
            placeholder="UF"
            value={address.state}
            onInput={() => {}}
          />
        </div>

        <ControlledInput
          name="city"
          type="text"
          placeholder="Cidade"
          value={address.city}
          onInput={() => {}}
        />
      </div>

      <div className="flex w-full items-center gap-4">
        <ControlledInput
          name="neighborhood"
          type="text"
          placeholder="Bairro"
          value={address.neighborhood}
          onInput={() => {}}
        />

        <ControlledInput
          name="street"
          type="text"
          placeholder="Rua, Avenida..."
          value={address.street}
          onInput={() => {}}
        />

        <div className="max-w-[240px]">
          <ControlledInput
            name="number"
            type="text"
            placeholder="Número"
            value={""}
            onInput={() => {}}
          />
        </div>
      </div>
    </>
  )
}
