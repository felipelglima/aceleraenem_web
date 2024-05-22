"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const options: IntersectionObserverInit = {
  threshold: 0.1,
}

export const Countdown = () => {
  const ref = useRef<HTMLDivElement>(null)

  const studentCount = 244
  const [counter, setCounter] = useState(0)
  const [counted, setCounted] = useState(false)

  const { hundred, ten, unit } = useMemo(() => {
    const [hundred, ten, unit] = counter.toString().padStart(3, "0").split("")
    return {
      hundred,
      ten,
      unit,
    }
  }, [counter])

  async function count() {
    const getElements = (i: number) => {
      let selector = "unit"

      if (i % 100 === 0) {
        // hundred animation
        selector = "hundred"
      }

      if (i % 10 === 0) {
        // ten animation
        selector = "ten"
      }

      // unit animation

      const top = ref.current?.querySelector(`.${selector} .top`)
      const topBack = ref.current?.querySelector(`.${selector} .top-back`)
      const bottom = ref.current?.querySelector(`.${selector} .bottom`)
      const bottomBack = ref.current?.querySelector(`.${selector} .bottom-back`)

      return {
        top,
        topBack,
      }
    }

    const animate = (i: number) => {
      const { top, topBack } = getElements(i)

      // @ts-expect-error
      TweenMax.to(top, 0.15, {
        rotationX: "-180deg",
        transformPerspective: 300,
        // @ts-expect-error
        ease: Quart.easeOut,
        onComplete: function () {
          // @ts-expect-error
          TweenMax.set(top, { rotationX: 0 })
        },
      })

      // @ts-expect-error
      TweenMax.to(topBack, 0.15, {
        rotationX: 0,
        transformPerspective: 300,
        // @ts-expect-error
        ease: Quart.easeOut,
        clearProps: "all",
      })
    }

    for (let i = 0; i <= studentCount; i++) {
      setCounter(i)

      animate(i)

      await new Promise((resolve) => setTimeout(resolve, 300))
    }
    setCounted(true)
  }

  useEffect(() => {
    const callback: IntersectionObserverCallback = async (entries) => {
      const [entry] = entries

      if (!ref.current) return

      if (entry.isIntersecting && !counted) {
        await count()
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
    <div ref={ref} className="mx-0 my-auto w-max">
      <div className="bloc-time hours" data-init-value="24">
        <div className="figure hundred hours-1">
          <span className="top">{hundred}</span>
          <span className="top-back">
            <span>{hundred}</span>
          </span>
          <span className="bottom">{hundred}</span>
          <span className="bottom-back">
            <span>{hundred}</span>
          </span>
        </div>

        <div className="figure ten hours-2">
          <span className="top">{ten}</span>
          <span className="top-back">
            <span>{ten}</span>
          </span>
          <span className="bottom">{ten}</span>
          <span className="bottom-back">
            <span>{ten}</span>
          </span>
        </div>

        <div className="figure unit hours-2">
          <span className="top">{unit}</span>
          <span className="top-back">
            <span>{unit}</span>
          </span>
          <span className="bottom">{unit}</span>
          <span className="bottom-back">
            <span>{unit}</span>
          </span>
        </div>
      </div>

      {/* <div className="bloc-time hours" data-init-value="24">
        <div className="figure hours hours-1">
          <span className="top">{hundred}</span>
          <span className="bottom">{hundred}</span>
        </div>

        <div className="figure hours hours-2">
          <span className="top">{ten}</span>
          <span className="bottom">{ten}</span>
        </div>

        <div className="figure hours hours-2">
          <span className="top">{unit}</span>
          <span className="bottom">{unit}</span>
        </div>
      </div> */}
    </div>
  )
}
