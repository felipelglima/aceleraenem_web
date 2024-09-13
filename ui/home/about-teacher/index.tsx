import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

import cert1 from "@/public/home/about-teacher/certificates/cert_1.jpg"
import cert2 from "@/public/home/about-teacher/certificates/cert_2.jpg"
import Teacher from "@/public/home/about-teacher/teacher.jpg"

import { AnimateOnScroll, Div } from "@/ui/animate"
import { Link } from "@/ui/Button"
import { InstagramIcon } from "@/ui/icons"

import { CertificateModal } from "./certificate-modal"
import { VIDEO_ELEMENT_ID, VideoPlayerTrigger } from "./video-player-trigger"

export function AboutTeacher() {
  return (
    <section
      id="a-professora"
      className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-6 px-0 py-6 lg:flex-row lg:gap-16 lg:px-6 lg:pt-[calc(85px+40px)]"
    >
      <AnimateOnScroll animation="slide-to-right">
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
            <CertificateModal name="Certificado" img={cert1} />
            <CertificateModal name="Licenciatura" img={cert2} />
          </div>

          <AnimateOnScroll animation="fade-in">
            <Link
              href="/curso"
              className="w-max self-center bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
            >
              Quero conhecer o curso
              <ArrowRightIcon />
            </Link>
          </AnimateOnScroll>
        </Div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-to-left">
        <Div className="relative w-full shrink-0 lg:!h-[765px] lg:!w-[430px]">
          <Image
            id="teacher-video-player-cover"
            className="aspect-square h-auto w-full object-cover object-top lg:h-[765px] lg:w-[430px]"
            src={Teacher}
            alt="A professora dulce gomes sentada em uma cadeira olhando para a câmera e sorrindo."
          />

          <video
            controls
            id={VIDEO_ELEMENT_ID}
            className="hidden lg:h-[765px] lg:w-[430px]"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <VideoPlayerTrigger position="top" absolute />
        </Div>
      </AnimateOnScroll>

      <h2 className="text-3xl font-bold leading-normal text-zinc-800 md:hidden lg:text-5xl">
        Conheça sua <span className="text-primary">professora</span>
      </h2>
    </section>
  )
}
