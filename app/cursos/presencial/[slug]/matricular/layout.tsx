import { Metadata } from "next"
import { notFound } from "next/navigation"

import { retrieveClassBySlugAction } from "@/actions/retrieve-class-by-slug"

export const metadata: Metadata = {
  title: "Curso XYZ",
  description:
    "Conquiste sua vaga: Alcance os 900+ na Redação do ENEM. Oferecemos cursos Online e Presenciais para ajudar você a entrar na sua Universidade dos sonhos!",
  metadataBase: new URL("https://hmg.aceleraenem.com"),
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    slug: string
  }
}>) {
  const currentClass = await retrieveClassBySlugAction({
    slug: params.slug,
  })

  if (currentClass.error) {
    throw new Error(currentClass.error)
  }

  if (!currentClass.class) {
    return notFound()
  }

  return (
    <main className="flex w-full flex-col">
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16">
        <div className="flex w-full flex-col justify-center gap-6 py-6 md:py-12">
          <h1 className="text-2xl font-bold leading-normal text-zinc-800">
            Fazer Matrícula na {currentClass.class.name}
          </h1>

          <p className="text-zinc-600">Toda Segunda-Feira às 18h</p>

          <h2 className="text-xl font-bold leading-normal text-zinc-800">
            Dados do Aluno
          </h2>

          {children}
        </div>
      </section>
    </main>
  )
}
