"use client"

import { useRef } from "react"
import {
  motion,
  useInView,
  useReducedMotion,
  type UseInViewOptions,
} from "motion/react"
import type { ReactNode } from "react"

const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

export const BlurFade = ({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 6,
  inViewMargin = "-50px",
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  inViewMargin?: UseInViewOptions["margin"]
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: inViewMargin })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay, duration, ease: EASE_OUT_QUINT }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
