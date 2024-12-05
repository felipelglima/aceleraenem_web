import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Acelera Enem",
  description: "Política de Privacidade",
  metadataBase: new URL("https://aceleraenem.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
