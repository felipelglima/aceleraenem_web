"use client"

import { cache, useEffect, useState } from "react"

import { ControlledInput } from "@/ui/Input"

const useDebouncedValue = (inputValue: any, delay: any) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [inputValue, delay])

  return debouncedValue
}

const getCEPData = cache(async (cep: string) => {
  if (cep.length !== 8) {
    return {
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      number: "",
    }
  }

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)

  const data = (await response.json()) as {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
  }

  return {
    street: data.logradouro,
    neighborhood: data.bairro,
    city: data.localidade,
    state: data.uf,
    number: "",
  }
})

export const CEPAutofill = ({ fieldsPrefix }: { fieldsPrefix: string }) => {
  const [cep, setCep] = useState("")
  const autofill = useDebouncedValue(cep, 500)
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    number: "",
  })

  useEffect(() => {
    getCEPData(autofill).then((data) => setAddress(data))
  }, [autofill])

  return (
    <>
      <ControlledInput
        name={`${fieldsPrefix}-cep`}
        type="text"
        placeholder="CEP (Apenas números)"
        value={cep}
        onInput={setCep}
      />

      <div className="flex w-full items-center gap-4">
        <div className="max-w-[80px]">
          <ControlledInput
            name={`${fieldsPrefix}-state`}
            type="text"
            placeholder="UF"
            value={address.state}
            onInput={(text) => setAddress((add) => ({ ...add, state: text }))}
          />
        </div>

        <ControlledInput
          name={`${fieldsPrefix}-city`}
          type="text"
          placeholder="Cidade"
          value={address.city}
          onInput={(text) => setAddress((add) => ({ ...add, city: text }))}
        />
      </div>

      <div className="flex w-full items-center gap-4">
        <ControlledInput
          name={`${fieldsPrefix}-neighborhood`}
          type="text"
          placeholder="Bairro"
          value={address.neighborhood}
          onInput={(text) =>
            setAddress((add) => ({ ...add, neighborhood: text }))
          }
        />

        <ControlledInput
          name={`${fieldsPrefix}-street`}
          type="text"
          placeholder="Rua, Avenida..."
          value={address.street}
          onInput={(text) => setAddress((add) => ({ ...add, street: text }))}
        />

        <div className="max-w-[240px]">
          <ControlledInput
            name={`${fieldsPrefix}-number`}
            type="text"
            placeholder="Número"
            value={address.number}
            onInput={(text) => setAddress((add) => ({ ...add, number: text }))}
          />
        </div>
      </div>
    </>
  )
}
