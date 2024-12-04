import { AnimateOnScroll } from "@/ui/animate"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pré-Matrículas do Curso Presencial Acelera Enem",
  description: "Faça a sua pré-matrícula.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex w-full flex-col">
      <AnimateOnScroll animation="fade-in">
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 p-5 lg:px-10 lg:py-10">
          {children}
        </section>
      </AnimateOnScroll>
    </main>
  )
}
