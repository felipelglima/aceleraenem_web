import { ArrowRightIcon, CornerDownRightIcon } from "lucide-react"

import { AnimateOnScroll } from "@/ui/animate"
import { Link } from "@/ui/Button"
import { modules } from "@/ui/variables"

export function MethodologyCard() {
  return (
    <AnimateOnScroll animation="fade-in">
      <section
        id="metodologia"
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-0 py-6 lg:px-6"
      >
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
          No <span className="text-primary">Curso de Redação Acelera Enem</span>{" "}
          <br className="hidden lg:inline" />
          você vai aprender
        </h2>

        <ul className="flex flex-col gap-6">
          {modules.map((mod) => (
            <AnimateOnScroll key={mod.name} animation="fade-in">
              <li className="flex items-baseline gap-2 text-sm font-medium lg:text-xl">
                <CornerDownRightIcon />
                {mod.name}
              </li>
            </AnimateOnScroll>
          ))}
        </ul>

        <Link
          href="/pre-matricula"
          className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
        >
          Quero Conhecer o Curso
          <ArrowRightIcon />
        </Link>
      </section>
    </AnimateOnScroll>
  )
}

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-0 py-6 lg:px-6 lg:pt-[calc(85px+40px)]"
    >
      <AnimateOnScroll animation="slide-to-right">
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
          No <span className="text-primary">Curso de Redação Acelera Enem</span>{" "}
          <br className="hidden lg:inline" />
          você vai aprender
        </h2>
      </AnimateOnScroll>

      <ul className="flex flex-col gap-6">
        {modules.map((mod) => (
          <AnimateOnScroll key={mod.name} animation="slide-to-right">
            <li className="flex items-baseline gap-2 text-sm font-medium lg:text-xl">
              <CornerDownRightIcon />
              {mod.name}
            </li>
          </AnimateOnScroll>
        ))}
      </ul>

      <AnimateOnScroll animation="slide-to-right">
        <Link
          href="/pre-matricula"
          className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
        >
          Quero Conhecer o Curso
          <ArrowRightIcon />
        </Link>
      </AnimateOnScroll>
    </section>
  )
}
