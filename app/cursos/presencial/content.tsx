"use client"

import { useState } from "react"
import Image from "next/image"

import { materials, modules } from "@/app/variables"

import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/ui/Reveal-on-Scroll"
import { DownRightArrowIcon } from "@/ui/Icons"

import Teacher from "../../../public/teacher.jpg"
import Cert1 from "../../../public/certificates/cert_1.jpg"
import Cert2 from "../../../public/certificates/cert_2.jpg"
import { VideoTrigger } from "@/ui/Video-Player/Trigger"
import { InstagramIcon } from "@/ui/AtHandle"
import { CertificateModal } from "@/ui/CertificateModal"
import { Link } from "@/ui/Button"
import { ArrowRight } from "@/ui/Icons"
import { ArrowLeft } from "lucide-react"

type ContentType = "teacher" | "about" | "methodology" | "location"

export const Content = () => {
  const [section, setSection] = useState<ContentType>("about")

  const handlePrevious = () => {
    if (section === "teacher") {
      return setSection("location")
    }

    if (section === "about") {
      return setSection("teacher")
    }

    if (section === "methodology") {
      return setSection("about")
    }

    if (section === "location") {
      return setSection("methodology")
    }
  }

  const handleNext = () => {
    if (section === "teacher") {
      return setSection("about")
    }

    if (section === "about") {
      return setSection("methodology")
    }

    if (section === "methodology") {
      return setSection("location")
    }

    if (section === "location") {
      return setSection("teacher")
    }
  }

  return (
    <>
      <div className="flex w-full items-center justify-between gap-2 self-center lg:w-max">
        <Button onClick={handlePrevious} variant={"ghost"} className="shrink-0">
          <ArrowLeft />
        </Button>

        <div className="flex w-full flex-col gap-2 lg:flex-row">
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("teacher")}
            variant={section === "teacher" ? "default" : "outline"}
          >
            Professora
          </Button>
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("about")}
            variant={section === "about" ? "default" : "outline"}
          >
            Sobre
          </Button>
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("methodology")}
            variant={section === "methodology" ? "default" : "outline"}
          >
            Metodologia
          </Button>
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("location")}
            variant={section === "location" ? "default" : "outline"}
          >
            Local
          </Button>
        </div>

        <Button onClick={handleNext} variant={"ghost"} className="shrink-0">
          <ArrowRight />
        </Button>
      </div>

      {section === "teacher" && <TeacherSection />}
      {section === "about" && <Materials />}
      {section === "methodology" && <MethodologySection />}
      {section === "location" && <LocationSection />}
    </>
  )
}

function Materials() {
  return (
    <RevealOnScroll animation="fade-in">
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
          Você terá <span className="text-primary">acesso</span> à
        </h2>
        <ul className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
          {materials.map((material) => (
            <li
              key={material.name}
              className="flex w-full flex-col gap-3 transition duration-500 ease-out hover:scale-105 hover:saturate-150"
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
      </div>
    </RevealOnScroll>
  )
}

function TeacherSection() {
  return (
    <RevealOnScroll animation="fade-in">
      <section
        id="a-professora"
        className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-6 px-0 py-6 lg:flex-row lg:gap-16 lg:px-6"
      >
        <div className="flex w-full flex-col gap-6 px-2 lg:px-0">
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
        </div>

        <div className="relative w-full shrink-0 lg:!h-[765px] lg:!w-[430px]">
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
            absolute
            position="top"
            videoId="video-player"
            scrollIntoView
          />
        </div>

        <h2 className="text-3xl font-bold leading-normal text-zinc-800 md:hidden lg:text-5xl">
          Conheça sua <span className="text-primary">professora</span>
        </h2>
      </section>
    </RevealOnScroll>
  )
}

function MethodologySection() {
  return (
    <RevealOnScroll animation="fade-in">
      <section
        id="metodologia"
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-4"
      >
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
          No <span className="text-primary">Curso de Redação Acelera Enem</span>{" "}
          <br className="hidden lg:inline" />
          você vai aprender
        </h2>

        <ul className="flex flex-col gap-6">
          {modules.map((mod) => (
            <li
              key={mod.name}
              className="flex items-baseline gap-2 text-sm font-medium lg:text-xl"
            >
              <DownRightArrowIcon />
              {mod.name}
            </li>
          ))}
        </ul>
      </section>
    </RevealOnScroll>
  )
}

function LocationSection() {
  return (
    <RevealOnScroll animation="fade-in">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-4">
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
          O <span className="text-primary">endereço</span> é
        </h2>

        <RevealOnScroll animation="fade-in">
          <div className="h-[500px] w-full rounded bg-zinc-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15429.897385791099!2d-39.0332874!3d-14.7986126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7390bbf0d2f194b%3A0x120a76a87f0d1935!2sCurso%20de%20Reda%C3%A7%C3%A3o%20Acelera%20Enem!5e0!3m2!1spt-BR!2sbr!4v1714681196335!5m2!1spt-BR!2sbr"
              className="h-full w-full"
              width="600"
              height="450"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </section>
    </RevealOnScroll>
  )
}
