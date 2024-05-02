import { Button, Link } from "@/ui/Button"
import { slug } from "@/util/slug"
import { materials, modules } from "../page"
import { API_URL } from "@/util/api"

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
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16">
        <div className="flex w-full flex-col justify-center gap-6 py-6 md:py-32">
          <h1 className="text-4xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Curso de Redação AceleraEnem
          </h1>

          <p className="text-zinc-600">
            Transforme a nota da sua redação com a professora dulce gomes.
            Atinga a nota que você precisa para entrar na faculdade dos sonhos.
          </p>
          <hr className="bg-zinc-300" />

          <ul className="flex w-full items-center justify-center gap-6">
            {classes.map(({ name, slug, startsAt }) => (
              <li
                key={name}
                className="flex flex-col gap-4 rounded border border-zinc-300 p-6"
              >
                <h2 className="font-bold text-zinc-800">{name}</h2>

                {new Date(startsAt).getTime() <= new Date().getTime() && (
                  <span className="text-yellow-500">Em andamento</span>
                )}

                <hr className="bg-zinc-300" />

                <p className="text-zinc-600">Segunda</p>
                <p className="text-zinc-600">1h30min</p>

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
                <div className="aspect-video h-[80px] w-full rounded-md bg-zinc-300 lg:h-auto" />

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
      </section>
    </main>
  )
}
