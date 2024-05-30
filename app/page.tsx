import Image from "next/image"
import Teacher from "../public/teacher.jpg"

import { InstagramIcon } from "@/ui/AtHandle"
import { Link } from "@/ui/Button"

import Cert1 from "../public/certificates/cert_1.jpg"
import Cert2 from "../public/certificates/cert_2.jpg"
import chart from "../public/chart.png"
import logo from "../public/logo.png"

import { ArrowRight, DownRightArrowIcon } from "@/ui/Icons"
import { VideoTrigger } from "@/ui/Video-Player/Trigger"
import { grades, materials, modules } from "./variables"
import { RevealOnScroll } from "@/ui/Reveal-on-Scroll"
import { Div } from "@/ui/Animate/Div"
import { Li } from "@/ui/Animate/Li"
import { Countdown } from "@/ui/countdown"
import { CertificateModal } from "@/ui/CertificateModal"
import { GradesSlider } from "@/ui/GradesSlider"
import { NoClassesModal } from "@/ui/full-classes/modal"

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
  return 220
}

export default async function Home() {
  const totalStudents = await getTotalStudents()
  const available = 0
  // const available = 3

  return (
    <main className="flex w-full flex-col">
      <section
        id="first"
        className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16"
      >
        <RevealOnScroll animation="slide-to-right">
          <Div className="flex w-full flex-col justify-center gap-6 md:py-32">
            <h1 className="text-4xl font-bold leading-normal text-zinc-800 lg:text-5xl">
              Conquiste sua vaga:
              <br className="hidden lg:inline" /> Alcance os{" "}
              <span className="text-primary">900+</span> na Redação do ENEM
            </h1>
            <p className="text-balance text-zinc-600">
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
          </Div>
        </RevealOnScroll>

        <RevealOnScroll animation="slide-to-left">
          <Div className="flex h-full w-full items-center justify-center md:py-6">
            <Image
              src={logo}
              alt=""
              className="h-full w-1/2 rounded-md object-cover md:w-full lg:max-h-none"
            />
          </Div>
        </RevealOnScroll>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6 lg:py-32 lg:pb-0">
        <RevealOnScroll animation="slide-to-right">
          <Div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-primary px-8 py-8 lg:py-32">
            <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
              {available > 0 ? <>Vagas Disponíveis: 3</> : <>Vagas Esgotadas</>}
            </h2>

            <p className="text-center text-xl text-zinc-600">
              {available > 0 ? (
                <>Aceitamos Cartão de Crédito, PIX e Boleto.</>
              ) : (
                <>Seja notificado quando abrirem novas vagas.</>
              )}
            </p>

            {available > 0 ? (
              <Link
                href={"/cursos"}
                className="w-max bg-black text-white ease-out hover:bg-black/25 active:scale-90"
              >
                Ver Cursos
                <ArrowRight />
              </Link>
            ) : (
              <NoClassesModal />
            )}
          </Div>
        </RevealOnScroll>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6">
        <RevealOnScroll animation="slide-to-left">
          <Div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-[var(--secondary-lighter)] px-8 py-8 lg:py-32">
            <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
              Confira nossos conteúdos grátis
            </h2>

            <p className="text-center text-xl text-zinc-600">
              Crie sua conta na plataforma Acelera Enem e explore atividades,
              aulas e material gratuito.
            </p>

            <Link
              href={process.env.NEXT_PUBLIC_DASHBOARD_URL as string}
              className="w-max bg-secondary-light text-white ease-out hover:!bg-secondary-light hover:!opacity-70 active:scale-90"
            >
              Criar conta grátis
              <ArrowRight />
            </Link>
          </Div>
        </RevealOnScroll>
      </section>

      <MethodologySection />

      <TeacherSection />

      <section
        id="resultados"
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-6 lg:gap-16 lg:py-32"
      >
        <RevealOnScroll animation="slide-to-bottom">
          <h2 className="text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
            <span className="text-primary">Resultados</span> de 2023
          </h2>
        </RevealOnScroll>

        <div className="flex w-full flex-col gap-6 lg:flex-row-reverse">
          <RevealOnScroll animation="slide-to-left">
            <div className="flex w-full flex-col items-center gap-6">
              <p className="text-xl text-zinc-600">
                97% dos alunos alcançaram 900+
              </p>

              <VideoTrigger position="top" videoId="testimonials">
                Ver depoimentos
              </VideoTrigger>

              <div className="relative flex w-full items-center justify-center">
                <video
                  controls
                  id="testimonials"
                  className="hidden h-auto w-[400px]"
                >
                  <source src="/depoimentos.mp4" type="video/mp4" />
                </video>
                <Image
                  id="testimonials-cover"
                  src={chart}
                  alt=""
                  className="w-[250px] self-center"
                />
              </div>

              <p className="text-xs text-zinc-600">
                * São contabilizados apenas os resultados enviados pelos alunos
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="slide-to-right">
            <div className="flex h-full w-full items-center gap-4">
              <section className="flex w-full flex-col gap-4">
                <GradesSlider />
                {/* {testimonials.map(({ grade, name }) => (
                <Testimonial name={name} grade={grade} key={name} />
              ))} */}
              </section>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll animation="fade-in">
          <Link
            href="/cursos"
            className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
          >
            Quero conhecer o curso
            <ArrowRight />
          </Link>
        </RevealOnScroll>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-6 py-6 lg:flex-row">
        <Countdown />

        <RevealOnScroll animation="fade-in">
          <h2 className="text-center text-xl font-bold leading-normal text-zinc-800 md:text-2xl lg:text-4xl">
            Alunos já participaram do curso.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-in">
          <Link
            href="/cursos"
            className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90 md:hidden"
          >
            Quero conhecer o curso
            <ArrowRight />
          </Link>
        </RevealOnScroll>
      </section>
    </main>
  )
}

