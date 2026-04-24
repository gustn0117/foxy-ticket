'use client'

import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '@/hooks/useCountUp'

const tickerData = [
  { name: '김*수님', amount: '850,000원' },
  { name: '서*호님', amount: '750,000원' },
  { name: '박*영님', amount: '1,200,000원' },
  { name: '이*진님', amount: '500,000원' },
  { name: '최*현님', amount: '2,000,000원' },
  { name: '정*미님', amount: '350,000원' },
  { name: '강*은님', amount: '1,500,000원' },
  { name: '한*우님', amount: '900,000원' },
]

function PremiumCard3D({ tilt }: { tilt: { rx: number; ry: number } }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full max-w-[360px] md:max-w-[440px] mx-auto drop-shadow-[0_40px_60px_rgba(30,58,138,0.5)] transition-transform duration-300 ease-out"
      style={{ transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
    >
      <defs>
        <linearGradient id="cardBodyG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0A1628" />
        </linearGradient>
        <linearGradient id="cardShineG" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="chipG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <radialGradient id="chipHl" cx="0.3" cy="0.25" r="0.6">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cardEdgeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="holoG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.35" />
          <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="75%" stopColor="#FCD34D" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Back stack card */}
      <g transform="translate(34 28) rotate(-7 150 100)">
        <rect x="0" y="0" width="280" height="170" rx="18" fill="#0A1628" opacity="0.5" />
      </g>
      <g transform="translate(28 22) rotate(-3 150 100)">
        <rect x="0" y="0" width="280" height="174" rx="18" fill="#1E3A8A" opacity="0.65" />
      </g>

      {/* Main card */}
      <g transform="translate(20 14)">
        <rect x="0" y="0" width="280" height="176" rx="20" fill="url(#cardBodyG)" />
        <rect x="0" y="0" width="280" height="176" rx="20" fill="url(#cardShineG)" />
        {/* Holographic stripe */}
        <rect x="0" y="0" width="280" height="176" rx="20" fill="url(#holoG)" opacity="0.12" />

        {/* Top edge highlight */}
        <rect x="0" y="0" width="280" height="2" rx="1" fill="url(#cardEdgeG)" />

        {/* Brand label */}
        <text x="22" y="34" fill="#FFFFFF" fontSize="13" fontWeight="700" letterSpacing="2">FOXY TICKET</text>

        {/* Chip */}
        <g>
          <rect x="24" y="62" width="46" height="34" rx="6" fill="url(#chipG)" />
          <rect x="24" y="62" width="46" height="34" rx="6" fill="url(#chipHl)" />
          <path d="M31 79h32 M47 67v24" stroke="#92400E" strokeOpacity="0.55" strokeWidth="1" />
          <path d="M31 72h12 M51 72h12 M31 86h12 M51 86h12" stroke="#78350F" strokeOpacity="0.4" strokeWidth="1" />
        </g>

        {/* Contactless */}
        <g transform="translate(92 68)">
          <path d="M0 14c3-5 3-9 0-14" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M6 17c5-7 5-13 0-20" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75" />
          <path d="M12 20c7-9 7-17 0-26" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
        </g>

        {/* Number */}
        <text x="22" y="132" fill="#E0EAFA" fontFamily="monospace" fontSize="15" letterSpacing="3">
          1234 5678 9012
        </text>
        <text x="198" y="132" fill="#FFFFFF" fontFamily="monospace" fontSize="15" letterSpacing="3" fontWeight="700">3425</text>

        {/* Holder / expiry */}
        <text x="22" y="156" fill="#93C5FD" fontSize="9" letterSpacing="1.5">CARD HOLDER</text>
        <text x="22" y="167" fill="#FFFFFF" fontSize="11" letterSpacing="2" fontWeight="600">FOXY MEMBER</text>
        <text x="200" y="156" fill="#93C5FD" fontSize="9" letterSpacing="1.5">VALID THRU</text>
        <text x="200" y="167" fill="#FFFFFF" fontSize="11" letterSpacing="2" fontWeight="600">12 / 28</text>

        {/* Brand marks */}
        <g transform="translate(232 30)">
          <circle cx="12" cy="14" r="12" fill="#EF4444" opacity="0.92" />
          <circle cx="26" cy="14" r="12" fill="#F59E0B" opacity="0.92" />
          <circle cx="19" cy="14" r="9" fill="#FCD34D" opacity="0.6" />
        </g>

        {/* Shine highlight curve */}
        <path d="M0 0 Q140 80 280 0 V50 Q140 130 0 50 Z" fill="#FFFFFF" opacity="0.06" />
      </g>

      {/* Floating coin */}
      <g transform="translate(260 16)" className="animate-float-slow" style={{ transformOrigin: '280px 40px' }}>
        <circle cx="20" cy="20" r="18" fill="url(#chipG)" />
        <circle cx="20" cy="20" r="18" fill="url(#chipHl)" />
        <text x="20" y="25" textAnchor="middle" fill="#7C2D12" fontSize="15" fontWeight="900">₩</text>
      </g>
    </svg>
  )
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    const parent = canvas.parentElement as HTMLElement

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    type P = { x: number; y: number; vx: number; vy: number; r: number }
    const COUNT = 46
    const particles: P[] = []
    const init = () => {
      particles.length = 0
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.6,
        })
      }
    }

    resize()
    init()

    let rafId = 0
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(147, 197, 253, 0.85)'
        ctx.fill()
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.25 * (1 - dist / 140)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const onResize = () => {
      resize()
      init()
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />
}

