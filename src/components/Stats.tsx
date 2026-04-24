'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(end: number, duration: number, suffix: string, decimal = 1) {
  const [value, setValue] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = eased * end
          setValue(current >= end ? (end % 1 === 0 ? end.toString() : end.toFixed(decimal)) : current.toFixed(decimal))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, decimal])

  return { ref, display: value + suffix }
}

export default function Stats() {
  const sat = useCountUp(99.9, 1200, '%')
  const cust = useCountUp(25000, 1400, '+', 0)
  const time = useCountUp(3, 800, '분', 0)

  return (
    <section className="px-5 pt-10 pb-8 reveal">
      <div className="bg-dark rounded-2xl p-6 flex items-center justify-around text-center relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-primary/10 rounded-full blur-3xl" />

        <div ref={sat.ref}>
          <div className="text-accent font-extrabold text-[22px] leading-none">{sat.display}</div>
          <div className="text-white/50 text-[11px] mt-1.5">만족도</div>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div ref={cust.ref}>
          <div className="text-white font-extrabold text-[22px] leading-none">
            {Number(cust.display.replace('+', '')).toLocaleString()}+
          </div>
          <div className="text-white/50 text-[11px] mt-1.5">누적고객</div>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div ref={time.ref}>
          <div className="text-[#10B981] font-extrabold text-[22px] leading-none">{time.display}</div>
          <div className="text-white/50 text-[11px] mt-1.5">평균입금</div>
        </div>
      </div>
    </section>
  )
}
