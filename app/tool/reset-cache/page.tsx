import consola from "consola"
import { revalidateTag } from "next/cache"

export default async function Page() {
  revalidateTag("classes")
  revalidateTag("students")
  revalidateTag("enrollments")

  consola.info("All cache has been revalidated.")

  return <>done</>
}
