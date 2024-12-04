import { AnimateOnScroll, Div } from "@/ui/animate"
import { Link } from "@/ui/Button"
import { ArrowRightIcon } from "lucide-react"

export function PreEnrollmentSection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6 lg:py-32 lg:pb-0">
      <AnimateOnScroll animation="slide-to-left">
        <Div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-green-200 px-8 py-8 lg:py-32">
          <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            Pré-Matrícula 2025
          </h2>

          <p className="text-center text-xl text-zinc-600">
            Garanta sua vaga de 2025 com um desconto especial.
          </p>

          <Link
            className="w-max ease-out active:scale-90"
            href="/pre-matricula"
          >
            Garantir Vaga
            <ArrowRightIcon />
          </Link>
        </Div>
      </AnimateOnScroll>
    </section>
  )
}
