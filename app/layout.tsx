import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import { GoogleTagManager } from "@next/third-parties/google"

import "./globals.css"

import { BackToTop } from "@/ui/layout/back-to-top"
import { Footer } from "@/ui/layout/footer"
import { Header } from "@/ui/layout/header"
import { cn } from "@/ui/utils"

const reading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Curso de Redação Acelera ENEM",
  description:
    "Conquiste sua vaga: Alcance os 900+ na Redação do ENEM. Oferecemos cursos Online e Presenciais para ajudar você a entrar na sua Universidade dos sonhos!",
  metadataBase: new URL("http://localhost:3000"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-NVQ4VRKG" />
      <body
        id="topo"
        className={cn(
          "min-h-screen overflow-x-hidden font-sans antialiased",
          reading.variable
        )}
      >
        <Header />

        {children}

        <BackToTop />

        <Footer />

        <Script src="/home/students-counter.js" />
      </body>
    </html>
  )
}
