"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"

import { EnrollFormState, enroll } from "./enroll-action"

import { ControlledInput, Input } from "@/ui/Input"

const initialState: EnrollFormState = {
  message: "",
}

export const EnrollForm = () => {
  const [state, action] = useFormState(enroll, initialState)

  const [birthDate, setBirthDate] = useState("")

  const isMinor =
    new Date().getFullYear() - new Date(birthDate).getFullYear() < 18

  return (
    <form action={action}>
      <ControlledInput
        name="birthDate"
        type="date"
        placeholder="Data de Nascimento"
        value={birthDate}
        onInput={setBirthDate}
      />

      {isMinor && (
        <Input
          name="responsible-name"
          type="text"
          placeholder="Nome do responsável"
        />
      )}
      <p>message: {state.message}</p>
      <SubmitButton />

      {/* <form
            className="flex flex-col gap-4 rounded border border-zinc-300 p-6"
            action={enrollAction}
          >
            <h2 className="text-xl font-bold leading-normal text-zinc-800">
              Dados Pessoais
            </h2>

            <div className="flex w-full items-center gap-4">
              <Input name="name" type="text" placeholder="Nome Completo" />
              <Input name="email" type="email" placeholder="E-mail" />
            </div>

            <div className="flex w-full items-center gap-4">
              <Input
                name="cpf"
                type="text"
                placeholder="CPF (Apenas números)"
              />

              <Input
                name="phone"
                type="text"
                placeholder="Celular (Apenas números com DDD)"
              />
            </div>

            <BirthDate />

            <CEPAutofill />

            <hr className="bg-zinc-300" />

            <div className="rounded bg-yellow-100 p-4 font-medium text-yellow-800">
              Juros e multa irão incidir sobre pagamentos em atraso A
              cobrança será efetuada mensalmente
            </div>

            <Button className="w-max">Matricular</Button>
          </form> */}
    </form>
  )
}

function SubmitButton() {
  const status = useFormStatus()

  return (
    <button
      disabled={status.pending}
      type="submit"
      className="rounded-full bg-primary px-3 py-1.5 font-bold text-white disabled:opacity-45"
    >
      {status.pending ? "loading..." : "submit"}
    </button>
  )
}
