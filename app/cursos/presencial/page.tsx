import { listClasses } from "@/lib/classes"

import { ClassListModal } from "@/ui/courses/presencial/class-list-modal"
import { CourseContent } from "@/ui/courses/presencial/course-content"
import { InterestedModal } from "@/ui/courses/presencial/interested-modal"

export default async function Page() {
  const classes = await listClasses()

  return (
    <>
      <CourseContent />

      <ClassListModal interestedModal={<InterestedModal />} classes={classes} />
    </>
  )
}
