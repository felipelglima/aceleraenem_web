import { API_URL, Class } from "@/util/api"

const MINUTE = 60
const FIVE_MINUTES = 5 * MINUTE

type ClassWithAvailability = Class & {
  available: boolean
}

export const getClasses = async () => {
  const response = await fetch(`${API_URL}/api/classes`, {
    next: {
      // revalidate: FIVE_MINUTES,
      tags: ["classes"],
    },
    cache: "no-cache",
  })
  const { data } = (await response.json()) as {
    data: ClassWithAvailability[]
  }

  return data
}
