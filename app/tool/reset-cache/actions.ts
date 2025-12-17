"use server"

import consola from "consola"
import { revalidateTag } from "next/cache"

export async function resetCache() {
  revalidateTag("classes", "max")
  revalidateTag("students", "max")
  revalidateTag("enrollments", "max")

  consola.info("All cache has been revalidated.")

  return { success: true, timestamp: new Date().toISOString() }
}
