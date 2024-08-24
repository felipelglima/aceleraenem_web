import { API_URL, Student, StudentProps } from "@/lib/api"
import consola from "consola"

export const createStudentAction = async ({
  name,
  email,
  cpf,
  phone,
  address,
  birthDate,
  password,
}: StudentProps & { password: string }) => {
  const response = await fetch(`${API_URL}/api/students`, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      cpf,
      phone,
      address,
      birthDate,
      password,
    }),
  })

  type APIResponse =
    | {
        data: {
          student: Student
        }
      }
    | {
        data: null
        error: string
      }

  const result = (await response.json()) as APIResponse

  if (!result.data) {
    consola.error("Error creating student", result.error)
    return {
      error: result.error,
    }
  }

  return {
    student: result.data.student,
  }
}
