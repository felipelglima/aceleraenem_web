import type { Metadata } from "next"

import { AnimateOnScroll } from "@/ui/animate"

export const metadata: Metadata = {
  title: "Cursos Presenciais Acelera Enem",
  description:
    "Conquiste sua vaga: Alcance os 900+ na Redação do ENEM. Oferecemos cursos Online e Presenciais para ajudar você a entrar na sua Universidade dos sonhos!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full flex-col p-2">
      <AnimateOnScroll animation="slide-to-right">
        <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-16 rounded-md md:border md:border-dashed md:border-zinc-400 md:p-4 lg:p-12">
          <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            Curso <span className="text-secondary">Presencial</span>
          </h2>

          {children}
        </section>
      </AnimateOnScroll>
    </div>
  )
}
