"use client"

import { useEffect, useState } from "react"
import { sendGAEvent } from "@next/third-parties/google"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimateOnScroll } from "./animate"

export function ConsentBanner() {
  const key = "@acelera-enem:consent"
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consentEnabled = localStorage.getItem(key)

    if (!consentEnabled) {
      setVisible(true)
      return
    }

    if (typeof window !== "undefined") {
      window?.clarity?.("consent", true)
      sendGAEvent("consent", "update", {
        analytics_storage: "granted",
      })
    }
  }, [])

  const consent = () => {
    window?.clarity?.("consent", true)
    sendGAEvent("consent", "update", {
      analytics_storage: "granted",
    })
    localStorage.setItem(key, "true")
    setVisible(false)
  }

  const close = () => {
    localStorage.setItem(key, "false")
    setVisible(false)
  }

  return (
    visible && (
      <AnimateOnScroll animation="fade-in" delay={500}>
        <div className="sticky inset-0 bottom-4 z-50 mx-auto flex h-max w-[90vw] max-w-4xl flex-col items-center gap-4 rounded-xl border border-black/15 bg-black/5 p-4 backdrop-blur-md md:flex-row">
          <p className="shrink-0">
            Utilizamos cookies para melhorar sua experiência. Saiba mais em{" "}
            <Link className="text-sky-500" href="/privacy-policy">
              privacidade
            </Link>
          </p>

          <div className="flex w-full gap-2">
            <Button onClick={consent} variant="default" className="w-full">
              Aceitar
            </Button>
            <Button
              onClick={close}
              type="button"
              variant="ghost"
              className="w-full"
            >
              Fechar
            </Button>
          </div>
        </div>
      </AnimateOnScroll>
    )
  )
}
