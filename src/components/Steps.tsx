const steps = [
  {
    num: '01',
    title: '채널톡 및 전화로',
    highlight: '365일 24시간 가능',
    sub: '문의 상담하기',
    stroke: '#F472B6',
    labelColor: 'text-[#F472B6]',
  },
  {
    num: '02',
    title: '상담원이 절차 설명 후',
    highlight: '한도 매입 진행',
    sub: '고객이 원하는',
    stroke: '#A855F7',
    labelColor: 'text-[#7C3AED]',
  },
  {
    num: '03',
    title: '기재해 주신 계좌로',
    highlight: '비상금 입금 완료!',
    sub: '원하시는 금액의',
    stroke: '#7C3AED',
    labelColor: 'text-[#7C3AED]',
  },
]

export default function Steps() {
  return (
    <section id="steps" className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-white via-[#FDF2F8] to-[#F3E8FF] reveal">
      <div className="container-x">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#DB2777] bg-white border border-[--border-strong] px-3 py-1 rounded-full mb-3">
            폭시티켓 신용카드 이용 시
          </div>
          <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-black leading-tight mb-2 break-keep">
            한도만큼! <span className="text-brand-gradient">비상금 매입 순서</span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-[--text-sub]">채널톡 상담부터 입금까지 단 <b className="text-[#DB2777]">3단계</b></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="step-ring">
                <svg viewBox="0 0 100 100">
                  <circle className="ring-bg" cx="50" cy="50" r="45" />
                  <circle className="ring-fg" cx="50" cy="50" r="45" stroke={s.stroke} />
                </svg>
                <div className="step-ring-content">
                  <div className={`text-[18px] md:text-[22px] font-black tracking-[0.08em] mb-2 md:mb-3 ${s.labelColor}`}>
                    STEP {s.num}
                  </div>
                  <div className="text-[12px] md:text-[13px] text-[--text-sub] leading-[1.5] break-keep">{s.title}</div>
                  <div className={`text-[14px] md:text-[16px] font-bold mt-1 md:mt-1.5 break-keep ${s.labelColor}`}>
                    {s.highlight}
                  </div>
                  <div className="text-[11px] md:text-[12px] text-[--text-light] mt-1 break-keep">{s.sub}</div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <>
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="md:hidden flex justify-center my-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 13l7 7 7-7" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-[720px] mx-auto">
          <div className="bg-gradient-to-r from-[#FCE7F3] via-[#F3E8FF] to-[#FCE7F3] rounded-full py-4 md:py-5 px-5 md:px-8 text-center border border-[--border-strong]">
            <p className="text-[14px] md:text-[18px] font-black tracking-[-0.01em] break-keep">
              <span className="text-[#DB2777]">&quot; </span>
              앱카드 <span className="text-[#A855F7]">/</span> 무이자 할부 <span className="text-[#A855F7]">/</span> 신용한도 영향{' '}
              <span className="text-[#EF4444]">X</span>
              <span className="text-[#DB2777]"> &quot;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
