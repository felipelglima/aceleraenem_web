"use client"

import { MessageCircleQuestionIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ClassWithAvailability } from "@/lib/classes"
import { Link } from "@/ui/Button"
import { ReactNode } from "react"

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
})

const formatDate = (date: string) => dateFormatter.format(new Date(date))

export async function ClassListModal(props: {
  interestedModal: ReactNode
  classes: ClassWithAvailability[]
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"lg"}
          className="w-[150px] rounded-full bg-primary-dark px-3 py-1.5 text-xl font-bold text-white transition ease-out hover:bg-primary hover:text-white active:scale-90"
          variant="outline"
        >
          Ver Turmas
        </Button>
      </DialogTrigger>

      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="sm:max-w-[1125px]"
      >
        <DialogHeader>
          <DialogTitle>Turmas</DialogTitle>
        </DialogHeader>

        <ul className="flex max-h-[600px] w-full flex-col items-center justify-start gap-6 overflow-auto lg:flex-row">
          {props.classes.map((props) => (
            <li
              key={props.name}
              className="flex h-full w-full flex-col gap-4 rounded border border-zinc-300 p-6"
            >
              <ClassCard {...props} />
            </li>
          ))}

          <li className="flex h-full w-full flex-col justify-between gap-4 rounded border border-zinc-300 p-6">
            <h2 className="font-bold text-zinc-800">Lista de Espera</h2>
            <p className="text-zinc-600">
              Seja notificado quando abrirem novas vagas.
            </p>

            {props.interestedModal}
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}

function ClassCard({
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
          href={`/cursos/presencial/${slug}/matricular`}
        >
          Fazer Matrícula
        </Link>
      ) : (
        <span className="text-red-600">Vagas esgotadas!</span>
      )}
    </>
  )
}
