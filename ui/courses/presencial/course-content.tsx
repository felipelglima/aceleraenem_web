"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

import { materials } from "@/ui/variables"

import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/ui/animate"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/select"

import { AboutTeacher, AboutTeacherCard } from "@/ui/home/about-teacher"
import { Methodology, MethodologyCard } from "@/ui/home/methodology"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

type ContentType = "about" | "teacher" | "methodology" | "photos" | "location"
type OnlineContentType = "teacher" | "methodology"

export const CourseContent = () => {
  const [section, setSection] = useState<ContentType>("about")

  const sectionName = useMemo(() => {
    const sections: Record<ContentType, string> = {
      about: "Sobre",
      teacher: "Professora",
      methodology: "Metodologia",
      photos: "Fotos",
      location: "Local",
    }

    return sections[section]
  }, [section])

  const handlePrevious = () => {
    const sections: Record<ContentType, ContentType> = {
      about: "location",
      teacher: "about",
      methodology: "teacher",
      photos: "methodology",
      location: "photos",
    }

    return setSection(sections[section])
  }

  const handleNext = () => {
    const sections: Record<ContentType, ContentType> = {
      about: "teacher",
      teacher: "methodology",
      methodology: "photos",
      photos: "location",
      location: "about",
    }

    return setSection(sections[section])
  }

  return (
    <>
      <div className="flex w-full items-center justify-between gap-2 self-center lg:w-max">
        <Button onClick={handlePrevious} variant={"ghost"} className="shrink-0">
          <ArrowLeftIcon />
        </Button>

        <div className="md:hidden">
          <Select
            value={section}
            onValueChange={(value) => setSection(value as ContentType)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={sectionName} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="about">Sobre</SelectItem>
                <SelectItem value="teacher">Professora</SelectItem>
                <SelectItem value="methodology">Metodologia</SelectItem>
                <SelectItem value="photos">Fotos</SelectItem>
                <SelectItem value="location">Local</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="hidden w-full flex-col gap-2 lg:flex lg:flex-row">
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("about")}
            variant={section === "about" ? "default" : "outline"}
          >
            Sobre
          </Button>
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("teacher")}
            variant={section === "teacher" ? "default" : "outline"}
          >
            Professora
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
            onClick={() => setSection("photos")}
            variant={section === "photos" ? "default" : "outline"}
          >
            Fotos
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

      {section === "about" && <Materials />}
      {section === "teacher" && (
        <AnimateOnScroll animation="fade-in">
          <div className="flex w-full flex-col items-center gap-8">
            <h2 className="hidden text-3xl font-bold leading-normal text-zinc-800 md:block">
              Conheça sua <span className="text-primary">professora</span>
            </h2>

            <AboutTeacherCard />
          </div>
        </AnimateOnScroll>
      )}
      {section === "methodology" && <MethodologyCard />}
      {section === "photos" && <Photos />}
      {section === "location" && <LocationSection />}
    </>
  )
}

export function OnlineCourseContent() {
  const [section, setSection] = useState<OnlineContentType>("methodology")

  const sectionName = useMemo(() => {
    switch (section) {
      case "teacher":
        return "Professora"
      case "methodology":
        return "Metodologia"
    }
  }, [section])

  const handlePrevious = () => {
    const sections: Record<OnlineContentType, OnlineContentType> = {
      methodology: "teacher",
      teacher: "methodology",
    }

    return setSection(sections[section])
  }

  const handleNext = () => {
    const sections: Record<OnlineContentType, OnlineContentType> = {
      teacher: "methodology",
      methodology: "teacher",
    }

    return setSection(sections[section])
  }

  return (
    <>
      <div className="flex w-full items-center justify-between gap-2 self-center lg:w-max">
        <Button onClick={handlePrevious} variant={"ghost"} className="shrink-0">
          <ArrowLeftIcon />
        </Button>

        <div className="md:hidden">
          <Select
            value={section}
            onValueChange={(value) => setSection(value as OnlineContentType)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={sectionName} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="teacher">Professora</SelectItem>
                <SelectItem value="methodology">Metodologia</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="hidden w-full flex-col gap-2 lg:flex lg:flex-row">
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("teacher")}
            variant={section === "teacher" ? "default" : "outline"}
          >
            Professora
          </Button>
          <Button
            className="w-full lg:w-[120px]"
            onClick={() => setSection("methodology")}
            variant={section === "methodology" ? "default" : "outline"}
          >
            Metodologia
          </Button>
        </div>

        <Button onClick={handleNext} variant={"ghost"} className="shrink-0">
          <ArrowRightIcon />
        </Button>
      </div>

      {section === "teacher" && <AboutTeacher />}
      {section === "methodology" && <Methodology />}
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
              <div className="h-[130px] w-full overflow-hidden rounded-md bg-zinc-300 lg:h-[230px]">
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

import Image01 from "../../../public/photos/01.jpg"
import Image02 from "../../../public/photos/02.jpg"
import Image06 from "../../../public/photos/06.jpg"
import Image07 from "../../../public/photos/07.jpg"
import Image08 from "../../../public/photos/08.jpg"
import Image14 from "../../../public/photos/14.jpg"
import Image15 from "../../../public/photos/15.jpg"
import Image16 from "../../../public/photos/16.jpg"
import Image17 from "../../../public/photos/17.jpg"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const pictures = [
  Image01,
  Image02,
  Image06,
  Image07,
  Image08,
  Image14,
  Image15,
  Image16,
  Image17,
]

function Photos() {
  return (
    <AnimateOnScroll animation="fade-in">
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
          Confira o Local das Aulas
        </h2>

        <ul className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
          {pictures.map((picture) => (
            <li
              key={picture.src}
              className="flex w-full flex-col gap-3 transition duration-500 ease-out hover:scale-105 hover:saturate-150"
            >
              <div className="h-[130px] w-full animate-pulse overflow-hidden rounded-md bg-zinc-300 lg:h-[230px]">
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      width={300}
                      height={300}
                      quality={50}
                      src={picture.src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px]">
                    <Image
                      width={850}
                      height={400}
                      quality={50}
                      src={picture.src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </DialogContent>
                </Dialog>
              </div>
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
      <section className="flex w-full flex-col items-center gap-10">
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
