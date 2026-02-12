import { API_URL, Class, stagingHeaders } from "./api"

export type ClassWithAvailability = Class & {
  available: boolean
  enrollments: number
}

export async function listClasses(query: {
  type: "classroom" | "online" | "pre-enroll"
}) {
  type Response = {
    data: {
      classes: ClassWithAvailability[]
    }
  }

  const searchParams = new URLSearchParams()

  searchParams.set("type", query.type)

  const response = await fetch(
    `${API_URL}/classes?${searchParams.toString()}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        ...stagingHeaders(),
      },
    }
  )

  const { data } = (await response.json()) as Response

  return data.classes
}
