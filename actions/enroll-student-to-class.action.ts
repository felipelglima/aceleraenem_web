"use server"

import { API_URL, COMMUNICATION_TOKEN, stagingHeaders } from "@/lib/api"

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
      ...stagingHeaders(),
    },
    body: JSON.stringify(props),
  })

  type APIResponse =
    | {
        data: {
          authentication: { accessToken: string; refreshToken: string }
          invoice: {
            id: string
          }
          enrollment: {
            id: string
          }
        }
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
    data: result.data,
  }
}
