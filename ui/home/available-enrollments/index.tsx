import { ArrowRightIcon } from "lucide-react"
import { Link } from "@/ui/Button"

import { AnimateOnScroll } from "@/ui/animate"
import { Div } from "@/ui/animate/Div"

import { getTotalAvailableEnrollments } from "@/lib/enrollments/get-total-available-enrollments"
import { NoAvailableEnrollmentsModal } from "@/ui/no-available-enrollments/modal"

export async function AvailableEnrollments() {
  const totalAvailableEnrollments = await getTotalAvailableEnrollments()
  const available = totalAvailableEnrollments > 0

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6 lg:py-32 lg:pb-0">
      <AnimateOnScroll animation="slide-to-right">
        <Div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-primary px-8 py-8 lg:py-32">
          {available ? (
            <>
              <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
                Vagas Presenciais Disponíveis: {totalAvailableEnrollments}
              </h2>

              <p className="text-center text-xl text-zinc-600">
                Aceitamos Cartão de Crédito, PIX e Boleto.
              </p>

              <Link className="w-max ease-out active:scale-90" href="/curso">
                Ver Turmas
                <ArrowRightIcon />
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
                Vagas Presenciais Esgotadas
              </h2>

              <p className="text-center text-xl text-zinc-600">
                Seja notificado quando abrirem novas vagas do curso presencial.
              </p>

              <NoAvailableEnrollmentsModal />
            </>
          )}
        </Div>
      </AnimateOnScroll>
    </section>
  )
}