function TeacherSection() {
  return (
    <section
      id="a-professora"
      className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-6 px-0 py-6 lg:flex-row lg:gap-16 lg:px-6"
    >
      <RevealOnScroll animation="slide-to-right">
        <Div className="flex w-full flex-col gap-6 px-2 lg:px-0">
          <h2 className="hidden text-3xl font-bold leading-normal text-zinc-800 md:block lg:text-5xl">
            Conheça sua <span className="text-primary">professora</span>
          </h2>

          <a
            href="https://www.instagram.com/profdulcegomes"
            target="_blank"
            className="flex w-max items-center gap-2 rounded border border-secondary p-2 text-secondary transition ease-out hover:bg-secondary hover:text-white active:scale-90"
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
            Atualmente, dedica-se exclusivamente ao curso que fundou em 2022,
            possui uma das maiores comunidades na área da educação que vem
            crescendo no Brasil, na qual ensina o processo da escrita com passo
            a passo para escrever uma redação com as 5 competências exigidas
            Pelo Enem - Exame Nacional do Ensino Médio.
          </p>

          <div className="flex w-full items-center gap-2">
            <CertificateModal name="Certificado" img={Cert1} />
            <CertificateModal name="Licenciatura" img={Cert2} />
          </div>

          <RevealOnScroll animation="fade-in">
            <Link
              href="/cursos"
              className="w-max self-center bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
            >
              Quero conhecer o curso
              <ArrowRight />
            </Link>
          </RevealOnScroll>
        </Div>
      </RevealOnScroll>

      <RevealOnScroll animation="slide-to-left">
        <Div className="relative w-full shrink-0 lg:!h-[765px] lg:!w-[430px]">
          <Image
            id="video-player-cover"
            className="aspect-square h-auto w-full object-cover object-top lg:h-[765px] lg:w-[430px]"
            src={Teacher}
            alt="A professora dulce gomes sentada em uma cadeira olhando para a câmera e sorrindo."
          />

          <video
            controls
            id="video-player"
            className="hidden lg:h-[765px] lg:w-[430px]"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <VideoTrigger
            position="top"
            absolute
            videoId="video-player"
            scrollIntoView
          />
        </Div>
      </RevealOnScroll>

      <h2 className="text-3xl font-bold leading-normal text-zinc-800 md:hidden lg:text-5xl">
        Conheça sua <span className="text-primary">professora</span>
      </h2>
    </section>
  )
}

function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-4 lg:py-32"
    >
      <RevealOnScroll animation="slide-to-right">
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
          No <span className="text-primary">Curso de Redação Acelera Enem</span>{" "}
          <br className="hidden lg:inline" />
          você vai aprender
        </h2>
      </RevealOnScroll>

      <ul className="flex flex-col gap-6">
        {modules.map((mod) => (
          <RevealOnScroll key={mod.name} animation="slide-to-right">
            <Li className="flex items-baseline gap-2 text-sm font-medium lg:text-xl">
              <DownRightArrowIcon />
              {mod.name}
            </Li>
          </RevealOnScroll>
        ))}
      </ul>

      <RevealOnScroll animation="slide-to-right">
        <Link
          href="/cursos"
          className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
        >
          Quero Conhecer o Curso
          <ArrowRight />
        </Link>
      </RevealOnScroll>
    </section>
  )
}
