import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contrato de Compra - Acelera Enem",
  description: "Contrato de Compra.",
  metadataBase: new URL("https://aceleraenem.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
