import { AnimateOnScroll, Div } from "@/ui/animate"
import { Link } from "@/ui/Button"
import { ArrowRightIcon } from "lucide-react"

export function PreEnrollmentCard({
  withoutCTA = false,
}: {
  withoutCTA?: boolean
}) {
  return (
    <Div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-green-200 px-8 py-8 lg:py-32">
      <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
        Pré-Matrículas 2025 Com 10% de Desconto!
      </h2>

      <p className="text-center text-xl text-zinc-600">
        Garanta 10% de desconto na Pré-Matrícula de 2025 apenas no mês de
        janeiro.
      </p>

      <p className="text-center text-xl text-zinc-600">
        Desconto de 10% adicional para qualquer aluno que cursou em 2024!
      </p>

      {!withoutCTA && (
        <Link className="w-max ease-out active:scale-90" href="/pre-matricula">
          Garantir Minha Vaga
          <ArrowRightIcon />
        </Link>
      )}
    </Div>
  )
}

export function PreEnrollmentSection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6 lg:py-32 lg:pb-0">
      <AnimateOnScroll animation="slide-to-left">
        <PreEnrollmentCard />
      </AnimateOnScroll>
    </section>
  )
}
