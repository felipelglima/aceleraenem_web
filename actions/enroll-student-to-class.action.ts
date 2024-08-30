"use server"

import crypto from "node:crypto"

import { API_URL, COMMUNICATION_TOKEN } from "@/lib/api"

type EnrollStudentToClassRequest = {
  classId: string
  studentId: string
}

export const enrollStudentToClass = async (
  props: EnrollStudentToClassRequest
) => {
  const response = await fetch(`${API_URL}/enrollments`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${COMMUNICATION_TOKEN}`,
    },
    body: JSON.stringify(props),
  })

  type APIResponse =
    | {
        data: { access_token: string; expiresIn: number }
      }
    | {
        data: null
        error: string
      }

  const result = (await response.json()) as APIResponse

  if (!result.data) {
    return {
      error: result.error,
      data: null,
    }
  }

  return {
    error: null,
    data: {
      access_token: result.data.access_token,
    },
  }
}
