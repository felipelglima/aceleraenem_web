import { cookies } from "next/headers"

import { API_URL, Class, Student } from "@/util/api"

type EnrollStudentToClassRequest = {
  student: Student
  class: Class
}

export const enrollStudentToClass = async (
  props: EnrollStudentToClassRequest
) => {
  const response = await fetch(`${API_URL}/api/enrollments`, {
    method: "POST",
    body: JSON.stringify(props),
  })

  const data = (await response.json()) as {
    access_token: string
  }

  cookies().set("@acelera-enem:access_token", data.access_token)
}
