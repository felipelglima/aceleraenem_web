import { API_URL, Class } from "./api"

const ONE_HOUR_IN_SECONDS = 60 * 60

export type ClassWithAvailability = Class & {
  available: boolean
  enrollments: number
}

export async function listClasses() {
  type Response = {
    data: {
      classes: ClassWithAvailability[]
    }
  }

  const response = await fetch(`${API_URL}/classes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: ONE_HOUR_IN_SECONDS,
    },
  })

  const { data } = (await response.json()) as Response

  return data.classes
}
