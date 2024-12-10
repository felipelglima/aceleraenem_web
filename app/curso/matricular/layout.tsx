import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Matrícula - Curso Presencial Acelera Enem",
  description: `Realize sua matrícula no curso presencial Acelera Enem e alcance os 900+ na Redação do ENEM. Aulas toda segunda-feira às 18h.`,
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 p-0 md:px-10 md:py-10">
      {children}
    </main>
  )
}
