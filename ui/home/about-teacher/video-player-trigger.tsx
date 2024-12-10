"use client"

import { ReactNode, useState } from "react"

export const VIDEO_ELEMENT_ID = "teacher-video-player"
// export const VideoPlayerTrigger = (props: {
//   videoId: string
//   scrollIntoView?: boolean
//   children?: ReactNode
//   position: "top" | "bottom"
//   absolute?: boolean
// }) => {

// this is kinda trash to be honest
export function VideoPlayerTrigger(props: {
  position: "top" | "bottom"
  absolute?: boolean
  videoElementId?: string
  texts?: [string, string]
}) {
  const [videoActive, setVideoActive] = useState(false)

  const [before, after] = props?.texts || []

  const text = videoActive ? after : before

  const playVideo = () => {
    const videoId = props.videoElementId || VIDEO_ELEMENT_ID
    const cover = document.querySelector<HTMLImageElement>(`#${videoId}-cover`)!

    const video = document.querySelector<HTMLVideoElement>(`#${videoId}`)!

    const isVideoPlaying = !!(
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
    )

    setVideoActive((ac) => !ac)

    if (isVideoPlaying) {
      video.pause()
      video.currentTime = 0

      video.style.display = "none"
      cover.style.display = "block"
      return
    }

    cover.style.display = "none"
    video.style.display = "block"
    video.play()

    // if (props.scrollIntoView) {
    video.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    // }
  }

  return (
    <button
      onClick={() => playVideo()}
      className={`font-text-white ${props.absolute && "absolute"} ${props.position === "top" ? "top-4" : "bottom-4"} left-4 z-30 flex w-max animate-pulse items-center gap-4 rounded-full bg-primary-dark px-3 py-1.5 font-bold text-white transition ease-out hover:bg-primary active:scale-90`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="size-8 text-white"
        fill="currentColor"
      >
        <path d="M3.25 4A2.25 2.25 0 0 0 1 6.25v7.5A2.25 2.25 0 0 0 3.25 16h7.5A2.25 2.25 0 0 0 13 13.75v-7.5A2.25 2.25 0 0 0 10.75 4h-7.5ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75Z" />
      </svg>

      {text}
    </button>
  )
}
