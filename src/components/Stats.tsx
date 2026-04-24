const benefits = [
  {
    title: '94% 지급률',
    sub: '업계 최고 수준',
    desc: '신용카드 현금화',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
        <circle cx="24" cy="24" r="20" fill="url(#g1)" opacity="0.15" />
        <path d="M24 14v20M18 20l6-6 6 6M16 34h16" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="g1" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#EC4899"/><stop offset="1" stopColor="#A855F7"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: '365일 24시간',
    sub: '연중무휴 상담',
    desc: '언제든 편하게',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
        <circle cx="24" cy="24" r="18" stroke="#A855F7" strokeWidth="2.5"/>
        <path d="M24 14v10l7 4" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: '5년간 무사고',
    sub: '안전하고 신속한 업체',
    desc: '믿을 수 있는 운영',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
        <path d="M24 6l14 6v12c0 9-6 15-14 18-8-3-14-9-14-18V12l14-6z" stroke="#A855F7" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M17 24l5 5 10-10" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: '업계 1위',
    sub: '후기 수 · 재이용률',
    desc: '고객이 선택한 업체',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
        <path d="M24 6l5.5 11 12 1.5-9 8.5 2.5 12L24 33l-11 6 2.5-12-9-8.5 12-1.5L24 6z" stroke="#EC4899" strokeWidth="2.5" strokeLinejoin="round" fill="url(#g2)" fillOpacity="0.2"/>
        <defs><linearGradient id="g2" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#EC4899"/><stop offset="1" stopColor="#A855F7"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: '최대 100만원',
    sub: '핸드폰 소액 현금화',
    desc: '즉시 입금',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
        <rect x="14" y="6" width="20" height="36" rx="4" stroke="#A855F7" strokeWidth="2.5"/>
        <path d="M20 36h8" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 16h8M18 22h12M18 28h12" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: '모든 카드 가능',
    sub: '국내 카드 전 카드사',
    desc: '사용 중인 카드 그대로',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
        <rect x="6" y="12" width="36" height="24" rx="4" stroke="#EC4899" strokeWidth="2.5"/>
        <path d="M6 20h36" stroke="#EC4899" strokeWidth="2.5"/>
        <path d="M12 30h8" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section id="benefits" className="bg-white py-14 md:py-20 lg:py-24 reveal">
      <div className="container-x">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#DB2777] bg-[--brand-pink-soft] px-3 py-1 rounded-full mb-3">
            폭시티켓 6가지 혜택
          </div>
          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-black leading-tight break-keep">
            왜 <span className="text-brand-gradient">폭시티켓</span>을 선택할까요?
          </h2>
          <p className="mt-3 text-[14px] md:text-[16px] text-[--text-sub]">
            업계 최고 지급률과 무사고 운영으로 신뢰받는 카드 현금화 전문 업체
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-gradient-to-br from-white to-[#FAF5FF] rounded-2xl p-5 md:p-7 border border-[--border-strong] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(168,85,247,0.15)] transition-all duration-300"
            >
              <div className="mb-3 md:mb-4">{b.icon}</div>
              <div className="text-[16px] md:text-[20px] font-black text-[--text] leading-tight mb-1 break-keep">{b.title}</div>
              <div className="text-[12px] md:text-[14px] font-semibold text-[#A855F7] mb-1">{b.sub}</div>
              <div className="text-[11px] md:text-[13px] text-[--text-light]">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
