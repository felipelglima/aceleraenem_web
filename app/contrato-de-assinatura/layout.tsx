import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contrato de Assinatura - Acelera Enem",
  description: "Contrato de assinatura.",
  metadataBase: new URL("https://aceleraenem.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
