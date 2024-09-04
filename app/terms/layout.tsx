import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso - Acelera Enem",
  description: "Termos de Uso",
  metadataBase: new URL("http://localhost:3000"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
