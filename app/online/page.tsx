import { listClasses } from "@/lib/classes"
import { Course } from "../curso/components"

export default async function Page() {
  const classes = await listClasses({
    type: "online",
  })

  return <Course classes={classes} type="online" />
}
