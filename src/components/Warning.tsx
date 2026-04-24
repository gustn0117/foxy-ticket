const perks = [
  {
    title: '무이자 원금분할 상환',
    desc: '사용하시는 금액 분할 상환이 가능해 부담이 적습니다.',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
        <rect x="6" y="14" width="44" height="32" rx="5" stroke="#EC4899" strokeWidth="2.5"/>
        <path d="M6 22h44" stroke="#EC4899" strokeWidth="2.5"/>
        <path d="M14 34h12" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="40" cy="34" r="3" fill="#A855F7"/>
      </svg>
    ),
  },
  {
    title: '업계 최고 94%',
    desc: '현존하는 업계 최고의 현금화 지급률을 보장합니다.',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
        <circle cx="28" cy="28" r="22" stroke="#EC4899" strokeWidth="2.5"/>
        <path d="M18 38L38 18" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="21" cy="21" r="3" fill="#EC4899"/>
        <circle cx="35" cy="35" r="3" fill="#A855F7"/>
      </svg>
    ),
  },
  {
    title: '모든 카드 현금화 가능',
    desc: '사용 중이신 모든 국내 신용카드 현금화가 가능합니다.',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
        <rect x="8" y="16" width="36" height="24" rx="4" stroke="#A855F7" strokeWidth="2.5"/>
        <rect x="14" y="22" width="36" height="24" rx="4" stroke="#EC4899" strokeWidth="2.5" fill="#FDF2F8"/>
        <path d="M14 30h36" stroke="#EC4899" strokeWidth="2.5"/>
      </svg>
    ),
  },
]

export default function Warning() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white reveal">
      <div className="container-x">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#DB2777] bg-[--brand-pink-soft] px-3 py-1 rounded-full mb-3">
            폭시티켓만의 3가지 강점
          </div>
          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-black leading-tight break-keep">
            최저 수수료로<br className="md:hidden" />
            <span className="md:ml-2"> </span>
            <span className="text-brand-gradient">가장 많이 드립니다</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {perks.map((p) => (
            <div
              key={p.title}
              className="bg-gradient-to-br from-white to-[#FDF2F8] rounded-2xl p-6 md:p-8 border border-[--border-strong] text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(236,72,153,0.12)] transition-all"
            >
              <div className="mx-auto mb-5 md:mb-6 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#FCE7F3] to-[#F3E8FF] flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-[18px] md:text-[22px] font-black mb-2 md:mb-3 break-keep text-[--text]">
                {p.title}
              </h3>
              <p className="text-[13px] md:text-[15px] text-[--text-sub] leading-[1.7] break-keep">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
