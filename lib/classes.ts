import { API_URL, Class, stagingHeaders } from "./api"

const ONE_MINUTE_IN_SECONDS = 60

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
      headers: {
        "Content-Type": "application/json",
        ...stagingHeaders(),
      },
      next: {
        revalidate: ONE_MINUTE_IN_SECONDS * 10,
        tags: ["classes"],
      },
    }
  )

  const { data } = (await response.json()) as Response

  return data.classes
}
