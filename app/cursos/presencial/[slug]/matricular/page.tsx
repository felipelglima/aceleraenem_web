import { notFound } from "next/navigation"

import { API_URL, Class } from "@/util/api"
import { EnrollForm } from "./enroll-form"

async function getClassBySlug(slug: string) {
  const response = await fetch(`${API_URL}/api/classes?slug=${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: [`class-${slug}`],
    },
    cache: "no-cache",
  })

  const data = await response.json()

  return data as Class | null
}

export default async function Page({ params }: { params: { slug: string } }) {
  const currentClass = await getClassBySlug(params.slug)

  if (!currentClass) {
    return notFound()
  }

  return (
    <main className="flex w-full flex-col">
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16">
        <div className="flex w-full flex-col justify-center gap-6 py-6 md:py-12">
          <h1 className="text-2xl font-bold leading-normal text-zinc-800">
            Fazer Matrícula na {currentClass.name}
          </h1>

          <p className="text-zinc-600">Toda Segunda-Feira às 18h</p>

          <EnrollForm classSlug={params.slug} />
        </div>
      </section>
    </main>
  )
}
