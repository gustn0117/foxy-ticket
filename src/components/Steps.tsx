'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    top: '텔레그램 및 전화로',
    highlight: '365일 24시간 가능',
    bottom: '문의 상담하기',
    colorA: '#1E3A8A',
    colorB: '#3B82F6',
  },
  {
    num: '02',
    top: '상담원이 절차 설명 후',
    highlight: '한도 매입 진행',
    bottom: '고객이 원하는',
    colorA: '#2563EB',
    colorB: '#0EA5E9',
  },
  {
    num: '03',
    top: '기재해 주신 계좌로',
    highlight: '비상금 입금 완료',
    bottom: '원하시는 금액의',
    colorA: '#0EA5E9',
    colorB: '#F59E0B',
  },
]

const CIRC = 263.9
const TARGET = CIRC * 0.75

export default function Steps() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          ob.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="steps" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#EFF6FF] reveal">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#3B82F6] opacity-10 blur-[80px] pointer-events-none animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#0EA5E9] opacity-10 blur-[80px] pointer-events-none animate-blob-2" />

      <div className="container-x relative">
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#1E3A8A] bg-white border border-[--border-strong] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            폭시티켓 신용카드 이용 시
          </div>
          <h2 className="text-[28px] md:text-[42px] lg:text-[50px] font-black leading-tight mb-3 break-keep">
            한도만큼! <span className="text-brand-gradient">비상금 매입 순서</span>
          </h2>
          <p className="text-[14px] md:text-[17px] text-[--text-sub]">
            텔레그램 상담부터 입금까지 단 <b className="text-[#1E3A8A]">3단계</b>로 완료
          </p>
        </div>

        <div ref={wrapRef} className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-6 items-center max-w-[1100px] mx-auto">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex md:block items-center justify-center">
              <div className="step-ring">
                <svg viewBox="0 0 100 100" className="overflow-visible" aria-hidden>
                  <defs>
                    <linearGradient id={`ringG${s.num}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={s.colorA} />
                      <stop offset="100%" stopColor={s.colorB} />
                    </linearGradient>
                    <radialGradient id={`ringGlow${s.num}`} cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor={s.colorB} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={s.colorB} stopOpacity="0" />
                    </radialGradient>
                    <filter id={`ringShadow${s.num}`} x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
                      <feOffset dx="0" dy="1" result="offsetblur" />
                      <feComponentTransfer><feFuncA type="linear" slope="0.35" /></feComponentTransfer>
                      <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  <circle cx="50" cy="50" r="48" fill={`url(#ringGlow${s.num})`} />
                  <circle cx="50" cy="50" r="42" fill="#FFFFFF" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E8F0" strokeWidth="5" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={`url(#ringG${s.num})`}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={`${active ? TARGET : 0} ${CIRC}`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                    filter={`url(#ringShadow${s.num})`}
                    style={{
                      transition: `stroke-dasharray 1400ms cubic-bezier(0.22, 1, 0.36, 1) ${400 + i * 220}ms`,
                    }}
                  />
                  <circle cx="50" cy="8" r="3.5" fill={s.colorA} />
                  <circle cx="50" cy="8" r="1.5" fill="#FFFFFF" />
                </svg>

                <div className="step-ring-content">
                  <div className="text-[11px] md:text-[12px] text-[--text-light] font-medium mb-1.5 md:mb-2 break-keep">{s.top}</div>
                  <div
                    className="text-[20px] md:text-[26px] font-black tracking-[0.08em] leading-none mb-2 md:mb-2.5"
                    style={{ color: s.colorA }}
                  >
                    STEP {s.num}
                  </div>
                  <div
                    className="text-[14px] md:text-[16px] font-extrabold break-keep leading-tight"
                    style={{ color: s.colorA }}
                  >
                    {s.highlight}
                  </div>
                  <div className="text-[11px] md:text-[12px] text-[--text-light] mt-1.5 break-keep">{s.bottom}</div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <div
                    className="w-9 h-9 rounded-full bg-white shadow-[0_6px_16px_rgba(30,58,138,0.2)] border border-[--border-strong] flex items-center justify-center transition-all duration-500"
                    style={{
                      opacity: active ? 1 : 0.25,
                      transform: `scale(${active ? 1 : 0.7})`,
                      transitionDelay: `${1200 + i * 220}ms`,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-20 max-w-[820px] mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] opacity-40 blur-lg pointer-events-none" />
            <div className="relative bg-[#0A1628] rounded-full py-5 md:py-6 px-6 md:px-10 text-center border border-[#3B82F6]/30 overflow-hidden">
              <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
              <p className="relative text-[15px] md:text-[20px] font-black tracking-[-0.01em] break-keep text-white">
                <span className="text-gold-gradient">&quot; </span>
                앱카드 <span className="text-[#60A5FA] mx-1">/</span> 무이자 할부{' '}
                <span className="text-[#60A5FA] mx-1">/</span> 신용한도 영향{' '}
                <span className="text-[#EF4444]">X</span>
                <span className="text-gold-gradient"> &quot;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
