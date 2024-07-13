import { API_URL } from "../api"

const ONE_HOUR_IN_SECONDS = 60 * 60

export async function getTotalAvailableEnrollments() {
  type Response = {
    count: number
  }

  const response = await fetch(
    `${API_URL}/api/enrollments/available-enrollments`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: ONE_HOUR_IN_SECONDS,
      },
    }
  )

  const { count } = (await response.json()) as Response

  return count
}
