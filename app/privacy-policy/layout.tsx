import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Acelera Enem",
  description: "Política de Privacidade",
  metadataBase: new URL("http://localhost:3000"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
