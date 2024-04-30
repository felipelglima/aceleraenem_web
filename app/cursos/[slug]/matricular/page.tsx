import { notFound, redirect } from "next/navigation"

import { Button } from "@/ui/Button"

import { createStudentAction } from "@/actions/create-student.action"

import { API_URL, Class } from "@/util/api"
import { Input } from "@/ui/Input"
import { CEPAutofill } from "./cep-autofill"
import { BirthDate } from "./birth-date"
import { enrollStudentToClass } from "@/actions/enroll-student-to-class.action"

async function getClassBySlug(slug: string) {
  const response = await fetch(`${API_URL}/api/classes?slug=${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: [`class-${slug}`],
    },
  })

  const data = await response.json()

  return data as Class | null
}

export default async function Page({ params }: { params: { slug: string } }) {
  const currentClass = await getClassBySlug(params.slug)

  if (!currentClass) {
    return notFound()
  }

  async function enrollAction(formData: FormData) {
    "use server"

    if (!currentClass) return

    const name = formData.get("name")?.toString()
    const email = formData.get("email")?.toString()
    const cpf = formData.get("cpf")?.toString()
    const phone = formData.get("phone")?.toString()
    const cep = formData.get("cep")?.toString()
    const birthDate = formData.get("birthDate")?.toString()

    if (!name || !email || !cpf || !phone || !cep || !birthDate) {
      return
    }

    const student = await createStudentAction({
      name,
      email,
      cpf,
      phone,
      address: {
        cep,
      },
      birthDate: new Date(birthDate),
    })

    if (!student) {
      console.log("could not create student")
      return
    }

    await enrollStudentToClass({
      class: currentClass,
      student,
    })

    redirect("https://app.aceleraenem.com")
  }

  return (
    <main className="flex w-full flex-col">
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16">
        <div className="flex w-full flex-col justify-center gap-6 py-6 md:py-32">
          <h1 className="text-2xl font-bold leading-normal text-zinc-800">
            Fazer Matrícula na {currentClass.name}
          </h1>

          <p className="text-zinc-600">Toda Segunda-Feira, 1h30 de duração</p>

          <form
            className="flex flex-col gap-4 rounded border border-zinc-300 p-6"
            action={enrollAction}
          >
            <h2 className="text-xl font-bold leading-normal text-zinc-800">
              Dados Pessoais
            </h2>

            <div className="flex w-full items-center gap-4">
              <Input name="name" type="text" placeholder="Nome Completo" />
              <Input name="email" type="email" placeholder="E-mail" />
            </div>

            <div className="flex w-full items-center gap-4">
              <Input
                name="cpf"
                type="text"
                placeholder="CPF (Apenas números)"
              />

              <Input
                name="phone"
                type="text"
                placeholder="Celular (Apenas números com DDD)"
              />
            </div>

            <BirthDate />

            <CEPAutofill />

            <hr className="bg-zinc-300" />

            <div className="rounded bg-yellow-100 p-4 font-medium text-yellow-800">
              Juros e multa irão incidir sobre pagamentos em atraso
            </div>

            <Button className="w-max">Matricular</Button>
          </form>
        </div>
      </section>
    </main>
  )
}
