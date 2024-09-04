import { API_URL } from "./api"

const ONE_HOUR_IN_SECONDS = 60 * 60

export async function getTotalStudentsCount() {
  type Response = {
    data: {
      count: number
    }
  }

  const response = await fetch(`${API_URL}/students`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: ONE_HOUR_IN_SECONDS,
    },
  })

  const { data } = (await response.json()) as Response

  return data.count + 270
}
