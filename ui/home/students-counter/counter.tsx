"use client"

import { useEffect, useRef, useState } from "react"

import { AnimateOnScroll } from "@/ui/animate"

const options: IntersectionObserverInit = {
  threshold: 0.1,
}

export const Counter = ({ count }: { count: number }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [counted, setCounted] = useState(false)

  const emitEvent = () => {
    const event = new CustomEvent("start-counter", {
      detail: {
        count,
      },
    })
    document.dispatchEvent(event)
  }

  useEffect(() => {
    const callback: IntersectionObserverCallback = async (entries) => {
      const [entry] = entries

      if (!ref.current) return

      if (entry.isIntersecting && !counted) {
        setCounted(true)
        emitEvent()
      }
    }

    if (!ref.current) return

    const observer = new IntersectionObserver(callback, options)

    observer.observe(ref.current)

    return () => {
      return observer.disconnect()
    }
  }, [counted, ref])

  return (
    <div ref={ref} className="mx-0 my-auto flex w-max">
      <AnimateOnScroll animation="fade-in">
        <div
          id="hundreds"
          className="relative size-[80px] overflow-hidden bg-primary"
        >
          {new Array(3).fill(0).map((_, index) => (
            <div
              className="digit absolute left-0 w-full text-center text-[80px] leading-[1em] text-white transition duration-100 ease-linear"
              style={{
                top: `${index * 1}em`,
              }}
              key={index}
            >
              {index}
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in">
        <div
          id="tens"
          className="relative size-[80px] overflow-hidden bg-primary"
        >
          {new Array(10).fill(0).map((_, index) => (
            <div
              className="digit absolute left-0 w-full text-center text-[80px] leading-[1em] text-white transition duration-100 ease-linear"
              style={{
                top: `${index * 1}em`,
              }}
              key={index}
            >
              {index}
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in">
        <div
          id="units"
          className="relative size-[80px] overflow-hidden bg-primary"
        >
          {new Array(10).fill(0).map((_, index) => (
            <div
              className="digit absolute left-0 w-full text-center text-[80px] leading-[1em] text-white transition duration-100 ease-linear"
              style={{
                top: `${index * 1}em`,
              }}
              key={index}
            >
              {index}
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  )
}
