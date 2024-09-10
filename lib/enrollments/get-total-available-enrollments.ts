import { API_URL } from "../api"

const ONE_HOUR_IN_SECONDS = 60 * 60

export async function getTotalAvailableEnrollments() {
  type Response = {
    data: {
      count: number
    }
  }

  const response = await fetch(`${API_URL}/enrollments/available-enrollments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const { data } = (await response.json()) as Response

  return data.count
}
