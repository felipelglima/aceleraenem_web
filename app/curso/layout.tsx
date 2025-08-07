import { AnimateOnScroll } from "@/ui/animate"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Matrícula Curso Online e Presencial",
  description:
    "Aulas semanais com a professora Dulce Gomes em sala de aula ou assista aulas gravadas no seu próprio ritmo pela plataforma, em qualquer lugar.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex w-full flex-col">
      <AnimateOnScroll animation="fade-in">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 p-5 lg:px-10 lg:py-10">
          {children}
        </section>
      </AnimateOnScroll>
    </main>
  )
}
