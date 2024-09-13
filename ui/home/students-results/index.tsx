import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

import chart from "@/public/chart.png"

import { Link } from "@/ui/Button"
import { AnimateOnScroll } from "@/ui/animate"
import { VideoPlayerTrigger } from "@/ui/home/about-teacher/video-player-trigger"

import { ResultsSlider } from "./results-slider"

export function StudentsResults() {
  return (
    <section
      id="resultados"
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-6 lg:gap-16 lg:py-32"
    >
      <AnimateOnScroll animation="slide-to-bottom">
        <h2 className="text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
          <span className="text-primary">Resultados</span> de 2023
        </h2>
      </AnimateOnScroll>

      <div className="flex w-full flex-col gap-6 lg:flex-row-reverse">
        <AnimateOnScroll animation="slide-to-left">
          <div className="flex w-full flex-col items-center gap-6">
            <p className="text-xl text-zinc-600">
              97% dos alunos alcançaram 900+
            </p>

            <VideoPlayerTrigger position="top" videoElementId="testimonials">
              Ver depoimentos
            </VideoPlayerTrigger>

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
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-to-right">
          <div className="flex h-full w-full items-center gap-4">
            <section className="flex w-full flex-col gap-4">
              <ResultsSlider />
            </section>
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="fade-in">
        <Link
          href="/curso"
          className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
        >
          Quero conhecer o curso
          <ArrowRightIcon />
        </Link>
      </AnimateOnScroll>
    </section>
  )
}
