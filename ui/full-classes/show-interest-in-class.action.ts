"use server"

import { API_URL } from "@/util/api"

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
  const response = await fetch(`${API_URL}/api/interested`, {
    method: "POST",
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

  if (!email || email.length === 0)
    return {
      success: true,
    }

  const result = await showInterestInClass({
    email,
    classId: null,
  })

  if (!result.data) {
    console.log(`something failed: ${result.error}`)
    return {
      success: false,
    }
  }

  return {
    success: true,
  }
}
