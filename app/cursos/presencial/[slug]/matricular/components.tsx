"use client"
import { cache, ReactNode, useEffect, useId, useState } from "react"
import { useFormState } from "react-dom"

import { DatePicker } from "@/ui/courses/matricular/date-picker"

import { Switch } from "@/components/ui/switch"
import { Button } from "@/ui/Button"
import { enrollStudent, EnrollStudentState } from "./actions"

const initalState: EnrollStudentState = {}

export function Form({ slug }: { slug: string }) {
  const [terms, setTerms] = useState(false)
  const [age, setAge] = useState(0)
  const [responsibleEnabled, setResponsibleEnabled] = useState(false)

  const [state, action, pending] = useFormState(
    enrollStudent.bind(null, { slug, responsibleEnabled }),
    initalState
  )

  return (
    <form
      className="flex flex-col gap-4 rounded border-zinc-300 p-2 md:border md:p-6"
      action={action}
    >
      <InputRow>
        <InputField
          name="student-name"
          placeholder="Fulano Ciclano"
          type="text"
          error={state.errors?.[`student-name`]}
        >
          Nome Completo
        </InputField>

        <InputField
          name="student-email"
          placeholder="fulano@gmail.com"
          type="email"
          error={state.errors?.[`student-email`]}
        >
          Seu E-mail
        </InputField>
      </InputRow>

      <InputRow>
        <InputField
          name="student-cpf"
          placeholder="Digite aqui..."
          type="text"
          error={state.errors?.[`student-cpf`]}
        >
          CPF
        </InputField>

        <InputField
          name="student-phone"
          placeholder="Digite aqui..."
          type="text"
          error={state.errors?.[`student-phone`]}
        >
          Celular
        </InputField>
      </InputRow>

      <InputField
        name="student-password"
        placeholder="Digite aqui..."
        type="password"
        error={state.errors?.[`student-password`]}
      >
        Senha
      </InputField>

      <Address fieldsPrefix="student-address" errors={state.errors} />

      <BirthDate
        error={state.errors?.[`student-birthDate`]}
        onUpdate={(age) => {
          if (age < 18) setResponsibleEnabled(true)
          setAge(age)
        }}
      />

      <Toggle
        disabled={age < 18}
        checked={!responsibleEnabled}
        onUpdate={(v) => setResponsibleEnabled(!v)}
      >
        Eu sou meu responsável financeiro
      </Toggle>

      <hr className="bg-zinc-300" />

      {responsibleEnabled && <ResponsibleForm errors={state.errors} />}

      <div className="rounded bg-yellow-100 p-4 font-medium text-yellow-800">
        A matrícula poderá ser cancelada a qualquer momento.
      </div>

      <div className="flex shrink-0 items-center space-x-2">
        <Switch id="terms" checked={terms} onCheckedChange={setTerms} />

        <label htmlFor="terms" className={`shrink-0 `}>
          Ao se matrícular você concorda com os{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition hover:text-blue-400 hover:underline"
          >
            Termos de Uso
          </a>
          ,{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition hover:text-blue-400 hover:underline"
          >
            Política de Privacidade
          </a>{" "}
          e{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition hover:text-blue-400 hover:underline"
          >
            Contrato de Assinatura
          </a>
        </label>
      </div>

      <span className="text-red-500">{state.errors?.general}</span>

      <Button className="w-[150px] justify-center">Matricular</Button>
    </form>
  )
}

function InputRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-4 md:flex-row">
      {children}
    </div>
  )
}

function InputField({
  children,
  error,
  ...props
}: {
  type: "text" | "email" | "password"
  name: string
  placeholder: string
  children: string
  error?: string | null
}) {
  const id = useId()

  return (
    <label htmlFor={id} className="flex w-full flex-col gap-1">
      {children}

      <input
        id={id}
        className="w-full rounded border border-zinc-300 bg-transparent text-zinc-700"
        {...props}
      />

      {error && <span className="text-red-500">{error}</span>}
    </label>
  )
}

function Toggle(props: {
  disabled: boolean
  checked: boolean
  onUpdate: (value: boolean) => void
  children: string
}) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={`flex shrink-0 items-center gap-2 ${props.disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {props.children}
      <Switch
        id={id}
        disabled={props.disabled}
        checked={props.checked}
        onCheckedChange={props.onUpdate}
      />
    </label>
  )
}

function ResponsibleForm({
  errors,
}: {
  errors: Record<string, string | null> | undefined
}) {
  return (
    <>
      <h2 className="text-xl font-bold leading-normal text-zinc-800">
        Dados do Responsável Financeiro
      </h2>

      <InputRow>
        <InputField
          name="responsible-name"
          error={errors?.["responsible-name"]}
          type="text"
          placeholder="Nome Completo"
        >
          Nome do Responsável
        </InputField>

        <InputField
          name="responsible-email"
          error={errors?.["responsible-email"]}
          type="email"
          placeholder="E-mail"
        >
          E-mail do Responsável
        </InputField>
      </InputRow>

      <InputRow>
        <InputField
          name="responsible-cpf"
          error={errors?.["responsible-cpf"]}
          type="text"
          placeholder="CPF (Apenas números)"
        >
          CPF do Responsável
        </InputField>

        <InputField
          name="responsible-phone"
          error={errors?.["responsible-phone"]}
          type="text"
          placeholder="Celular (Apenas números com DDD)"
        >
          Celular do Responsável
        </InputField>
      </InputRow>

      <Address fieldsPrefix="responsible-address" errors={errors} />

      <InputField
        name="responsible-relationship"
        error={errors?.["responsible-relationship"]}
        type="text"
        placeholder="Parentesco"
      >
        Parentesco
      </InputField>

      <hr className="bg-zinc-300" />
    </>
  )
}

function BirthDate(props: {
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

function Address({
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
