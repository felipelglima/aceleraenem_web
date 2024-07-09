"use client"

import { useFormState } from "react-dom"

import { Switch } from "@/components/ui/switch"
import { Button } from "@/ui/Button"
import { ReactNode, useId, useState } from "react"
import { enrollStudent, EnrollStudentState } from "./actions"
import { Address, BirthDate } from "./components"

const initalState: EnrollStudentState = {}

export default function Page({ params }: { params: { slug: string } }) {
  const [terms, setTerms] = useState(false)
  const [age, setAge] = useState(0)
  const [responsibleEnabled, setResponsibleEnabled] = useState(false)

  const [state, action, pending] = useFormState(
    enrollStudent.bind(null, { slug: params.slug, responsibleEnabled }),
    initalState
  )

  return (
    <form
      className="flex flex-col gap-4 rounded border border-zinc-300 p-6"
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

      <Button className="w-[150px] justify-center">Matricular</Button>
    </form>
  )
}

function InputRow({ children }: { children: ReactNode }) {
  return <div className="flex w-full items-start gap-4">{children}</div>
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
