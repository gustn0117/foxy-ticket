type Brand = { name: string; color: string; accent?: string }

const brands: Brand[] = [
  { name: '신한카드', color: '#0046FF' },
  { name: '삼성카드', color: '#1428A0' },
  { name: '현대카드', color: '#0A1628' },
  { name: 'KB국민카드', color: '#60584C', accent: '#FFB100' },
  { name: '하나카드', color: '#008485' },
  { name: '우리카드', color: '#0067AC' },
  { name: '롯데카드', color: '#ED1C24' },
  { name: 'BC카드', color: '#EA0029' },
  { name: 'NH카드', color: '#00A651' },
  { name: '씨티카드', color: '#003B70' },
]

function BrandCard({ name, color, accent }: Brand) {
  return (
    <div className="relative shrink-0 w-[170px] md:w-[200px] h-[92px] md:h-[104px] mx-2 md:mx-3">
      <div className="card-3d relative w-full h-full rounded-2xl bg-white border border-[--border] overflow-hidden shadow-[0_8px_22px_rgba(15,30,61,0.06)]">
        <svg viewBox="0 0 200 104" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`bg-${name}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.04" />
              <stop offset="100%" stopColor={color} stopOpacity="0.14" />
            </linearGradient>
          </defs>
          <rect width="200" height="104" fill={`url(#bg-${name})`} />
          {/* Card illustration */}
          <g transform="translate(14 16)">
            <rect x="0" y="0" width="52" height="34" rx="5" fill={color} />
            <rect x="0" y="0" width="52" height="34" rx="5" fill="#fff" fillOpacity="0.15" />
            <rect x="5" y="8" width="10" height="7" rx="1.5" fill={accent || '#FCD34D'} />
            <line x1="5" y1="22" x2="34" y2="22" stroke="#fff" strokeOpacity="0.6" strokeWidth="1" />
            <line x1="5" y1="27" x2="24" y2="27" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" />
          </g>
        </svg>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-right">
          <div className="text-[10px] md:text-[11px] text-[--text-light] font-semibold">현금화 가능</div>
          <div className="text-[14px] md:text-[16px] font-black" style={{ color }}>{name}</div>
        </div>
        <span className="shine-overlay" />
      </div>
    </div>
  )
}

export default function Brands() {
  // Duplicate for seamless infinite scroll
  const row = [...brands, ...brands]

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-white reveal">
      <div className="container-x">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#1E3A8A] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            국내 전 카드사 현금화 가능
          </div>
          <h3 className="text-[20px] md:text-[28px] font-black leading-tight break-keep">
            사용 중이신 <span className="text-brand-gradient">모든 카드</span> 현금화 OK
          </h3>
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="relative overflow-hidden">
        <div className="ticker-track py-2">
          {row.map((b, i) => (
            <BrandCard key={`${b.name}-${i}`} {...b} />
          ))}
        </div>
      </div>
    </section>
  )
}
