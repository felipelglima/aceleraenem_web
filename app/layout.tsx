import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import { GoogleTagManager } from "@next/third-parties/google"

import "./globals.css"

import { BackToTop } from "@/ui/layout/back-to-top"
import { Footer } from "@/ui/layout/footer"
import { Header } from "@/ui/layout/header"
import { cn } from "@/ui/utils"
import { ConsentBanner } from "@/ui/consent-banner"

const reading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Acelera Enem: Curso de Redação Online/Presencial",
  description:
    "Conquiste sua vaga: Alcance os 900+ na Redação do ENEM. Oferecemos cursos Online e Presenciais para ajudar você a entrar na sua Universidade dos sonhos! Aceitamos pagamento em Boleto, Cartão de Crédito e PIX.",
  metadataBase: new URL("http://localhost:3000"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId="GTM-NVQ4VRKG" />
      )}

      {process.env.NODE_ENV === "production" && (
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nxzq5z8glx");
          `}
        </Script>
      )}
      <body
        id="topo"
        className={cn(
          "min-h-screen overflow-x-hidden font-sans antialiased",
          reading.variable
        )}
      >
        <Header />

        {children}

        <BackToTop />

        <Footer />

        <ConsentBanner />

        <Script src="/home/students-counter.js" />
      </body>
    </html>
  )
}
