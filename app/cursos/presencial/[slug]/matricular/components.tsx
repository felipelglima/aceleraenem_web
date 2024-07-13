"use client"

import { DatePicker } from "@/ui/courses/matricular/date-picker"
import { cache, useEffect, useId, useState } from "react"

export function BirthDate(props: {
  error?: string | null
  onUpdate: (age: number) => void
}) {
  const [birthDate, setBirthDate] = useState("")

  const age = new Date().getFullYear() - new Date(birthDate).getFullYear()

  useEffect(() => {
    props.onUpdate(age)
  }, [age, props])

  return (
    <>
      <DatePicker
        onDateChange={(date) => {
          const dateAsString = date
            .toLocaleString("pt-BR", { dateStyle: "short" })
            .replaceAll("/", "-")

          setBirthDate(dateAsString)
        }}
      >
        Data de Nascimento
      </DatePicker>

      <input
        value={birthDate}
        type="text"
        className="sr-only"
        name="student-birthDate"
      />
    </>
  )
}

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
      complement: "",
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
    complement: "",
  }
})

function ControlledInputField({
  children,
  error,
  value,
  onInput,
  ...props
}: {
  type: "text" | "email" | "password" | "date"
  name: string
  placeholder: string
  children: string
  error?: string | null
  value: string
  onInput: (value: string) => void
}) {
  const id = useId()

  return (
    <label htmlFor={id} className="flex w-full flex-col gap-1">
      {children}

      <input
        id={id}
        className="w-full rounded border border-zinc-300 bg-transparent text-zinc-700"
        value={value}
        onChange={(event) => onInput(event.target.value)}
        {...props}
      />

      {error && <span className="text-red-500">{error}</span>}
    </label>
  )
}

export function Address({
  fieldsPrefix,
  errors,
}: {
  errors?: Record<string, string | null>
  fieldsPrefix: string
}) {
  const [cep, setCep] = useState("")
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    number: "",
    complement: "",
  })

  const triggerAutofill = useDebouncedValue(cep, 500)

  useEffect(() => {
    getCEPData(triggerAutofill).then(setAddress)
  }, [triggerAutofill])

  const updateInfo = (name: keyof typeof address, value: string) =>
    setAddress((add) => ({ ...add, [name]: value }))

  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <ControlledInputField
          name={`${fieldsPrefix}-cep`}
          type="text"
          placeholder="Digite aqui..."
          value={cep}
          onInput={setCep}
          error={errors?.[`${fieldsPrefix}-cep`]}
        >
          CEP
        </ControlledInputField>

        <div className="md:max-w-[300px]">
          <ControlledInputField
            name={`${fieldsPrefix}-state`}
            error={errors?.[`${fieldsPrefix}-state`]}
            type="text"
            placeholder=""
            value={address.state}
            onInput={(text) => updateInfo("state", text)}
          >
            UF
          </ControlledInputField>
        </div>

        <ControlledInputField
          name={`${fieldsPrefix}-city`}
          error={errors?.[`${fieldsPrefix}-city`]}
          type="text"
          placeholder="Digite aqui..."
          value={address.city}
          onInput={(text) => updateInfo("city", text)}
        >
          Cidade
        </ControlledInputField>

        <ControlledInputField
          name={`${fieldsPrefix}-neighborhood`}
          error={errors?.[`${fieldsPrefix}-neighborhood`]}
          type="text"
          placeholder="Digite aqui..."
          value={address.neighborhood}
          onInput={(text) => updateInfo("neighborhood", text)}
        >
          Bairro
        </ControlledInputField>
      </div>

      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <ControlledInputField
          name={`${fieldsPrefix}-street`}
          error={errors?.[`${fieldsPrefix}-street`]}
          type="text"
          placeholder="Rua, Avenida..."
          value={address.street}
          onInput={(text) => updateInfo("street", text)}
        >
          Rua
        </ControlledInputField>

        <div className="md:max-w-[240px]">
          <ControlledInputField
            name={`${fieldsPrefix}-number`}
            error={errors?.[`${fieldsPrefix}-number`]}
            type="text"
            placeholder="Digite aqui..."
            value={address.number}
            onInput={(text) => updateInfo("number", text)}
          >
            Número
          </ControlledInputField>
        </div>

        <ControlledInputField
          name={`${fieldsPrefix}-complement`}
          error={errors?.[`${fieldsPrefix}-complement`]}
          type="text"
          placeholder=""
          value={address.complement}
          onInput={(text) => updateInfo("complement", text)}
        >
          Complemento
        </ControlledInputField>
      </div>
    </>
  )
}
