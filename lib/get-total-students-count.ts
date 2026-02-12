import { API_URL, stagingHeaders } from "./api"

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
      ...stagingHeaders(),
    },
    cache: "no-store",
  })

  const { data } = (await response.json()) as Response

  return data.count + 275
}
