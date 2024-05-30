"use client"

import React, { useEffect, useRef } from "react"

interface RevealOnScrollProps {
  children: any // Generic type for children (any React element)
  animation?: "slide-to-right" | "slide-to-left" | "slide-to-bottom" | "fade-in"
  delay?: number
}

const options: IntersectionObserverInit = {
  threshold: 0.1,
}

export const RevealOnScroll = (props: RevealOnScrollProps) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries

      if (!ref.current) return

      if (entry.isIntersecting) {
        if (props.animation === "fade-in") {
          ref.current.style.animation = `FadeIn forwards 2s ${props.delay ?? 0}ms`
          return
        }
        ref.current.style.opacity = "1"
        if (props.animation === "slide-to-right") {
          ref.current.style.animation = "SlideToRight forwards 2s"
          return
        }
        if (props.animation === "slide-to-left") {
          ref.current.style.animation = "SlideToLeft forwards 2s"
          return
        }
        if (props.animation === "slide-to-bottom") {
          ref.current.style.animation = "SlideToBottom forwards 2s"
          return
        }
      }
    }

    if (!ref.current) return

    const observer = new IntersectionObserver(callback, options)

    observer.observe(ref.current)

    return () => {
      return observer.disconnect()
    }
  }, [props.animation, props.delay, ref])

  // @ts-ignore
  return React.cloneElement(props.children as T, {
    ref,
    style: {
      opacity: 0,
      transition: "opacity 600ms",
      ...(props.delay && { animationDelay: `${props.delay}ms` }),
    },
  })
}
