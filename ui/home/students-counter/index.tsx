import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { AnimateOnScroll } from "@/ui/animate"

import { getTotalStudentsCount } from "@/lib/get-total-students-count"

import { Counter } from "./counter"

export async function StudentsCounter() {
  const totalStudents = await getTotalStudentsCount()

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-6 py-6 lg:flex-row">
      <Counter count={totalStudents} />

      <AnimateOnScroll animation="fade-in">
        <h2 className="text-center text-xl font-bold leading-normal text-zinc-800 md:text-2xl lg:text-4xl">
          Alunos já participaram do curso.
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in">
        <Link
          href="/curso"
          className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90 md:hidden"
        >
          Quero conhecer o curso
          <ArrowRight />
        </Link>
      </AnimateOnScroll>
    </section>
  )
}
