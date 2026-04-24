type Case = { name: string; sub: string; svg: React.ReactNode }

const cases: Case[] = [
  {
    name: '월세·공과금',
    sub: '생활비 해결',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="c1shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M40 10L10 34v32h24V50h12v16h24V34L40 10z" fill="url(#c1)" />
        <path d="M40 10L10 34v2l30-22 30 22v-2L40 10z" fill="#FCD34D" />
        <path d="M40 10L10 34v32h24V50h12v16h24V34L40 10z" fill="url(#c1shine)" />
        <rect x="30" y="56" width="20" height="10" fill="#FCD34D" />
      </svg>
    ),
  },
  {
    name: '여행·기념일',
    sub: '특별한 날',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
        <path d="M10 48l16-8 8-28 6-2 2 28 16-8 6 4-16 12 2 18-6 2-12-14-12 4-6-4z" fill="url(#c2)" />
        <path d="M10 48l16-8 8-28 6-2 2 28 16-8 6 4-16 12 2 18-6 2-12-14-12 4-6-4z" fill="#fff" fillOpacity="0.18" />
      </svg>
    ),
  },
  {
    name: '경조사비',
    sub: '갑작스런 지출',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="c3b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>
        </defs>
        <path d="M40 68c-14-10-24-18-24-30 0-8 6-14 14-14 4 0 8 2 10 5 2-3 6-5 10-5 8 0 14 6 14 14 0 12-10 20-24 30z" fill="url(#c3)" />
        <path d="M40 68c-14-10-24-18-24-30 0-8 6-14 14-14 4 0 8 2 10 5 2-3 6-5 10-5 8 0 14 6 14 14 0 12-10 20-24 30z" fill="#fff" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    name: '급전·비상금',
    sub: '긴급 자금',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <radialGradient id="c4shine" cx="0.3" cy="0.3" r="0.5">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="30" fill="url(#c4)" />
        <circle cx="40" cy="40" r="30" fill="url(#c4shine)" />
        <text x="40" y="50" textAnchor="middle" fill="#7C2D12" fontSize="28" fontWeight="900">₩</text>
      </svg>
    ),
  },
  {
    name: '사업 운영비',
    sub: '운영 자금',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
        <rect x="12" y="26" width="56" height="40" rx="4" fill="url(#c5)" />
        <rect x="28" y="18" width="24" height="12" rx="2" fill="#FCD34D" />
        <rect x="12" y="26" width="56" height="40" rx="4" fill="#fff" fillOpacity="0.12" />
        <circle cx="40" cy="46" r="6" fill="#FCD34D" />
      </svg>
    ),
  },
  {
    name: '학원·등록금',
    sub: '교육비',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
        <path d="M10 32l30-14 30 14-30 14L10 32z" fill="url(#c6)" />
        <path d="M22 38v14c0 4 8 8 18 8s18-4 18-8V38" fill="#1E3A8A" opacity="0.8" />
        <path d="M10 32l30-14 30 14-30 14L10 32z" fill="#fff" fillOpacity="0.15" />
        <line x1="66" y1="34" x2="66" y2="50" stroke="#FCD34D" strokeWidth="2" />
        <circle cx="66" cy="52" r="2" fill="#FCD34D" />
      </svg>
    ),
  },
  {
    name: '병원·의료비',
    sub: '갑작스런 치료비',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c7" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="28" fill="url(#c7)" />
        <circle cx="40" cy="40" r="28" fill="#fff" fillOpacity="0.2" />
        <rect x="34" y="24" width="12" height="32" rx="2" fill="#fff" />
        <rect x="24" y="34" width="32" height="12" rx="2" fill="#fff" />
      </svg>
    ),
  },
  {
    name: '수리·수선비',
    sub: '가전/가구',
    svg: (
      <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16">
        <defs>
          <linearGradient id="c8" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>
        </defs>
        <path d="M56 14l-10 10 10 10 8-8-10-10 10-2-8-8-10 2 10 6z" fill="#FCD34D" />
        <path d="M46 24l-26 26c-2 2-2 6 0 8s6 2 8 0l26-26" fill="url(#c8)" />
        <circle cx="22" cy="52" r="3" fill="#FCD34D" />
      </svg>
    ),
  },
]

export default function UseCases() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#EFF6FF] to-white reveal">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#1E3A8A] bg-white border border-[--border-strong] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            이럴 때 폭시티켓
          </div>
          <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-black leading-tight break-keep">
            이런 분들이 <span className="text-brand-gradient">많이 이용</span>해요
          </h2>
          <p className="mt-4 text-[14px] md:text-[17px] text-[--text-sub]">다양한 상황에서 긴급한 비상금이 필요할 때</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-5 max-w-[1040px] mx-auto">
          {cases.map((c) => (
            <div
              key={c.name}
              className="card-3d relative bg-white rounded-2xl py-6 md:py-8 px-3 text-center border border-[--border] overflow-hidden"
            >
              <div className="relative flex justify-center mb-3 animate-float-slow">{c.svg}</div>
              <div className="relative text-[14px] md:text-[17px] font-black text-[--text]">{c.name}</div>
              <div className="relative text-[11px] md:text-[13px] text-[--text-light] mt-1">{c.sub}</div>
              <span className="shine-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
