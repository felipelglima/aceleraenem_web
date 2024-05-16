import type { Metadata } from "next"
import Script from "next/script"
import { Poppins } from "next/font/google"

import "./globals.css"

import { Header } from "@/ui/Header"
import { Footer } from "@/ui/Footer"
import { BackToTop } from "@/ui/back-to-top"
import { cn } from "@/lib/utils"

const reading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Curso de Redação Acelera ENEM",
  description:
    "Conquiste sua vaga: Alcance os 900+ na Redação do ENEM. Oferecemos cursos Online e Presenciais para ajudar você a entrar na sua Universidade dos sonhos!",
  metadataBase: new URL("https://hmg.aceleraenem.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        id="topo"
        className={cn(
          "min-h-screen overflow-x-hidden font-sans antialiased",
          reading.className
        )}
      >
        <Header />

        {children}

        <BackToTop />

        <Footer />
      </body>
    </html>
  )
}
