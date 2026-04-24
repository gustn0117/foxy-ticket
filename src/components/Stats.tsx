type Benefit = {
  title: string
  sub: string
  desc: string
  accent: string
  svg: React.ReactNode
}

const benefits: Benefit[] = [
  {
    title: '94% 지급률',
    sub: '업계 최고 수준',
    desc: '신용카드 현금화 업계 최고 지급률을 보장합니다.',
    accent: '#F59E0B',
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20">
        <defs>
          <linearGradient id="b1g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="b1gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <radialGradient id="b1shine" cx="0.3" cy="0.3" r="0.5">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="48" fill="url(#b1g)" />
        <circle cx="60" cy="60" r="48" fill="url(#b1shine)" />
        <circle cx="60" cy="60" r="36" fill="url(#b1gold)" />
        <circle cx="60" cy="60" r="36" fill="url(#b1shine)" opacity="0.6" />
        <text x="60" y="68" textAnchor="middle" fill="#1E293B" fontSize="22" fontWeight="900">94%</text>
      </svg>
    ),
  },
  {
    title: '365일 24시간',
    sub: '연중무휴 상담',
    desc: '새벽에도 즉시 응답, 언제든 편하게 상담받으세요.',
    accent: '#0EA5E9',
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20">
        <defs>
          <linearGradient id="b2g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
          <radialGradient id="b2shine" cx="0.3" cy="0.25" r="0.6">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="50" fill="url(#b2g)" />
        <circle cx="60" cy="60" r="50" fill="url(#b2shine)" />
        <circle cx="60" cy="60" r="38" fill="none" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="3 3" className="animate-spin-slow" style={{ transformOrigin: '60px 60px' }} />
        <circle cx="60" cy="60" r="30" fill="#0A1628" />
        <g stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round">
          <line x1="60" y1="34" x2="60" y2="40" />
          <line x1="86" y1="60" x2="80" y2="60" />
          <line x1="60" y1="86" x2="60" y2="80" />
          <line x1="34" y1="60" x2="40" y2="60" />
        </g>
        <line x1="60" y1="60" x2="60" y2="44" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="60" x2="72" y2="60" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="60" r="3" fill="#FCD34D" />
      </svg>
    ),
  },
  {
    title: '5년간 무사고',
    sub: '안전·신속',
    desc: '5년간 무사고 운영, 신뢰할 수 있는 전문 업체입니다.',
    accent: '#60A5FA',
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20">
        <defs>
          <linearGradient id="b3g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="b3shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M60 12l36 14v26c0 22-15 38-36 44-21-6-36-22-36-44V26l36-14z" fill="url(#b3g)" />
        <path d="M60 12l36 14v26c0 22-15 38-36 44-21-6-36-22-36-44V26l36-14z" fill="url(#b3shine)" />
        <path d="M60 12l36 14v0l-36 16-36-16v0l36-14z" fill="#fff" fillOpacity="0.12" />
        <path d="M42 58l12 12 24-24" stroke="#FCD34D" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: '업계 1위',
    sub: '재이용률·후기 수',
    desc: '고객이 선택한 카드 현금화 업체 1위.',
    accent: '#FCD34D',
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20">
        <defs>
          <linearGradient id="b4g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
          <linearGradient id="b4inner" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <radialGradient id="b4shine" cx="0.3" cy="0.25" r="0.55">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M60 10l13 26 29 4-21 20 5 29-26-14-26 14 5-29-21-20 29-4z" fill="url(#b4g)" />
        <path d="M60 10l13 26 29 4-21 20 5 29-26-14-26 14 5-29-21-20 29-4z" fill="url(#b4shine)" />
        <circle cx="60" cy="58" r="18" fill="url(#b4inner)" />
        <text x="60" y="66" textAnchor="middle" fill="#FCD34D" fontSize="20" fontWeight="900">1</text>
      </svg>
    ),
  },
  {
    title: '최대 100만원',
    sub: '핸드폰 소액 현금화',
    desc: '통신사 소액결제·정보이용료 한도 즉시 현금화.',
    accent: '#38BDF8',
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20">
        <defs>
          <linearGradient id="b5g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F1E3D" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="b5screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
        <rect x="36" y="14" width="48" height="92" rx="10" fill="url(#b5g)" />
        <rect x="40" y="22" width="40" height="70" rx="4" fill="url(#b5screen)" />
        <rect x="40" y="22" width="40" height="70" rx="4" fill="#fff" fillOpacity="0.08" />
        <circle cx="60" cy="100" r="3" fill="#94A3B8" />
        <rect x="53" y="18" width="14" height="2" rx="1" fill="#0A1628" />
        {/* Money stack on screen */}
        <g>
          <rect x="46" y="32" width="28" height="14" rx="2" fill="#F59E0B" />
          <rect x="46" y="32" width="28" height="14" rx="2" fill="#fff" fillOpacity="0.25" />
          <text x="60" y="42" textAnchor="middle" fill="#7C2D12" fontSize="8" fontWeight="900">₩ 100</text>
          <rect x="46" y="50" width="28" height="14" rx="2" fill="#FCD34D" opacity="0.88" />
          <rect x="46" y="68" width="28" height="14" rx="2" fill="#FDE68A" opacity="0.78" />
        </g>
      </svg>
    ),
  },
  {
    title: '모든 카드 가능',
    sub: '국내 전 카드사',
    desc: '사용 중이신 모든 국내 신용카드 현금화 가능합니다.',
    accent: '#2563EB',
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20">
        <defs>
          <linearGradient id="b6g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>
          <linearGradient id="b6g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="b6g3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="b6shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="translate(14 52) rotate(-14)">
          <rect x="0" y="0" width="64" height="40" rx="6" fill="url(#b6g1)" />
          <rect x="0" y="0" width="64" height="40" rx="6" fill="url(#b6shine)" />
          <rect x="8" y="12" width="12" height="8" rx="2" fill="#FDE68A" />
          <line x1="8" y1="30" x2="36" y2="30" stroke="#60A5FA" strokeWidth="1.5" />
        </g>
        <g transform="translate(30 42) rotate(-2)">
          <rect x="0" y="0" width="64" height="40" rx="6" fill="url(#b6g2)" />
          <rect x="0" y="0" width="64" height="40" rx="6" fill="url(#b6shine)" />
          <rect x="8" y="12" width="12" height="8" rx="2" fill="#FCD34D" />
          <line x1="8" y1="30" x2="40" y2="30" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
        </g>
        <g transform="translate(44 32) rotate(10)">
          <rect x="0" y="0" width="64" height="40" rx="6" fill="url(#b6g3)" />
          <rect x="0" y="0" width="64" height="40" rx="6" fill="url(#b6shine)" />
          <rect x="8" y="12" width="12" height="8" rx="2" fill="#fff" opacity="0.85" />
          <line x1="8" y1="30" x2="42" y2="30" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
        </g>
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section id="benefits" className="relative py-16 md:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden reveal">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-[#2563EB] opacity-10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0EA5E9] opacity-10 blur-[80px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#1E3A8A] bg-white border border-[--border-strong] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            폭시티켓 6가지 혜택
          </div>
          <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-black leading-tight break-keep">
            왜 <span className="text-brand-gradient">폭시티켓</span>을 선택할까요?
          </h2>
          <p className="mt-4 text-[14px] md:text-[17px] text-[--text-sub] max-w-[620px] mx-auto break-keep">
            업계 최고 지급률과 무사고 운영으로 신뢰받는 카드 현금화 전문 업체
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group card-3d relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 border border-[--border] shadow-[0_4px_20px_rgba(15,30,61,0.05)] overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: b.accent }}
              />

              <div className="relative mb-4 md:mb-5 inline-flex animate-float-slow" style={{ animationDelay: `${i * 0.15}s` }}>
                {b.svg}
              </div>
              <div className="relative">
                <div className="text-[18px] md:text-[22px] font-black text-[--text] leading-tight mb-1 break-keep">{b.title}</div>
                <div className="text-[12px] md:text-[14px] font-bold text-[#1E3A8A] mb-2">{b.sub}</div>
                <div className="text-[12px] md:text-[14px] text-[--text-sub] leading-[1.65] break-keep">{b.desc}</div>
              </div>

              <span className="shine-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
