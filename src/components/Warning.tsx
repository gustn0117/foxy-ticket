const perks = [
  {
    title: '무이자 원금분할 상환',
    desc: '사용하시는 금액을 분할 상환할 수 있어 부담이 적습니다.',
    svg: (
      <svg viewBox="0 0 140 140" className="w-20 h-20 md:w-24 md:h-24">
        <defs>
          <linearGradient id="p1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>
          <linearGradient id="p1gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="p1shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="p1glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="70" cy="124" rx="54" ry="5" fill="url(#p1glow)" />
        <rect x="18" y="32" width="104" height="62" rx="8" fill="url(#p1)" />
        <rect x="18" y="32" width="104" height="62" rx="8" fill="url(#p1shine)" />
        <rect x="18" y="48" width="104" height="10" fill="#0A1628" opacity="0.6" />
        {/* Stacks of coins */}
        <g transform="translate(36 62)">
          <ellipse cx="10" cy="26" rx="10" ry="3" fill="#92400E" opacity="0.8" />
          <rect x="0" y="14" width="20" height="14" rx="1" fill="url(#p1gold)" />
          <ellipse cx="10" cy="14" rx="10" ry="3" fill="url(#p1gold)" />
          <ellipse cx="10" cy="14" rx="10" ry="3" fill="#fff" fillOpacity="0.25" />
        </g>
        <g transform="translate(62 56)">
          <ellipse cx="10" cy="32" rx="10" ry="3" fill="#92400E" opacity="0.8" />
          <rect x="0" y="14" width="20" height="20" rx="1" fill="url(#p1gold)" />
          <rect x="0" y="18" width="20" height="2" fill="#B45309" opacity="0.6" />
          <ellipse cx="10" cy="14" rx="10" ry="3" fill="url(#p1gold)" />
          <ellipse cx="10" cy="14" rx="10" ry="3" fill="#fff" fillOpacity="0.25" />
          <text x="10" y="28" textAnchor="middle" fill="#7C2D12" fontSize="9" fontWeight="900">₩</text>
        </g>
        <g transform="translate(88 68)">
          <ellipse cx="10" cy="20" rx="10" ry="3" fill="#92400E" opacity="0.8" />
          <rect x="0" y="8" width="20" height="14" rx="1" fill="url(#p1gold)" />
          <ellipse cx="10" cy="8" rx="10" ry="3" fill="url(#p1gold)" />
          <ellipse cx="10" cy="8" rx="10" ry="3" fill="#fff" fillOpacity="0.25" />
        </g>
      </svg>
    ),
  },
  {
    title: '업계 최고 94% 지급률',
    desc: '현존하는 업계 최고 수준의 카드 현금화 지급률을 보장합니다.',
    svg: (
      <svg viewBox="0 0 140 140" className="w-20 h-20 md:w-24 md:h-24">
        <defs>
          <linearGradient id="p2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="p2gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <radialGradient id="p2shine" cx="0.3" cy="0.3" r="0.6">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="70" cy="70" r="52" fill="url(#p2)" />
        <circle cx="70" cy="70" r="52" fill="url(#p2shine)" />
        <circle cx="70" cy="70" r="40" fill="none" stroke="#60A5FA" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" style={{ transformOrigin: '70px 70px' }} />
        <circle cx="70" cy="70" r="32" fill="url(#p2gold)" />
        <circle cx="70" cy="70" r="32" fill="url(#p2shine)" opacity="0.8" />
        <text x="70" y="78" textAnchor="middle" fill="#7C2D12" fontSize="22" fontWeight="900">94%</text>
      </svg>
    ),
  },
  {
    title: '모든 카드 현금화 가능',
    desc: '국내 모든 신용카드사, 체크카드 모두 현금화 가능합니다.',
    svg: (
      <svg viewBox="0 0 140 140" className="w-20 h-20 md:w-24 md:h-24">
        <defs>
          <linearGradient id="p3a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A1628" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="p3b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="p3c" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="p3shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="translate(8 58) rotate(-18)">
          <rect x="0" y="0" width="70" height="44" rx="7" fill="url(#p3a)" />
          <rect x="0" y="0" width="70" height="44" rx="7" fill="url(#p3shine)" />
          <rect x="8" y="13" width="14" height="10" rx="2" fill="#FDE68A" />
          <line x1="8" y1="32" x2="44" y2="32" stroke="#60A5FA" strokeWidth="1.5" />
        </g>
        <g transform="translate(30 44) rotate(-4)">
          <rect x="0" y="0" width="74" height="46" rx="7" fill="url(#p3b)" />
          <rect x="0" y="0" width="74" height="46" rx="7" fill="url(#p3shine)" />
          <rect x="8" y="14" width="14" height="10" rx="2" fill="#FCD34D" />
          <line x1="8" y1="34" x2="46" y2="34" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle cx="58" cy="16" r="5" fill="#EF4444" opacity="0.85" />
          <circle cx="66" cy="16" r="5" fill="#F59E0B" opacity="0.85" />
        </g>
        <g transform="translate(54 30) rotate(12)">
          <rect x="0" y="0" width="74" height="46" rx="7" fill="url(#p3c)" />
          <rect x="0" y="0" width="74" height="46" rx="7" fill="url(#p3shine)" />
          <rect x="8" y="14" width="14" height="10" rx="2" fill="#fff" opacity="0.9" />
          <line x1="8" y1="34" x2="48" y2="34" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.5" />
        </g>
      </svg>
    ),
  },
]

export default function Warning() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-[#0A1628] text-white reveal">
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-[#1E3A8A] opacity-40 blur-[100px] pointer-events-none animate-blob" />
      <div className="absolute -bottom-40 right-1/4 w-[520px] h-[520px] rounded-full bg-[#0EA5E9] opacity-25 blur-[120px] pointer-events-none animate-blob-2" />

      <div className="container-x relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#FCD34D] bg-white/5 border border-[#FCD34D]/30 px-3.5 py-1.5 rounded-full mb-4">
            폭시티켓만의 3가지 강점
          </div>
          <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-black leading-tight break-keep text-white">
            최저 수수료로<br className="md:hidden" />
            <span className="md:ml-2"> </span>
            <span className="text-gold-gradient">가장 많이 드립니다</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {perks.map((p) => (
            <div
              key={p.title}
              className="card-3d relative glass-card-dark rounded-2xl md:rounded-3xl p-7 md:p-9 text-center overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#3B82F6] opacity-20 blur-3xl pointer-events-none" />
              <div className="relative flex justify-center mb-5 md:mb-6 animate-float-slow">{p.svg}</div>
              <h3 className="relative text-[19px] md:text-[24px] font-black mb-2 md:mb-3 break-keep text-white">
                {p.title}
              </h3>
              <p className="relative text-[13px] md:text-[15px] text-[#CBD5E1] leading-[1.75] break-keep">{p.desc}</p>
              <span className="shine-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
