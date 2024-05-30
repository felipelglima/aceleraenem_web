"use server"

import { Button } from "@/components/ui/button"
import { Input } from "../Input"

export const PreStudentForm = async () => {
  const handleSubscribe = async () => {
    "use server"
  }

  return (
    <form action={handleSubscribe} className="flex flex-col gap-4">
      <Input name="e-mail" placeholder="Insira seu e-mail" type="email" />

      <Button
        variant="default"
        className="w-max rounded-full transition ease-out active:scale-90"
      >
        Quero ser notificado
      </Button>
    </form>
  )
}