export default function Hero() {
  const [tickerIdx, setTickerIdx] = useState(0)
  const [fade, setFade] = useState(true)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const cardWrapRef = useRef<HTMLDivElement>(null)

  const pct94 = useCountUp(94, { suffix: '%', duration: 1400 })
  const five = useCountUp(5, { suffix: '년', duration: 1100 })
  const avg = useCountUp(3, { suffix: '분', duration: 900 })
  const cust = useCountUp(25000, { suffix: '+', duration: 1600 })

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTickerIdx((prev) => (prev + 1) % tickerData.length)
        setFade(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const el = cardWrapRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setTilt({ rx: -y * 14, ry: x * 18 })
    }
    const onLeave = () => setTilt({ rx: 0, ry: 0 })
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0A1628] text-white">
      <div className="absolute inset-0 bg-mesh-navy opacity-90 pointer-events-none" />
      <div className="absolute inset-0 grid-bg-dark opacity-60 pointer-events-none" />
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1628]/30 to-[#0A1628] pointer-events-none" />

      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#1E3A8A] opacity-45 blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute -bottom-40 -right-24 w-[520px] h-[520px] rounded-full bg-[#0EA5E9] opacity-30 blur-[120px] animate-blob-2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#2563EB] opacity-25 blur-[90px] animate-blob pointer-events-none" />

      {/* Floating decorative orbs */}
      <div className="hidden md:block absolute top-28 left-[8%] w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse-dot" />
      <div className="hidden md:block absolute top-72 right-[12%] w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse-dot" style={{ animationDelay: '0.6s' }} />
      <div className="hidden md:block absolute bottom-40 left-[15%] w-2 h-2 rounded-full bg-[#FCD34D] animate-pulse-dot" style={{ animationDelay: '1.2s' }} />

      <div className="container-x relative pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass-card-dark text-[12px] md:text-[13px] font-semibold px-4 py-2 rounded-full mb-6 md:mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse-dot" />
              <span className="text-[#93C5FD]">365일 24시간 상담 운영 중</span>
              <span className="mx-1 w-px h-3 bg-white/20" />
              <span className="text-gold-gradient font-bold">업계 1위</span>
            </div>

            <h1 className="text-[34px] md:text-[52px] lg:text-[66px] font-black leading-[1.12] tracking-[-0.02em] mb-5 md:mb-6 animate-fade-up-delay-1">
              긴급할 때<br />
              <span className="inline-block text-navy-shine">신용카드 한도</span>를<br />
              <span className="text-gold-gradient">현금</span>으로
            </h1>

            <p className="text-[15px] md:text-[19px] text-[#CBD5E1] leading-[1.8] mb-7 md:mb-9 animate-fade-up-delay-2 break-keep max-w-[560px] mx-auto lg:mx-0">
              <b className="text-white">업계 최고 94% 지급률</b>을 보장하는 폭시티켓.<br />
              5년간 무사고 · 365일 24시간 · 앱카드/무이자 할부 가능.
            </p>

            {/* Animated stats bar */}
            <div className="grid grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-10 max-w-[580px] mx-auto lg:mx-0 animate-fade-up-delay-2">
              {[
                { v: pct94, label: '지급률', accent: 'text-gold-gradient' },
                { v: avg, label: '평균 입금', accent: 'text-brand-gradient' },
                { v: five, label: '무사고', accent: 'text-brand-gradient' },
                { v: cust, label: '누적 고객', accent: 'text-gold-gradient' },
              ].map((s, i) => (
                <div key={i} className="glass-card-dark rounded-xl px-2 py-2.5 md:py-3 text-center">
                  <div className={`text-[15px] md:text-[20px] font-black leading-none ${s.accent}`}>
                    <span ref={s.v.ref}>{s.v.display}</span>
                  </div>
                  <div className="text-[10px] md:text-[11px] text-[#94A3B8] font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 md:mb-10 animate-fade-up-delay-2">
              {[
                { t: '앱카드 결제 OK', c: '#60A5FA' },
                { t: '무이자 할부', c: '#38BDF8' },
                { t: '신용한도 영향 X', c: '#FCD34D' },
              ].map((b) => (
                <span
                  key={b.t}
                  className="inline-flex items-center gap-1.5 glass-card-dark text-[12px] md:text-[13px] font-semibold px-3.5 py-1.5 rounded-full"
                  style={{ color: b.c }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill={b.c} opacity="0.18" />
                    <path d="M8 12l3 3 5-6" stroke={b.c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b.t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 animate-fade-up-delay-3">
              <a
                href="https://t.me/foxytiket"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-[#37AEE2] to-[#1E96C8] text-white rounded-full text-[15px] md:text-[16px] font-bold shadow-[0_12px_32px_rgba(34,158,217,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                </svg>
                텔레그램 1분 상담
              </a>
              <a
                href="tel:01083520358"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] md:text-[16px] font-bold text-white animate-glow-pulse bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                010-8352-0358
              </a>
            </div>
          </div>

          <div ref={cardWrapRef} className="relative animate-fade-up-delay-2" style={{ perspective: '1000px' }}>
            <div className="relative">
              <PremiumCard3D tilt={tilt} />

              <div className="absolute -top-2 md:-top-4 left-2 md:-left-6 glass-card rounded-2xl px-4 py-3 animate-float-slow" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center shadow-lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" fill="#FCD34D"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-[--text-light] font-semibold">업계 최고</div>
                    <div className="text-[15px] font-black text-brand-gradient leading-none">94% 지급률</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 md:-bottom-6 right-2 md:-right-4 glass-card rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="text-[10px] text-[--text-light] font-semibold mb-0.5">실시간 입금</div>
                <div className="flex items-center gap-2 transition-opacity duration-300" style={{ opacity: fade ? 1 : 0 }}>
                  <span className="text-[11px] text-[--text-sub]">{tickerData[tickerIdx].name}</span>
                  <span className="text-[14px] font-black text-brand-gradient">{tickerData[tickerIdx].amount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider wave */}
      <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none" aria-hidden>
        <path d="M0 40 Q360 80 720 40 T1440 40 V80 H0 Z" fill="#F8FAFC" />
      </svg>
    </section>
  )
}
