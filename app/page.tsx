import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

import logo from "@/public/logo.png"

import { AnimateOnScroll, Div } from "@/ui/animate"
import { Link } from "@/ui/Button"
import { AboutTeacher } from "@/ui/home/about-teacher"
import { AvailableEnrollments } from "@/ui/home/available-enrollments"
import { Methodology } from "@/ui/home/methodology"
import { StudentsCounter } from "@/ui/home/students-counter"
import { StudentsResults } from "@/ui/home/students-results"
import { Faq } from "@/components/Faq"

export default async function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />

      {/* <FreeContent /> */}

      <Methodology />

      <AboutTeacher />

      <StudentsResults />

      <StudentsCounter />

      <AvailableEnrollments />

      <Faq />
    </main>
  )
}

function Hero() {
  return (
    <section
      id="first"
      className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16"
    >
      <AnimateOnScroll animation="slide-to-right">
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
            href="/pre-matricula"
            className="w-max bg-primary text-black ease-out hover:bg-primary-light active:scale-90"
          >
            Quero Conhecer o Curso
            <ArrowRightIcon />
          </Link>
        </Div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-to-left">
        <Div className="flex h-full w-full items-center justify-center md:py-6">
          <Image
            src={logo}
            alt="Imagem com texto escrito Acelera Enem"
            className="h-full w-1/2 rounded-md object-cover md:w-full lg:max-h-none"
          />
        </Div>
      </AnimateOnScroll>
    </section>
  )
}

// function FreeContent() {
//   return (
//     <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6">
//       <AnimateOnScroll animation="slide-to-left">
//         <Div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-[var(--secondary-lighter)] px-8 py-8 lg:py-32">
//           <h2 className="text-center text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
//             Confira nossos conteúdos grátis
//           </h2>

//           <p className="text-center text-xl text-zinc-600">
//             Crie sua conta na plataforma Acelera Enem e explore atividades,
//             aulas e material gratuito.
//           </p>

//           <Link
//             href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`}
//             className="w-max bg-secondary-light text-white ease-out hover:!bg-secondary-light hover:!opacity-70 active:scale-90"
//           >
//             Criar conta grátis
//             <ArrowRightIcon />
//           </Link>
//         </Div>
//       </AnimateOnScroll>
//     </section>
//   )
// }
