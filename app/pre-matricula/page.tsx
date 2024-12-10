import { ClassWithAvailability, listClasses } from "@/lib/classes"

import { ClassCard } from "../curso/components"
import { CourseContent } from "@/ui/courses/presencial/course-content"
import {
  PreEnrollmentCard,
  PreEnrollmentSection,
} from "@/components/PreEnrollmentSection"

function Course({ classes }: { classes: ClassWithAvailability[] }) {
  return (
    <>
      <section className="flex w-full items-center justify-center gap-6">
        <h2
          className={
            "text-3xl font-bold leading-normal text-zinc-800 transition lg:text-4xl"
          }
        >
          Pré-Matrículas do Curso Presencial
        </h2>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-16 rounded-2xl md:border md:border-dashed md:border-zinc-400 md:p-4 lg:p-12">
        <CourseContent />
      </section>

      <PreEnrollmentCard />

      <ul className="flex max-h-[600px] w-full flex-col items-center justify-start gap-6 overflow-auto lg:flex-row">
        {classes.map((props) => (
          <li
            key={props.name}
            className="flex h-full w-max flex-col gap-4 rounded-xl border border-zinc-300 p-6"
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
