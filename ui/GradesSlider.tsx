"use client"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const GradesSlider = (props: {
  grades: Array<{ name: string; grade: number }>
}) => {
  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 2,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
    >
      <CarouselPrevious />

      <CarouselContent className="-mt-4 h-[600px] flex-col">
        {props.grades.map((grade) => (
          <CarouselItem key={grade.name} className="basis-1/3">
            <Testimonial name={grade.name} grade={grade.grade} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext />
    </Carousel>
  )
}

function Testimonial(props: { name: string; grade: number }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded border border-zinc-300 p-6">
      <header className="flex items-center gap-2">
        <Image
          className="size-6 rounded-full bg-zinc-300 md:size-12"
          width={64}
          height={64}
          src={`https://thispersondoesnotexist.com?query=${Math.random().toString()}`}
          alt=""
        />
        <p className="text-sm text-zinc-600 md:text-2xl">{props.name}</p>
      </header>
      <strong className="text-2xl font-bold text-secondary md:text-5xl">
        {props.grade}
      </strong>
    </div>
  )
}
