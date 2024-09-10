"use client"

import { MessageCircleQuestionIcon } from "lucide-react"

import { SubmitButton } from "@/components/SubmitButton"
import { TextField } from "@/components/TextField"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ClassWithAvailability } from "@/lib/classes"
import { Link } from "@/ui/Button"
import { CourseContent } from "@/ui/courses/presencial/course-content"
import { useState } from "react"

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
})

const formatDate = (date: string) => dateFormatter.format(new Date(date))

export function ClassCard({
  name,
  startsAt,
  price,
  available,
  slug,
}: ClassWithAvailability) {
  const hasAlreadyStarted = new Date(startsAt).getTime() <= new Date().getTime()

  return (
    <>
      <h2 className="font-bold text-zinc-800">{name}</h2>

      <div className="flex flex-col flex-wrap gap-2 text-zinc-900">
        <span>{hasAlreadyStarted ? <>Começou dia</> : <>Começa dia</>} </span>

        <div className="flex items-center gap-2">
          <span>{formatDate(startsAt)}</span>
          {hasAlreadyStarted && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="size-auto p-2"
                    size="icon"
                  >
                    <MessageCircleQuestionIcon size={14} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    O material das aulas passadas estará disponível para você na
                    plataforma
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>

      <hr className="bg-zinc-300" />

      <p className="text-zinc-600">Toda segunda-feira as 18h</p>

      <p>R$ {price}/mês</p>

      {available ? (
        <Link
          className="text-center ease-out active:scale-90"
          href={`/curso/matricular?turma=${slug}`}
        >
          Fazer Matrícula
        </Link>
      ) : (
        <span className="text-red-600">Vagas esgotadas!</span>
      )}
    </>
  )
}

export function Course({ classes }: { classes: ClassWithAvailability[] }) {
  const [type, setType] = useState<"online" | "presencial">("presencial")

  return (
    <>
      <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
        Curso{" "}
        <span className="text-secondary">
          {type === "presencial" ? "Presencial" : "Online"}
        </span>
      </h2>

      <section className="flex w-full flex-col items-center justify-center gap-16 rounded-2xl md:border md:border-dashed md:border-zinc-400 md:p-4 lg:p-12">
        <CourseContent />
      </section>

      <ul className="flex max-h-[600px] w-full flex-col items-center justify-start gap-6 overflow-auto lg:flex-row">
        {classes.map((props) => (
          <li
            key={props.name}
            className="flex h-full w-full flex-col gap-4 rounded-xl border border-zinc-300 p-6"
          >
            <ClassCard {...props} />
          </li>
        ))}
      </ul>

      <form className="flex w-full items-center rounded-md bg-primary-dark p-4">
        <header className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-white">
            Entrar para a lista de espera
          </h2>
          <p className="text-white">
            Entre na lista de espera e seja notificado quando novas vagas
            estiverem disponiveis.
          </p>
        </header>

        <div className="flex w-full items-end gap-2 rounded-lg bg-black/5 p-4 text-white">
          <TextField label="E-mail" name="email" className="rounded-full" />
          <SubmitButton className="bg-white !font-normal text-black hover:bg-white/85">
            Quero ser notificado
          </SubmitButton>
        </div>

        {/* <li className="flex h-full w-full flex-col justify-between gap-4 rounded border border-zinc-300 p-6">
          <InterestedModal />
        </li> */}
      </form>
    </>
  )
}
