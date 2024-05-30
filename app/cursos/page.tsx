import Image from "next/image"

import { materials, modules } from "@/app/variables"
import { Button, Link } from "@/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RevealOnScroll } from "@/ui/Reveal-on-Scroll"

type Class = {
  name: string
  slug: string
  startsAt: string
}

const MINUTE = 60
const FIVE_MINUTES = 5 * MINUTE

const mockClasses: Array<Class> = [
  { name: "Turma 1", slug: "turma-1", startsAt: "2024-02-02" },
]
async function getClasses() {
  return mockClasses
  // const response = await fetch(`${API_URL}/api/classes`, {
  //   next: {
  //     revalidate: FIVE_MINUTES,
  //     tags: ["classes"],
  //   },
  // })
  // const data = await response.json()

  // return data as Class[]
}

export default async function Page() {
  const classes = await getClasses()

  return (
    <main className="flex w-full flex-col">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 p-6 lg:flex-row lg:py-32">
        <RevealOnScroll animation="slide-to-right">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Online</CardTitle>
              <CardDescription>
                Assista aulas gravadas no seu próprio ritmo pela plataforma, em
                qualquer lugar.
              </CardDescription>
            </CardHeader>
            <CardContent className="cursor-not-allowed opacity-50">
              <Link className="w-max ease-out active:scale-90" href="#">
                Em breve
              </Link>
            </CardContent>
          </Card>
        </RevealOnScroll>

        <RevealOnScroll animation="slide-to-left">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Presencial</CardTitle>
              <CardDescription>
                Aulas semanais com a professora Dulce Gomes em sala de aula.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                className="w-max ease-out active:scale-90"
                href="/cursos/presencial"
              >
                Ver mais
              </Link>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </section>

      {/* <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16">
        <div className="flex w-full flex-col justify-center gap-6 py-6 md:py-32">
          <h1 className="text-2xl font-bold leading-normal text-zinc-800 lg:text-3xl">
            Curso de Redação Acelera Enem
          </h1>

          <p className="text-zinc-600">Alcance os 900+ na Redação do ENEM</p>
          <hr className="bg-zinc-300" />

          <ul className="flex w-full items-center justify-center gap-6">
            {classes.map(({ name, slug, startsAt }) => (
              <li
                key={name}
                className="flex flex-col gap-4 rounded border border-zinc-300 p-6"
              >
                <h2 className="font-bold text-zinc-800">{name}</h2>

                {new Date(startsAt).getTime() <= new Date().getTime() ? (
                  <span className="text-yellow-500">
                    Em andamento - {new Date(startsAt).toLocaleDateString()}
                  </span>
                ) : (
                  <span className="text-yellow-500">
                    Começa dia {new Date(startsAt).toLocaleDateString()}
                  </span>
                )}

                <hr className="bg-zinc-300" />

                <p className="text-zinc-600">Toda segunda-feira as 18h</p>

                <Link href={`/cursos/${slug}/matricular`}>Fazer Matrícula</Link>
              </li>
            ))}
          </ul>

          <hr className="bg-zinc-300" />

          <h2 className="text-2xl font-bold leading-normal text-zinc-800">
            No{" "}
            <span className="text-secondary-light">
              Curso de Redação Acelera Enem
            </span>{" "}
            você vai aprender
          </h2>

          <ul className="flex flex-col gap-6">
            {modules.map((mod) => (
              <li
                key={mod.name}
                className="flex items-baseline gap-2 font-medium"
              >
                {mod.name}
              </li>
            ))}
          </ul>

          <hr className="bg-zinc-300" />

          <h2 className="text-2xl font-bold leading-normal text-zinc-800">
            Você terá acesso a materiais exclusivos
          </h2>

          <ul className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
            {materials.map((material) => (
              <li key={material.name} className="flex w-full flex-col gap-6">
                <div className="h-[130px] w-full overflow-hidden rounded-md bg-zinc-300 lg:h-[320px]">
                  <Image
                    src={material.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <footer className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-zinc-800">
                    {material.name}
                  </h3>

                  <p className="text-zinc-600">{material.description}</p>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </main>
  )
}
