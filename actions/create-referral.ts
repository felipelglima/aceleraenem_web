import { API_URL, stagingHeaders } from "@/lib/api"

export async function createReferral(props: {
  referrerStudentId: string
  referredStudentId: string
  referredEnrollmentId: string
}) {
  const response = await fetch(`${API_URL}/referrals`, {
    method: "POST",
    headers: {
      ...stagingHeaders(),
    },
    body: JSON.stringify(props),
  })

  type APIResponse =
    | {
        data: {
          id: string
        }
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
    referral: result.data,
  }
}
