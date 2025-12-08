import { listClasses } from "@/lib/classes"
import { Course } from "./components"

export default async function Page() {
  const classes = await listClasses({
    type: "pre-enroll",
  })

  return <Course classes={classes} type="presencial" />
}
