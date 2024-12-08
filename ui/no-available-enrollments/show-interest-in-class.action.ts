"use server"

import { API_URL, stagingHeaders } from "@/lib/api"
import consola from "consola"

export type State = {
  success: boolean
}

type APIResponse =
  | {
      data: {
        success: boolean
      }
    }
  | {
      data: null
      error: string
    }

async function showInterestInClass({
  email,
  classId,
}: {
  email: string
  classId: string | null
}) {
  const response = await fetch(`${API_URL}/interested`, {
    method: "POST",
    headers: {
      ...stagingHeaders(),
    },
    body: JSON.stringify({
      email,
      classId,
    }),
  })

  const data = (await response.json()) as APIResponse

  return data
}

export const showInterestInClassAction = async (
  _: State,
  formData: FormData
): Promise<State> => {
  const email = formData.get("email")?.toString()

  if (!email || email.length === 0) {
    return {
      success: false,
    }
  }

  const result = await showInterestInClass({
    email,
    classId: null,
  })

  if (!result.data) {
    consola.error(`something failed: ${result.error}`)
    return {
      success: false,
    }
  }

  return {
    success: true,
  }
}
