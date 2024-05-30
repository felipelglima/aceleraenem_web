"use client"

import Image, { StaticImageData } from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { grades as loadGrades } from "@/app/variables"
import Autoscroll from "embla-carousel-auto-scroll"
import { useEffect, useState } from "react"

type Grades = Awaited<ReturnType<typeof loadGrades>>

export const GradesSlider = () => {
  const [grades, setGrades] = useState<Grades>([])

  useEffect(() => {
    async function main() {
      const g = await loadGrades()
      setGrades(g)
    }
    main()
  }, [])

  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 2,
      }}
      plugins={[
        Autoscroll({
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-mt-4 h-[300px] flex-col lg:h-[600px]">
        {grades.map((grade) => (
          <CarouselItem key={grade.name} className="basis-1/3">
            <Testimonial
              name={grade.name}
              grade={grade.grade}
              img={grade.img.default}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

function Testimonial(props: {
  name: string
  grade: number
  img: StaticImageData
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded border border-zinc-300 p-6">
      <header className="flex items-center gap-2">
        <Image
          className="size-6 rounded-full bg-zinc-300 object-cover md:size-12"
          width={64}
          height={64}
          src={props.img.src}
          alt={`Foto do aluno ${props.name}`}
        />
        <p className="text-sm text-zinc-600 md:text-2xl">{props.name}</p>
      </header>
      <strong className="text-2xl font-bold text-secondary md:text-5xl">
        {props.grade}
      </strong>
    </div>
  )
}
