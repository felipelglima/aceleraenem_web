import { cookies } from "next/headers"

import { API_URL, Class, Student } from "@/util/api"

type EnrollStudentToClassRequest = {
  class: Class
  student: Student
}

export const enrollStudentToClass = async (
  props: EnrollStudentToClassRequest
) => {
  const response = await fetch(`${API_URL}/api/enrollments`, {
    method: "POST",
    body: JSON.stringify(props),
  })

  type APIResponse =
    | {
        data: { access_token: string }
      }
    | {
        data: null
        error: string
      }

  const result = (await response.json()) as APIResponse

  if (!result.data) {
    return {
      error: result.error,
    }
  }

  cookies().set("@acelera-enem:access_token", result.data.access_token)

  return {
    data: {},
  }
}
