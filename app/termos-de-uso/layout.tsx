import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso - Acelera Enem",
  description: "Termos de Uso",
  metadataBase: new URL("https://aceleraenem.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
