import { API_URL, Class } from "@/lib/api"

export const retrieveClassBySlugAction = async ({ slug }: { slug: string }) => {
  console.log(`calling API at: ${API_URL} with slug: ${slug}`)
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
      console.log("my result", { result })
  if (!result.data) {
    return {
      error: result.error,
    }
  }

  return {
    class: result.data.class,
  }
}
