"use client"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
import { Class } from "@/util/api"
import { Link } from "@/ui/Button"
import { PreStudentForm } from "@/ui/full-classes/form"
import { ReactNode } from "react"

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
})

const formatDate = (date: string) => dateFormatter.format(new Date(date))

export const EnrollModal = (props: {
  children: ReactNode
  classes: (Class & { available: boolean })[]
}) => {
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
        className="sm:max-w-[725px]"
      >
        <DialogHeader>
          <DialogTitle>Turmas</DialogTitle>
        </DialogHeader>

        <ul className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
          {props.classes.map(({ name, slug, startsAt, available, price }) => (
            <li
              key={name}
              className="flex h-full w-full flex-col gap-4 rounded border border-zinc-300 p-6"
            >
              <h2 className="font-bold text-zinc-800">{name}</h2>

              <div className="flex flex-wrap text-zinc-900">
                <span>
                  {new Date(startsAt).getTime() <= new Date().getTime() ? (
                    <>Começou dia</>
                  ) : (
                    <>Começa dia</>
                  )}{" "}
                </span>
                <span>{formatDate(startsAt)}</span>
                {new Date(startsAt).getTime() <= new Date().getTime() && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex h-max w-max scale-75 items-center justify-center rounded-full bg-zinc-500 p-1 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                            />
                          </svg>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          O material das aulas passadas estará disponível para
                          você na plataforma
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>

              <hr className="bg-zinc-300" />

              <p className="text-zinc-600">Toda segunda-feira as 18h</p>

              <p>R$ {price}/mês</p>

              {available ? (
                <Link
                  className="ease-out active:scale-90"
                  href={`/cursos/presencial/${slug}/matricular`}
                >
                  Fazer Matrícula
                </Link>
              ) : (
                <span className="text-red-600">Vagas esgotadas!</span>
              )}
            </li>
          ))}

          <li className="flex h-full w-full flex-col justify-between gap-4 rounded border border-zinc-300 p-6">
            <h2 className="font-bold text-zinc-800">Lista de Espera</h2>
            <p className="text-zinc-600">
              Seja notificado quando abrirem novas vagas.
            </p>

            {props.children}
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}
