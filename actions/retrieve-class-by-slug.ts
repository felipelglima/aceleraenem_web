import { API_URL, Class } from "@/lib/api"

export const retrieveClassBySlugAction = async ({ slug }: { slug: string }) => {
  const response = await fetch(`${API_URL}/api/classes?slug=${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })

  type APIResponse =
    | {
        data: {
          class: Class
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
    class: result.data.class,
  }
}
