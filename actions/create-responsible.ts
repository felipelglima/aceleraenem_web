import { Address, API_URL, Responsible } from "@/util/api"

type CreateResponsible = {
  name: string
  email: string
  cpf: string
  phone: string
  address: Address
  relationship: string

  studentId: string
}

export async function createResponsible(props: CreateResponsible) {
  const response = await fetch(`${API_URL}/api/responsible`, {
    method: "POST",
    body: JSON.stringify(props),
  })

  type APIResponse =
    | {
        data: Responsible
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
    responsible: result.data,
  }
}
