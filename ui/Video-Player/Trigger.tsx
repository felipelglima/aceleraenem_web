"use client"

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
      className={`font-text-white mt-4 flex w-max items-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition ease-out hover:bg-primary active:scale-90`}
    >
      Ver Vídeo
    </button>
  )
}
