export default function Compare() {
  const rows = [
    ['신용점수', '하락 위험', '영향 없음'],
    ['대출 기록', '기록 남음', '기록 없음'],
    ['이자 부담', '높은 이자', '무이자 할부'],
    ['심사 절차', '까다로움', '간편 진행'],
    ['소요 시간', '1~3일 소요', '즉시 입금'],
    ['앱카드 사용', '제한적', '자유롭게 가능'],
  ]

  return (
    <section className="relative py-16 md:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden reveal">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#0EA5E9] bg-[#E0F2FE] px-3.5 py-1.5 rounded-full mb-4">
            일반 대출 vs 폭시티켓
          </div>
          <h2 className="text-[26px] md:text-[40px] lg:text-[48px] font-black leading-tight break-keep">
            왜 <span className="text-brand-gradient">폭시티켓</span>이<br className="md:hidden" /> 더 유리할까요?
          </h2>
        </div>

        <div className="relative max-w-[980px] mx-auto">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] opacity-20 blur-xl pointer-events-none" />
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[--border-strong] bg-white shadow-[0_16px_50px_rgba(15,30,61,0.08)]">
            <div className="grid grid-cols-3 text-center text-[12px] md:text-[15px] font-bold py-4 md:py-5 bg-[#0A1628] text-white relative overflow-hidden">
              <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
              <div className="relative text-[#94A3B8]">항목</div>
              <div className="relative text-[#CBD5E1]">일반 대출</div>
              <div className="relative text-gold-gradient">폭시티켓</div>
            </div>

            {rows.map(([label, bad, good], i) => (
              <div
                key={i}
                className={`grid grid-cols-3 text-center text-[13px] md:text-[15px] ${
                  i > 0 ? 'border-t border-[--border]' : ''
                } hover:bg-[#EFF6FF] transition-colors`}
              >
                <div className="font-semibold text-[--text-sub] py-4 md:py-5 px-2 break-keep">{label}</div>
                <div className="py-4 md:py-5 px-2">
                  <span className="inline-flex items-center gap-1 text-[#B91C1C] break-keep">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#FEE2E2" />
                      <path d="M9 9l6 6M15 9l-6 6" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {bad}
                  </span>
                </div>
                <div className="py-4 md:py-5 px-2">
                  <span className="inline-flex items-center gap-1 font-bold text-[#1E3A8A] break-keep">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#DBEAFE" />
                      <path d="M8 12l3 3 5-6" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {good}
                  </span>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 text-center text-[12px] md:text-[14px] border-t border-[--border-strong]">
              <div className="py-3 md:py-4" />
              <div className="py-3 md:py-4 text-[--text-light]">제한적</div>
              <div className="relative py-3 md:py-4 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5E9] text-white font-black tracking-wider overflow-hidden">
                <span className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
                <span className="relative">⭐ 추천</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
