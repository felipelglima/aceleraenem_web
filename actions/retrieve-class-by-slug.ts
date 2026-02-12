import { API_URL, Class, stagingHeaders } from "@/lib/api"

export const retrieveClassBySlugAction = async ({ slug }: { slug: string }) => {
  const response = await fetch(`${API_URL}/classes?slug=${slug}`, {
    headers: {
      "Content-Type": "application/json",
      ...stagingHeaders(),
    },
    method: "GET",
    cache: "no-store",
  })

  type APIResponse =
    | {
        data: { class: Class }
      }
    | {
        data: null
        error: string
      }

  const result = (await response.json()) as APIResponse

  if (!result.data) {
    return {
      error: result.error,
      class: null,
    }
  }

  return {
    error: null,
    class: result.data.class,
  }
}
