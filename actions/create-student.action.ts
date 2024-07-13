import { API_URL, Student, StudentProps } from "@/lib/api"

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
