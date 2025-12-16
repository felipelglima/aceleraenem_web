"use client"

import { Input } from "@/ui/Input"

import { SubmitButton } from "@/components/SubmitButton"
import { useActionState } from "react"
import { showInterestInClassAction } from "./show-interest-in-class.action"

export const PreStudentForm = () => {
  const [state, action] = useActionState(showInterestInClassAction, {
    success: false,
  })

  return (
    <form action={action} className="flex flex-col gap-4">
      {state.success ? (
        "Você receberá um e-mail quando novas vagas abrirem!"
      ) : (
        <>
          <Input
            label="Seu E-mail"
            name="email"
            placeholder="Insira seu e-mail"
            type="email"
          />

          <SubmitButton className="w-max rounded-full transition ease-out active:scale-90">
            Quero ser notificado
          </SubmitButton>
        </>
      )}
    </form>
  )
}
