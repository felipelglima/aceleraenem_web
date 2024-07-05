"use client"

import { useFormState } from "react-dom"
import { Input } from "@/ui/Input"
import { Button } from "@/components/ui/button"

import {
  showInterestInClassAction,
  State,
} from "./show-interest-in-class.action"

export const PreStudentForm = () => {
  const [state, action] = useFormState(showInterestInClassAction, {
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

          <Button
            variant="default"
            className="w-max rounded-full transition ease-out active:scale-90"
          >
            Quero ser notificado
          </Button>
        </>
      )}
    </form>
  )
}
