'use client'

export default function PhishingWarning() {
  const cases = [
    {
      title: '지인 사칭 / 타 업체 소개',
      desc: '"저희를 사칭하여 현금화 진행 후',
      bold: '계좌 입금을 요구',
      after: '하는 경우"',
    },
    {
      title: '카드 대납 빙자 사기',
      desc: '"타 업체에서 대납을 빌미로 진행 후,',
      bold: '입금을 요구',
      after: '하는 경우"',
    },
    {
      title: '제3자 입금 유도',
      desc: '"어떠한 형태든 본인 계좌가 아닌',
      bold: '타인 계좌로 입금을 요청',
      after: '할 경우"',
    },
  ]

  return (
    <section className="mx-5 my-6 reveal">
      <div className="animate-red-glow rounded-2xl">
        {/* Red Header */}
        <div className="bg-[#DC2626] rounded-t-2xl px-5 py-4 flex items-center justify-center gap-3">
          <span className="animate-bell inline-block">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-white text-[16px] font-black">보이스피싱 긴급 주의안내</span>
          <span className="animate-bell inline-block" style={{ animationDelay: '0.3s' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        {/* White Body */}
        <div className="bg-white border border-t-0 border-[#FECACA] rounded-b-2xl px-5 pt-5 pb-6">
          {/* Warning Cases */}
          <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
            {cases.map((c, i) => (
              <div key={i} className={`px-4 py-4 ${i > 0 ? 'border-t border-[#E5E7EB]' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#EF4444] text-[14px]">&#9888;</span>
                  <span className="text-[14px] font-extrabold text-[--text]">{c.title}</span>
                </div>
                <p className="text-[12px] text-[--text-sub] leading-[1.8] pl-[22px] break-keep">
                  {c.desc} <span className="bg-[#FEE2E2] text-[#DC2626] font-bold px-1 rounded whitespace-nowrap">{c.bold}</span> {c.after}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Warning */}
          <div className="mt-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="animate-prohibition">
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="#DC2626" strokeWidth="3"/>
                  <line x1="12" y1="12" x2="36" y2="36" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <p className="text-[13px] text-[--text-sub] mb-1.5">
              위 사례는 모두 <span className="text-[#DC2626] font-bold">보이스피싱</span> 입니다.
            </p>
            <p className="text-[#DC2626] text-[24px] font-black">당신도 공범입니다</p>
            <div className="w-14 h-[3px] bg-[#DC2626] mx-auto mt-2 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
