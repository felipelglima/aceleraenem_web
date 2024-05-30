"use client"

import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import { EnrollFormState, enroll } from "./enroll-action"

import { ControlledInput, Input } from "@/ui/Input"
import { CEPAutofill } from "./cep-autofill"
import { Button } from "@/ui/Button"
import { Switch } from "@/components/ui/switch"

export const EnrollForm = ({ classSlug }: { classSlug: string }) => {
  const [state, action] = useFormState(enroll, {
    message: "",
  })

  const [birthDate, setBirthDate] = useState("")
  const [isResponsible, setIsResponsible] = useState(false)
  const [terms, setTerms] = useState(false)

  const isMinor =
    new Date().getFullYear() - new Date(birthDate).getFullYear() < 18

  useEffect(() => {
    if (isMinor === true) {
      setIsResponsible(false)
    }
  }, [isMinor])

  return (
    <>
      <form
        className="flex flex-col gap-4 rounded border border-zinc-300 p-6"
        action={action}
      >
        <h2 className="text-xl font-bold leading-normal text-zinc-800">
          Dados do Aluno
        </h2>

        {state.message && <p className="text-red-500">{state.message}</p>}

        <input
          type="text"
          className="sr-only"
          name="class-slug"
          value={classSlug}
        />

        <div className="flex w-full items-center gap-4">
          <Input name="student-name" type="text" placeholder="Nome Completo" />
          <Input name="student-email" type="email" placeholder="E-mail" />
        </div>

        <div className="flex w-full items-center gap-4">
          <Input
            name="student-cpf"
            type="text"
            placeholder="CPF (Apenas números)"
          />

          <Input
            name="student-phone"
            type="text"
            placeholder="Celular (Apenas números com DDD)"
          />
        </div>

        <CEPAutofill fieldsPrefix="student" />

        <div className="flex w-full items-center gap-4">
          <ControlledInput
            name="student-birthDate"
            type="date"
            placeholder="Data de Nascimento"
            value={birthDate}
            onInput={setBirthDate}
          />

          <div className="flex shrink-0 items-center space-x-2">
            <label
              htmlFor="responsible-toggle"
              className={`shrink-0 ${isMinor ? "cursor-not-allowed opacity-50" : ""}`}
            >
              Eu sou meu responsável financeiro
            </label>

            <Switch
              id="responsible-toggle"
              checked={isResponsible}
              onCheckedChange={(checked) => setIsResponsible(checked)}
              disabled={isMinor}
            />
          </div>
        </div>

        <hr className="bg-zinc-300" />

        {!isResponsible && (
          <>
            <h2 className="text-xl font-bold leading-normal text-zinc-800">
              Dados do Responsável Financeiro
            </h2>

            <div className="flex w-full items-center gap-4">
              <Input
                name="responsible-name"
                type="text"
                placeholder="Nome Completo"
              />
              <Input
                name="responsible-email"
                type="email"
                placeholder="E-mail"
              />
            </div>

            <div className="flex w-full items-center gap-4">
              <Input
                name="responsible-cpf"
                type="text"
                placeholder="CPF (Apenas números)"
              />

              <Input
                name="responsible-phone"
                type="text"
                placeholder="Celular (Apenas números com DDD)"
              />
            </div>

            <CEPAutofill fieldsPrefix="responsible" />

            <Input
              name="responsible-relationship"
              type="text"
              placeholder="Parentesco"
            />

            <hr className="bg-zinc-300" />
          </>
        )}

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
    </>
  )
}
