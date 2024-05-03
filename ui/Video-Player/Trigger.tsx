"use client"

import { ArrowRight } from "@/ui/Icons"

export const VideoTrigger = () => {
  const playVideo = () => {
    document.querySelector<HTMLImageElement>(
      "#video-player-cover"
    )!.style.display = "none"

    const video = document.querySelector<HTMLVideoElement>("#video-player")!

    video.style.display = "block"
    video.play()

    video.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={() => playVideo()}
      className={`font-text-white flex w-max items-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition hover:bg-primary`}
    >
      Ver Vídeo
      <ArrowRight />
    </button>
  )
}
