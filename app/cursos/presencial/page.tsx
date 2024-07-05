import Image from "next/image"

import { materials } from "@/app/variables"

import { EnrollModal } from "./enroll-modal"
import { getClasses } from "./get-classes.query"
import { Content } from "./content"
import { RevealOnScroll } from "@/ui/Reveal-on-Scroll"
import { InterestModal } from "./interest-modal"

export default async function Page() {
  const classes = await getClasses()

  return (
    <main className="flex w-full flex-col p-2">
      <RevealOnScroll animation="slide-to-right">
        <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-16 rounded-md border border-dashed border-zinc-400 p-4 lg:p-12">
          <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            Curso <span className="text-secondary">Presencial</span>
          </h2>
          <Content />

          <EnrollModal classes={classes}>
            <InterestModal />
          </EnrollModal>
        </section>
      </RevealOnScroll>
    </main>
  )
}
