import { Metadata } from "next"
import { notFound } from "next/navigation"
import { AlertCircleIcon } from "lucide-react"
import consola from "consola"

import { Class } from "@/lib/api"

import { Callout } from "./components"

const HOUR_IN_SECONDS = 60 * 60 * 24

async function retrieveClassBySlug(slug: string) {
  const response = await fetch(`${process.env.API_URL}/classes?slug=${slug}`, {
    next: {
      revalidate: HOUR_IN_SECONDS,
    },
  })

  const result = (await response.json()) as
    | {
        data: null
        error: string
      }
    | {
        data: {
          class: Class
        }
      }

  if (!result.data) {
    consola.error("Failed to retrieve class by slug", result.error)

    return null
  }

  return result.data.class
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const requestedClass = await retrieveClassBySlug(params.slug)

  if (!requestedClass) {
    return {
      title: "Matrícula - Curso Presencial Acelera Enem",
    }
  }

  return {
    title: `Matrícula ${requestedClass.name} - Curso Presencial Acelera Enem`,
    description: `Realize sua matrícula na turma ${requestedClass.name.toLowerCase()} do curso presencial Acelera Enem e alcance os 900+ na Redação do ENEM. Aulas toda segunda-feira às 18h.`,
    metadataBase: new URL("http://localhost:3000"),
  }
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
  const requestedClass = await retrieveClassBySlug(params.slug)

  if (!requestedClass) {
    return notFound()
  }

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-10 py-10">
      <header className="flex items-center gap-2">
        <h1 className="text-3xl font-semibold text-black">
          {requestedClass.name}
        </h1>

        <div className="size-3 rounded-full bg-[#D2AE93]" />

        <span className="text-zinc-700">Acelera Enem</span>
      </header>

      <p className="text-zinc-600">Toda Segunda-Feira às 18h</p>

      <Callout
        icon={<AlertCircleIcon />}
        content="Você poderá cancelar sua matrícula a qualquer momento."
      />

      {children}
    </main>
  )
}
