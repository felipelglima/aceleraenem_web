import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AnimateOnScroll } from "@/ui/animate"
import { Link } from "@/ui/Button"

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
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 p-6 lg:flex-row lg:py-32">
      <AnimateOnScroll animation="slide-to-right">
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
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-to-left">
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
      </AnimateOnScroll>
    </section>
  )
}
