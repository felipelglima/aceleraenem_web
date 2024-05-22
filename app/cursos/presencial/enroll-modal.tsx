"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Class } from "@/util/api"
import { Link } from "@/ui/Button"

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
})

const formatDate = (date: string) => dateFormatter.format(new Date(date))

export const EnrollModal = (props: { classes: Class[] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition ease-out hover:bg-primary hover:text-white active:scale-90"
          variant="outline"
        >
          Ver Turmas
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Turmas</DialogTitle>
        </DialogHeader>

        <ul className="flex w-full items-center justify-center gap-6">
          {props.classes.map(({ name, slug, startsAt }) => (
            <li
              key={name}
              className="flex flex-col gap-4 rounded border border-zinc-300 p-6"
            >
              <h2 className="font-bold text-zinc-800">{name}</h2>

              <span className="text-zinc-900">
                {new Date(startsAt).getTime() <= new Date().getTime()
                  ? "Começou dia"
                  : "Começa dia"}{" "}
                {formatDate(startsAt)}
              </span>

              <span className="text-red-600">Vagas esgotadas!</span>

              <hr className="bg-zinc-300" />

              <p className="text-zinc-600">Toda segunda-feira as 18h</p>

              <Link
                className="ease-out active:scale-90"
                href={`/cursos/presencial/${slug}/matricular`}
              >
                Fazer Matrícula
              </Link>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
