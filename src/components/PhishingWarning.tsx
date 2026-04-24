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
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-[#F1F5F9] to-white overflow-hidden reveal">
      <div className="container-x relative max-w-[900px]">
        <div className="animate-red-glow rounded-2xl md:rounded-3xl">
          <div className="bg-[#DC2626] rounded-t-2xl md:rounded-t-3xl px-5 py-4 md:py-5 flex items-center justify-center gap-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#DC2626] animate-pulse-dot opacity-40 pointer-events-none" />
            <span className="animate-bell inline-block relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="md:w-[28px] md:h-[28px]">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="relative text-white text-[16px] md:text-[22px] font-black tracking-tight">보이스피싱 긴급 주의안내</span>
            <span className="animate-bell inline-block relative" style={{ animationDelay: '0.3s' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="md:w-[28px] md:h-[28px]">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          <div className="bg-white border border-t-0 border-[#FECACA] rounded-b-2xl md:rounded-b-3xl px-5 md:px-8 pt-5 md:pt-8 pb-6 md:pb-10">
            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
              {cases.map((c, i) => (
                <div key={i} className={`px-4 md:px-6 py-4 md:py-5 ${i > 0 ? 'border-t border-[#E5E7EB]' : ''}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#EF4444] text-[14px]">&#9888;</span>
                    <span className="text-[14px] md:text-[17px] font-extrabold text-[--text]">{c.title}</span>
                  </div>
                  <p className="text-[12px] md:text-[14px] text-[--text-sub] leading-[1.85] pl-[22px] break-keep">
                    {c.desc} <span className="bg-[#FEE2E2] text-[#DC2626] font-bold px-1 rounded whitespace-nowrap">{c.bold}</span> {c.after}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 text-center">
              <div className="flex justify-center mb-3">
                <div className="animate-prohibition">
                  <svg width="56" height="56" viewBox="0 0 48 48" fill="none" className="md:w-[72px] md:h-[72px]">
                    <defs>
                      <linearGradient id="prohG" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                    </defs>
                    <circle cx="24" cy="24" r="20" stroke="url(#prohG)" strokeWidth="3.5"/>
                    <line x1="12" y1="12" x2="36" y2="36" stroke="url(#prohG)" strokeWidth="3.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-[13px] md:text-[16px] text-[--text-sub] mb-1.5">
                위 사례는 모두 <span className="text-[#DC2626] font-bold">보이스피싱</span>입니다.
              </p>
              <p className="text-[#DC2626] text-[26px] md:text-[38px] font-black tracking-[-0.01em]">당신도 공범입니다</p>
              <div className="w-14 md:w-24 h-[3px] bg-[#DC2626] mx-auto mt-2 md:mt-3 rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 relative overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#2563EB]" />
          <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-[#FCD34D] opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-[#0EA5E9] opacity-30 blur-3xl pointer-events-none" />

          <div className="relative px-6 md:px-10 py-8 md:py-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#37AEE2] to-[#1E96C8] text-white text-[11px] md:text-[12px] font-black px-3 py-1 rounded-full mb-4 shadow-[0_4px_12px_rgba(34,158,217,0.35)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
              </svg>
              Telegram Channel · @foxytiket119
            </div>
            <h3 className="text-[19px] md:text-[30px] font-black mb-2 text-white break-keep">
              신용카드 현금화 전문<br />
              <span className="text-gold-gradient">폭시티켓은 오직 텔레그램에서!</span>
            </h3>
            <p className="text-[13px] md:text-[16px] text-[#CBD5E1] mb-6 md:mb-7 break-keep">
              공식 채널은 <b className="text-white">@foxytiket119</b> 단 하나이며, 그 외 <b className="text-white">모든 계정은 사칭이므로 주의</b>하세요!
            </p>
            <a
              href="https://t.me/foxytiket119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 md:px-12 py-4 md:py-5 bg-gradient-to-br from-[#37AEE2] to-[#1E96C8] text-white rounded-full text-[14px] md:text-[16px] font-black shadow-[0_12px_32px_rgba(34,158,217,0.5)] hover:-translate-y-0.5 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
              </svg>
              텔레그램으로 바로 상담하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
