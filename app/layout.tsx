import type { Metadata } from "next"

import { Poppins } from "next/font/google"

import "./globals.css"
import { Header } from "@/ui/Header"
import { Footer } from "@/ui/Footer"
import Script from "next/script"
import Link from "next/link"

const reading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body id="body" className={reading.className}>
        <Header />

        {children}

        <Link
          className="fixed bottom-8 right-8 rounded-full bg-primary p-4 transition hover:bg-primary-dark"
          href="#body"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9.47 4.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 6.31l-3.72 3.72a.75.75 0 1 1-1.06-1.06l4.25-4.25Zm-4.25 9.25 4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 11.31l-3.72 3.72a.75.75 0 0 1-1.06-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        <Footer />

        <Script src="/images.js" />
      </body>
    </html>
  )
}
