import consola from "consola"
import { AlertCircleIcon } from "lucide-react"
import { notFound } from "next/navigation"

async function retrieveClassBySlug(slug: string) {
  const response = await fetch(`${process.env.API_URL}/classes?slug=${slug}`, {
    next: {
      revalidate: 60 * 10,
      tags: ["classes"]
    },
    headers: {
      ...stagingHeaders(),
    }
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

import { Form } from "./form"
import { Callout } from "./components"

import { Class, stagingHeaders } from "@/lib/api"

export default async function Page({
  searchParams,
}: {
  searchParams: { turma: string }
}) {
  const enrollingClass = await retrieveClassBySlug(searchParams.turma)

  if (!enrollingClass) {
    return notFound()
  }

  return (
    <>
      <header className="flex items-center gap-2">
        <h1 className="text-3xl font-semibold text-black">
          {enrollingClass.name}
        </h1>

        <div className="hidden size-3 rounded-full bg-[#D2AE93] md:inline" />

        <span className="hidden text-zinc-700 md:inline">Acelera Enem</span>
      </header>

      <p className="text-zinc-600">
        Toda {enrollingClass.weekday} às {enrollingClass.classhour}h
      </p>

      <Callout
        icon={<AlertCircleIcon />}
        content="Você poderá cancelar sua matrícula a qualquer momento."
      />

      <Form slug={searchParams.turma} />
    </>
  )
}
