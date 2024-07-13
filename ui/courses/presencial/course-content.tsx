"use client"

import Image from "next/image"
import { useState } from "react"

import { materials } from "@/ui/variables"

import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/ui/animate"

import { AboutTeacher } from "@/ui/home/about-teacher"
import { Methodology } from "@/ui/home/methodology"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

type ContentType = "teacher" | "about" | "methodology" | "location"

export const CourseContent = () => {
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
          <ArrowLeftIcon />
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
          <ArrowRightIcon />
        </Button>
      </div>

      {section === "teacher" && <AboutTeacher />}
      {section === "about" && <Materials />}
      {section === "methodology" && <Methodology />}
      {section === "location" && <LocationSection />}
    </>
  )
}

function Materials() {
  return (
    <AnimateOnScroll animation="fade-in">
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
    </AnimateOnScroll>
  )
}

function LocationSection() {
  return (
    <AnimateOnScroll animation="fade-in">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-4">
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
          O <span className="text-primary">endereço</span> é
        </h2>

        <AnimateOnScroll animation="fade-in">
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
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  )
}
