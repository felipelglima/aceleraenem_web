import { API_URL, Student, StudentProps } from "@/util/api"

export const createStudentAction = async ({
  name,
  email,
  cpf,
  phone,
  address,
  birthDate,
}: StudentProps) => {
  const response = await fetch(`${API_URL}/api/students`, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      cpf,
      phone,
      address,
      birthDate,
    }),
  })

  type APIResponse =
    | {
        data: Student
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

  return {
    student: result.data,
  }
}
