'use client'

import { useCountUp } from '@/hooks/useCountUp'

export default function LiveStats() {
  const a = useCountUp(94, { suffix: '%', duration: 1600 })
  const b = useCountUp(25000, { suffix: '+', duration: 1800 })
  const c = useCountUp(5, { suffix: '년', duration: 1200 })
  const d = useCountUp(3, { suffix: '분', duration: 1000 })

  return (
    <section className="relative py-10 md:py-14 overflow-hidden bg-[#020617] text-white reveal">
      <div className="absolute inset-0 bg-mesh-navy opacity-80 pointer-events-none" />
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
      <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-[#1E3A8A] opacity-45 blur-[100px] pointer-events-none animate-blob" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-[#0EA5E9] opacity-30 blur-[100px] pointer-events-none animate-blob-2" />

      <div className="container-x relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { ref: a.ref, value: a.display, label: '업계 최고 지급률', accent: 'text-gold-gradient', icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 6.6L21 9.6l-5 4.6 1.4 6.6L12 17.6 6.6 20.8 8 14.2l-5-4.6 6.6-1 2.4-6.6z" fill="#FCD34D"/>
              </svg>
            ) },
            { ref: b.ref, value: b.display, label: '누적 이용 고객', accent: 'text-brand-gradient', icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="8" cy="8" r="4" fill="#60A5FA" />
                <circle cx="17" cy="9" r="3" fill="#38BDF8" opacity="0.9"/>
                <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M14 20c0-2.8 2.2-5 5-5s3 2.2 3 5" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) },
            { ref: c.ref, value: c.display, label: '무사고 운영', accent: 'text-brand-gradient', icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M8 12l3 3 5-6" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) },
            { ref: d.ref, value: d.display, label: '평균 입금 시간', accent: 'text-gold-gradient', icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#60A5FA" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) },
          ].map((s, i) => (
            <div
              key={i}
              className="relative glass-card-dark rounded-2xl px-4 py-5 md:px-6 md:py-6 text-center overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#3B82F6] opacity-15 blur-2xl pointer-events-none" />
              <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 mb-2 md:mb-3 animate-float-slow" style={{ animationDelay: `${i * 0.15}s` }}>
                {s.icon}
              </div>
              <div className={`relative text-[28px] md:text-[38px] font-black leading-none mb-1 ${s.accent}`}>
                <span ref={s.ref}>{s.value}</span>
              </div>
              <div className="relative text-[11px] md:text-[13px] text-[#94A3B8] font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
