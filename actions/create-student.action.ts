import { API_URL, Student } from "@/util/api"

type CreateStudentActionRequest = {
  name: string
  email: string
  cpf: string
  phone: string
  address: {
    cep: string
  }
  birthDate: Date
}

export const createStudentAction = async ({
  name,
  email,
  cpf,
  phone,
  address,
  birthDate,
}: CreateStudentActionRequest) => {
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
    console.log("error", result.error)
    return null
  }

  return result.data
}
