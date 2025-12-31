import { ClassWithAvailability, listClasses } from "@/lib/classes"

import { CourseContent } from "@/ui/courses/presencial/course-content"
import { ClassCard } from "../curso/components"

function Course({ classes }: { classes: ClassWithAvailability[] }) {
  return (
    <>
      <section className="flex w-full items-center justify-center gap-6">
        <h2
          className={
            "text-3xl font-bold leading-normal text-zinc-800 transition lg:text-4xl"
          }
        >
          Matrículas do Curso Presencial
        </h2>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-16 rounded-2xl md:border md:border-dashed md:border-zinc-400 md:p-4 lg:p-12">
        <CourseContent />
      </section>

      <ul className="grid max-h-[600px] w-full grid-cols-1 items-center justify-start gap-6 overflow-auto lg:grid-cols-4">
        {classes.map((props) => (
          <li
            key={props.name}
            className="col-span-1 flex h-full w-full flex-col gap-4 rounded-xl border border-zinc-300 p-6"
          >
            <ClassCard {...props} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default async function Page() {
  const classes = await listClasses({
    type: "pre-enroll",
  })

  return <Course classes={classes} />
}
