'use client'

import { useEffect, useRef, useState } from 'react'

export function useCountUp(
  end: number,
  { duration = 1400, decimals = 0, suffix = '', prefix = '' }: { duration?: number; decimals?: number; suffix?: string; prefix?: string } = {},
) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            const current = eased * end
            const formatted = decimals === 0
              ? Math.round(current).toLocaleString()
              : current.toFixed(decimals)
            setDisplay(`${prefix}${formatted}${suffix}`)
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, decimals, suffix, prefix])

  return { ref, display }
}
