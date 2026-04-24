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
    <section className="py-10 md:py-16 bg-white reveal">
      <div className="container-x max-w-[860px]">
        <div className="animate-red-glow rounded-2xl md:rounded-3xl">
          <div className="bg-[#DC2626] rounded-t-2xl md:rounded-t-3xl px-5 py-4 md:py-5 flex items-center justify-center gap-3">
            <span className="animate-bell inline-block">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="md:w-[26px] md:h-[26px]">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-white text-[16px] md:text-[20px] font-black">보이스피싱 긴급 주의안내</span>
            <span className="animate-bell inline-block" style={{ animationDelay: '0.3s' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="md:w-[26px] md:h-[26px]">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          <div className="bg-white border border-t-0 border-[#FECACA] rounded-b-2xl md:rounded-b-3xl px-5 md:px-8 pt-5 md:pt-8 pb-6 md:pb-10">
            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
              {cases.map((c, i) => (
                <div key={i} className={`px-4 md:px-6 py-4 md:py-5 ${i > 0 ? 'border-t border-[#E5E7EB]' : ''}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#EF4444] text-[14px]">&#9888;</span>
                    <span className="text-[14px] md:text-[16px] font-extrabold text-[--text]">{c.title}</span>
                  </div>
                  <p className="text-[12px] md:text-[14px] text-[--text-sub] leading-[1.8] pl-[22px] break-keep">
                    {c.desc} <span className="bg-[#FEE2E2] text-[#DC2626] font-bold px-1 rounded whitespace-nowrap">{c.bold}</span> {c.after}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 text-center">
              <div className="flex justify-center mb-3">
                <div className="animate-prohibition">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="md:w-[56px] md:h-[56px]">
                    <circle cx="24" cy="24" r="20" stroke="#DC2626" strokeWidth="3"/>
                    <line x1="12" y1="12" x2="36" y2="36" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-[13px] md:text-[15px] text-[--text-sub] mb-1.5">
                위 사례는 모두 <span className="text-[#DC2626] font-bold">보이스피싱</span>입니다.
              </p>
              <p className="text-[#DC2626] text-[24px] md:text-[32px] font-black">당신도 공범입니다</p>
              <div className="w-14 md:w-20 h-[3px] bg-[#DC2626] mx-auto mt-2 md:mt-3 rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 bg-gradient-to-br from-[#FEE500]/10 via-[#FCE7F3] to-[#F3E8FF] rounded-2xl md:rounded-3xl p-6 md:p-10 border border-[--border-strong]">
          <div className="text-center">
            <h3 className="text-[18px] md:text-[26px] font-black mb-2 break-keep">
              신용카드 현금화 전문, <span className="text-brand-gradient">폭시티켓은 오직 채널톡에서!</span>
            </h3>
            <p className="text-[13px] md:text-[15px] text-[--text-sub] mb-5">
              카카오톡 <b>플러스친구는 사칭이므로 주의</b>하세요!
            </p>
            <a
              href="https://open.kakao.com/o/skv91Efi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-10 py-3.5 md:py-4 bg-[#FEE500] text-[#1A1A1A] rounded-full text-[14px] md:text-[16px] font-bold shadow-[0_8px_24px_rgba(254,229,0,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1A1A1A">
                <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.66-.15.54-.96 3.47-1 3.63 0 .05.02.1.06.13a.14.14 0 00.1.02c.14-.02 3.25-2.14 3.73-2.46.77.11 1.58.17 2.4.17 5.52 0 10-3.58 10-7.94S17.52 3 12 3z"/>
              </svg>
              채널톡으로 바로 상담하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
