import Image from "next/image"
import Teacher from "../public/teacher.jpg"

import { InstagramIcon } from "@/ui/AtHandle"
import { Link } from "@/ui/Button"

import Cert1 from "../public/certificates/cert_1.jpg"
import Cert2 from "../public/certificates/cert_2.jpg"
import chart from "../public/chart.png"
import logo from "../public/logo.png"

import { ArrowRight } from "@/ui/Icons"
import { VideoTrigger } from "@/ui/Video-Player/Trigger"
import { materials, modules } from "./variables"

async function getTotalStudents() {
  // do count on the database instead of find
  // const response = await fetch(`${API_URL}/api/students?count=1`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })

  // const data: Array<any> = await response.json()

  // return data.length
  return 61
}

export default async function Home() {
  const totalStudents = await getTotalStudents()

  return (
    <main className="flex w-full flex-col">
      <section
        id="first"
        className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16"
      >
        <div className="flex w-full flex-col justify-center gap-6 py-6 md:py-32">
          <h1 className="text-4xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Conquiste sua vaga:
            <br className="hidden lg:inline" /> Alcance os{" "}
            <span className="text-primary">900+</span> na Redação do ENEM
          </h1>

          <p className="text-zinc-600">
            O Curso Acelera Enem oferece{" "}
            <strong>cursos Online e Presenciais</strong>
            <br />
            para ajudar você a entrar na sua Universidade dos sonhos!
          </p>

          <Link
            href="/cursos"
            className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
          >
            Quero Conhecer o Curso
            <ArrowRight />
          </Link>
        </div>

        <div className="h-full w-full md:py-6">
          <Image
            src={logo}
            alt=""
            className="h-full w-full rounded-md object-cover lg:max-h-none"
          />
        </div>
      </section>

      <section
        id="sobre"
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-32"
      >
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
          No{" "}
          <span className="text-secondary-light">
            Curso de Redação Acelera Enem
          </span>{" "}
          <br className="hidden lg:inline" />
          você vai aprender
        </h2>

        <ul className="flex flex-col gap-6">
          {modules.map((mod) => (
            <li
              key={mod.name}
              className="flex items-baseline gap-2 text-xl font-medium"
            >
              <DownRightArrowIcon />
              {mod.name}
            </li>
          ))}
        </ul>

        <Link
          href="/cursos"
          className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
        >
          Quero Conhecer o Curso
          <ArrowRight />
        </Link>
      </section>

      <section className="mx-auto w-full max-w-7xl p-6">
        <div className="flex flex-col items-center gap-16 rounded-md border border-dashed border-zinc-400 p-4 lg:p-12">
          <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            Você terá acesso à
          </h2>

          <ul className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
            {materials.map((material) => (
              <li
                key={material.name}
                className="flex w-full flex-col gap-3 transition hover:opacity-80"
              >
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

          <Link
            href="/cursos"
            className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
          >
            Quero Conhecer o Curso
            <ArrowRight />
          </Link>
        </div>
      </section>

      <section
        id="a-professora"
        className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-6 px-6 py-6 lg:flex-row lg:gap-16"
      >
        <div className="flex w-full flex-col gap-6">
          <h2 className="text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Conheça sua <span className="text-primary">professora</span>
          </h2>

          <a
            href="https://www.instagram.com/profdulcegomes"
            target="_blank"
            className="flex w-max items-center gap-2 rounded p-2 text-secondary transition hover:bg-zinc-200"
          >
            <InstagramIcon />
            @profdulcegomes
          </a>

          <p className="text-zinc-600">
            A professora Dulce Gomes atua há mais de 25 anos na Área de
            Educação. Graduada em Letras pela UNIP - Universidade Paulista em
            São Paulo, Pós Graduada em Neuropsicologia da Educação e Certificada
            em Curso Avançado para Corretores de Redação.
          </p>

          <p className="text-zinc-600">
            Possui ampla experiência como professora de redação, ganhando vários
            prêmios em todo o Brasil. Atuou 15 anos como professora efetiva no
            Governo do Estado de São Paulo e durante 6 anos ministrou aulas de
            Língua Portuguesa na Itália. Retornando da Itália, continuou sua
            carreira em Ilhéus em conceituadas instituições da região.
          </p>

          <p className="text-zinc-600">
            Atualmente, dedica-se exclusivamente ao curso que fundou em 2021,
            possui uma das maiores comunidades na área da educação que vem
            crescendo no Brasil, na qual ensina o processo da escrita com passo
            a passo para escrever uma redação com as 5 competências exigidas
            Pelo Enem - Exame Nacional do Ensino Médio.
          </p>

          <div className="flex w-full items-center gap-2">
            <button className="expandable-image w-full">
              <Image src={Cert1} className="h-auto w-full" alt="" />
            </button>
            <button className="expandable-image w-full">
              <Image src={Cert2} className="h-auto w-full" alt="" />
            </button>
          </div>

          <VideoTrigger />
        </div>

        <div className="h-[900px] w-full">
          <Image
            id="video-player-cover"
            className="h-full w-full rounded-md object-cover lg:max-h-none"
            src={Teacher}
            alt="A professora dulce gomes sentada em uma cadeira olhando para a câmera e sorrindo."
          />

          <video
            controls
            id="video-player"
            className="md:0 hidden h-[900px] w-full pt-4"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section
        id="resultados"
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-6 lg:flex-row-reverse lg:gap-16"
      >
        <div className="flex w-full flex-col gap-12 lg:py-32">
          <h2 className="text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            <span className="text-primary">Resultados</span> de 2023
          </h2>

          <p className="text-xl text-zinc-600">
            95% dos alunos que enviaram resultados tiraram 900+
          </p>

          <Image src={chart} alt="" className="self-center" />

          <p className="text-xl text-zinc-600">
            {totalStudents + 60} alunos fizeram o curso
          </p>

          <Link
            href="/cursos"
            className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
          >
            Quero conhecer o curso
            <ArrowRight />
          </Link>
        </div>

        <div className="flex h-full w-full items-center gap-4 lg:py-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-10 shrink-0 text-zinc-400 hover:text-zinc-500"
          >
            <g clipPath="url(#a)">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>

          <section className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-4 rounded border border-zinc-300 p-6">
              <header className="flex items-center gap-2">
                <Image
                  className="size-8 rounded-full bg-zinc-300"
                  width={32}
                  height={32}
                  src={`https://thispersondoesnotexist.com?query=${Math.random().toString()}`}
                  alt=""
                />
                <p className="text-xl text-zinc-600">Fulano Ciclano</p>
              </header>
              <strong className="text-5xl font-bold text-secondary">980</strong>
              <p className="text-center text-zinc-800">
                Adorei fazer o curso conseguir tirar uma nota gigante e passei
                em todas as faculdades do universo!
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded border border-zinc-300 p-6">
              <header className="flex items-center gap-2">
                <Image
                  className="size-8 rounded-full bg-zinc-300"
                  width={32}
                  height={32}
                  src={`https://thispersondoesnotexist.com?query=${Math.random().toString()}`}
                  alt=""
                />
                <p className="text-xl text-zinc-600">Fulano Ciclano</p>
              </header>
              <strong className="text-5xl font-bold text-secondary">980</strong>
              <p className="text-center text-zinc-800">
                Adorei fazer o curso conseguir tirar uma nota gigante e passei
                em todas as faculdades do universo!
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded border border-zinc-300 p-6">
              <header className="flex items-center gap-2">
                <Image
                  className="size-8 rounded-full bg-zinc-300"
                  width={32}
                  height={32}
                  src={`https://thispersondoesnotexist.com?query=${Math.random().toString()}`}
                  alt=""
                />
                <p className="text-xl text-zinc-600">Fulano Ciclano</p>
              </header>
              <strong className="text-5xl font-bold text-secondary">980</strong>
              <p className="text-center text-zinc-800">
                Adorei fazer o curso conseguir tirar uma nota gigante e passei
                em todas as faculdades do universo!
              </p>
            </div>
          </section>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-10 shrink-0 text-zinc-400 hover:text-zinc-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6 lg:py-32 lg:pb-0">
        <div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-primary px-8 py-32">
          <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            Faltam 3 vagas
          </h2>

          <p className="text-center text-xl text-zinc-600">
            Aceitamos Cartão de Crédito, PIX e Boleto
          </p>

          <Link
            href="/cursos"
            className="w-max bg-black text-white hover:bg-zinc-700"
          >
            Ver Cursos
            <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6">
        <div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-[var(--secondary-lighter)] px-8 py-32">
          <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            Confira nossos conteúdos grátis
          </h2>

          <p className="text-center text-xl text-zinc-600">
            Crie sua conta na plataforma Acelera Enem e explore atividades,
            aulas e material gratuito.
          </p>

          <Link
            href={process.env.DASHBOARD_URL as string}
            className="w-max bg-secondary-light text-white hover:!bg-secondary-light hover:!opacity-70"
          >
            Criar conta grátis
            <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}

function DownRightArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4 shrink-0"
    >
      <path
        d="M20.7806 17.0306L16.2806 21.5306C16.1399 21.6714 15.949 21.7504 15.75 21.7504C15.551 21.7504 15.3601 21.6714 15.2194 21.5306C15.0786 21.3899 14.9996 21.199 14.9996 21C14.9996 20.801 15.0786 20.6101 15.2194 20.4694L18.4397 17.25H6.75C6.55109 17.25 6.36032 17.171 6.21967 17.0303C6.07902 16.8897 6 16.6989 6 16.5V3C6 2.80109 6.07902 2.61032 6.21967 2.46967C6.36032 2.32902 6.55109 2.25 6.75 2.25C6.94891 2.25 7.13968 2.32902 7.28033 2.46967C7.42098 2.61032 7.5 2.80109 7.5 3V15.75H18.4397L15.2194 12.5306C15.0786 12.3899 14.9996 12.199 14.9996 12C14.9996 11.801 15.0786 11.6101 15.2194 11.4694C15.3601 11.3286 15.551 11.2496 15.75 11.2496C15.949 11.2496 16.1399 11.3286 16.2806 11.4694L20.7806 15.9694C20.8504 16.039 20.9057 16.1217 20.9434 16.2128C20.9812 16.3038 21.0006 16.4014 21.0006 16.5C21.0006 16.5986 20.9812 16.6962 20.9434 16.7872C20.9057 16.8783 20.8504 16.961 20.7806 17.0306Z"
        fill="currentColor"
      />
    </svg>
  )
}
