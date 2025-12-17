"use client"

import { Button } from "@/components/ui/button"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { resetCache } from "./actions"

function ResetButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Resetando cache..." : "Resetar Cache"}
    </Button>
  )
}

export default function Page() {
  const [state, formAction] = useActionState(resetCache, null)

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form action={formAction} className="flex flex-col items-center gap-4">
        <ResetButton />
        {!state && (
          <p className="text-center text-sm text-gray-600">
            Clique no botão para resetar todo o cache
          </p>
        )}
        {state?.success && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-sm text-green-600">
              Cache resetado com sucesso!
            </p>
            {state.timestamp && (
              <p className="text-xs text-gray-500">
                {new Date(state.timestamp).toLocaleString("pt-BR")}
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  )
}
