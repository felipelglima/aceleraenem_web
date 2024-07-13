import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cursos Acelera Enem",
  description:
    "Conquiste sua vaga: Alcance os 900+ na Redação do ENEM. Oferecemos cursos Online e Presenciais para ajudar você a entrar na sua Universidade dos sonhos!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="flex w-full flex-col">{children}</main>
}
