"use client"

import {
  Check,
  CheckIcon,
  MessageCircleQuestionIcon,
  XIcon,
} from "lucide-react"

import NextLink from "next/link"
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
import {
  CourseContent,
  OnlineCourseContent,
} from "@/ui/courses/presencial/course-content"
import { ReactNode, useState } from "react"
import { useFormState } from "react-dom"
import { showInterestInClassAction } from "@/ui/no-available-enrollments/show-interest-in-class.action"
import { Switch } from "@/components/CourseSelectionSwitch"
import { cn } from "@/ui/utils"
import { Divider } from "@/components/Divider"

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
  weekday,
  classhour,
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

      <p className="text-zinc-600">
        Toda {weekday} as {classhour}h
      </p>

      <p>R$ {price}/mês</p>

      {available ? (
        <Link
          className="text-center ease-out active:scale-90"
          href={`/curso/matricular?turma=${slug}`}
        >
          Matrículas encerradas
        </Link>
      ) : (
        <span className="text-red-600">Vagas esgotadas!</span>
      )}
    </>
  )
}

function Interested() {
  const [state, action] = useFormState(showInterestInClassAction, {
    success: false,
  })

  return (
    <form
      action={action}
      className="flex w-full items-center rounded-md bg-primary-dark p-8"
    >
      {state.success ? (
        <>
          <header className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-white">
              Você está na lista de espera!
            </h2>
            <p className="text-white">
              Iremos te enviar um e-mail quando abrir uma vaga.
            </p>
          </header>
        </>
      ) : (
        <>
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
            <TextField
              label="E-mail"
              name="email"
              className="rounded-full text-black"
            />
            <SubmitButton className="bg-white !font-normal text-black hover:bg-white/85">
              Quero ser notificado
            </SubmitButton>
          </div>
        </>
      )}
    </form>
  )
}

export function Course({ classes }: { classes: ClassWithAvailability[] }) {
  const [type, setType] = useState<"online" | "presencial">("presencial")

  function switchType() {
    setType((t) => (t === "online" ? "presencial" : "online"))
  }

  return (
    <>
      <section className="flex w-full items-center justify-center gap-6">
        <h2
          className={cn(
            "w-1/3 text-center text-xl font-bold leading-normal text-zinc-800 transition md:text-3xl lg:text-4xl",
            type !== "presencial" && "opacity-40"
          )}
        >
          <span className="hidden md:inline">Curso</span>{" "}
          <span className="text-secondary">Presencial</span>
        </h2>

        <Switch onCheckedChange={switchType} />

        <h2
          className={cn(
            "w-1/3 text-center text-xl font-bold leading-normal text-zinc-800 transition md:text-3xl lg:text-left lg:text-4xl",
            type !== "online" && "opacity-40"
          )}
        >
          <span className="hidden md:inline">Curso</span>{" "}
          <span className="text-primary-dark">Online</span>
        </h2>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-16 rounded-2xl md:border md:border-dashed md:border-zinc-400 md:p-4 lg:p-12">
        {type === "presencial" ? <CourseContent /> : <OnlineCourseContent />}
      </section>

      <ul className="flex max-h-[600px] w-full flex-col items-center justify-start gap-6 overflow-auto lg:flex-row">
        {type === "presencial" &&
          classes.map((props) => (
            <li
              key={props.name}
              className="flex h-full w-max flex-col gap-4 rounded-xl border border-zinc-300 p-6"
            >
              <ClassCard {...props} />
            </li>
          ))}

        {type === "online" && <OnlinePlans />}
      </ul>

      <Interested />
    </>
  )
}

function OnlinePlans() {
  return (
    <div className="flex w-full items-center justify-center gap-8">
      <Pricing className="border-yellow-500 bg-yellow-500/30">
        <PricingTitle text="Plano Ouro" amount={359} />

        <Divider />

        <PricingItems
          items={[
            {
              icon: <CheckIcon color="green" />,
              text: "Atendimento Especializado",
            },
            {
              icon: <CheckIcon color="green" />,
              text: "Plataforma de Aulas Online",
            },
            {
              icon: <CheckIcon color="green" />,
              text: "1 Correção de Redação Por Mês",
            },
          ]}
          item={({ icon, text }) => (
            <>
              {icon} {text}
            </>
          )}
        />

        <Button
          asChild
          className="bg-yellow-600 font-bold uppercase text-white"
        >
          <NextLink
            aria-disabled
            // href={`/curso/matricular?turma=${"online-2025"}`}
            href={"#"}
          >
            Adquirir
          </NextLink>
        </Button>
      </Pricing>

      <Pricing className="border-zinc-500 bg-zinc-400/30">
        <PricingTitle text="Plano Prata" amount={299} />

        <Divider />

        <PricingItems
          items={[
            {
              icon: <CheckIcon color="green" />,
              text: "Atendimento Especializado",
            },
            {
              icon: <CheckIcon color="green" />,
              text: "Plataforma de Aulas Online",
            },
            {
              icon: <XIcon color="red" />,
              text: "1 Correção de Redação Por Mês",
            },
          ]}
          item={({ icon, text }) => (
            <>
              {icon} {text}
            </>
          )}
        />

        <Button asChild className="bg-zinc-600 font-bold uppercase text-white">
          <NextLink
            // href={`/curso/matricular?turma=${"online-2025"}`}
            href={"#"}
            aria-disabled
          >
            Adquirir
          </NextLink>
        </Button>
      </Pricing>
    </div>
  )
}

function PricingTitle({ text, amount }: { text: ReactNode; amount: number }) {
  return (
    <header className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold text-black">{text}</h2>

      <div className="flex items-center justify-center rounded-lg border border-black/20 px-12 py-2">
        12X DE
      </div>

      <div className="text-3xl">R$ {amount}</div>
    </header>
  )
}

function PricingItems<T extends { text: string }>({
  items,
  item,
}: {
  items: Array<T>
  item: (props: T) => JSX.Element
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((i) => (
        <li className="flex items-center gap-2" key={i.text}>
          {item(i)}
        </li>
      ))}
    </ul>
  )
}

function Pricing({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        className,
        "flex flex-col gap-6 rounded-lg border p-8 py-16"
      )}
    >
      {children}
    </div>
  )
}
