import type { Metadata } from "next"

import { Poppins } from "next/font/google"

import "./globals.css"
import { Header } from "@/ui/Header"
import { Footer } from "@/ui/Footer"

const reading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Curso de Redação Acelera Enem",
  description:
    "O curso ideal para quem quer tirar uma boa nota na redação do Enem. Aprenda com a professora Dulce Gomes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={reading.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
