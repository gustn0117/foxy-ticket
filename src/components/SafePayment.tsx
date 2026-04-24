const limits = [
  {
    label: '소액결제 한도',
    amount: '100만원',
    sub: '핸드폰 결제 한도 활용',
    color: 'from-[#FCE7F3] to-[#FBCFE8]',
    accent: 'text-[#DB2777]',
  },
  {
    label: '정보이용료 한도',
    amount: '100만원',
    sub: '통신사 정보이용료 한도',
    color: 'from-[#F3E8FF] to-[#E9D5FF]',
    accent: 'text-[#7C3AED]',
  },
  {
    label: '신용카드 한도',
    amount: '1,000만원',
    sub: '최대 12개월 무이자 할부',
    color: 'from-[#FCE7F3] via-[#F3E8FF] to-[#E9D5FF]',
    accent: 'text-brand-gradient',
    isPrimary: true,
  },
]

export default function SafePayment() {
  return (
    <section id="intro" className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-[#FDF2F8] to-white reveal">
      <div className="container-x">
        <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-14">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#7C3AED] bg-[--brand-purple-soft] px-3 py-1 rounded-full mb-3">
            신용카드 현금화란?
          </div>
          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-black leading-tight break-keep mb-4">
            긴급할 때 활용하는<br className="md:hidden" />
            <span className="text-brand-gradient"> 나만의 비상금</span>
          </h2>
          <p className="text-[14px] md:text-[17px] text-[--text-sub] leading-[1.8] break-keep">
            신용카드 현금화는 <b className="text-[--text]">긴급한 자금이 필요할 때 신용카드 결제 한도를 활용해 현금을 확보</b>하는 방식입니다.
            폭시티켓은 업계 최저 수수료로 빠르고 안전하게 처리해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
          {limits.map((l) => (
            <div
              key={l.label}
              className={`relative rounded-2xl p-6 md:p-8 bg-gradient-to-br ${l.color} border border-[--border-strong] ${l.isPrimary ? 'md:scale-[1.02] md:shadow-[0_16px_40px_rgba(168,85,247,0.18)]' : ''}`}
            >
              {l.isPrimary && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-white text-[11px] md:text-[12px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  가장 많이 이용
                </span>
              )}
              <div className="text-[13px] md:text-[14px] font-semibold text-[--text-sub] mb-2">{l.label}</div>
              <div className={`text-[32px] md:text-[40px] lg:text-[44px] font-black leading-none mb-3 ${l.accent}`}>
                {l.amount}
              </div>
              <div className="text-[12px] md:text-[14px] text-[--text-sub]">{l.sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-7 md:p-10 text-center border border-[--border-strong] shadow-[0_12px_40px_rgba(168,85,247,0.08)] max-w-[760px] mx-auto">
          <div className="inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-bold text-white bg-gradient-to-r from-[#EC4899] to-[#A855F7] px-3 py-1.5 rounded-full mb-4">
            업계 최고 94% 지급률 보장
          </div>
          <div className="text-[28px] md:text-[40px] lg:text-[44px] font-black tracking-[-1px] leading-none mb-3">
            <span className="text-shimmer">내 한도 즉시 확인</span>
          </div>
          <p className="text-[13px] md:text-[15px] text-[--text-sub] mb-6">언제 어디서든 가능한 나만의 비상금, 폭시티켓</p>
          <a
            href="https://open.kakao.com/o/skv91Efi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-white rounded-xl md:rounded-full text-[15px] md:text-[16px] font-bold shadow-[0_8px_24px_rgba(236,72,153,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="3" stroke="#fff" strokeWidth="2" />
              <path d="M2 10h20" stroke="#fff" strokeWidth="2" />
            </svg>
            내 입금액 1분 조회하기
          </a>
          <p className="mt-4 text-[11px] md:text-[12px] text-[#EF4444] font-medium">
            ※ 본인 명의 카드/계좌만 이용 가능합니다
          </p>
        </div>
      </div>
    </section>
  )
}
