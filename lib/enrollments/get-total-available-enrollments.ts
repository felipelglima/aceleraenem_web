import { API_URL } from "../api"

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
    next: {
      revalidate: 60,
    },
  })

  const { data } = (await response.json()) as Response

  return data.count
}
