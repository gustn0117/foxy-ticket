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
    <section className="py-14 md:py-20 lg:py-24 bg-white reveal">
      <div className="container-x">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#7C3AED] bg-[--brand-purple-soft] px-3 py-1 rounded-full mb-3">
            일반 대출 vs 폭시티켓
          </div>
          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-black leading-tight break-keep">
            왜 <span className="text-brand-gradient">폭시티켓</span>이<br className="md:hidden" /> 더 유리할까요?
          </h2>
        </div>

        <div className="max-w-[960px] mx-auto overflow-hidden rounded-2xl md:rounded-3xl border border-[--border-strong] bg-white shadow-[0_12px_40px_rgba(168,85,247,0.08)]">
          {/* Header */}
          <div className="grid grid-cols-3 text-center text-[12px] md:text-[15px] font-bold py-4 md:py-5 bg-gradient-to-r from-[#FDF2F8] to-[#F3E8FF] border-b border-[--border-strong]">
            <div className="text-[--text-light]">항목</div>
            <div className="text-[--text-sub]">일반 대출</div>
            <div className="text-brand-gradient">폭시티켓</div>
          </div>

          {rows.map(([label, bad, good], i) => (
            <div
              key={i}
              className={`grid grid-cols-3 text-center text-[13px] md:text-[15px] ${
                i > 0 ? 'border-t border-[--border]' : ''
              }`}
            >
              <div className="font-semibold text-[--text-sub] py-4 md:py-5 px-2 break-keep">{label}</div>
              <div className="py-4 md:py-5 px-2">
                <span className="text-[#EF4444] inline-flex items-center gap-1 break-keep">
                  <span className="text-[10px]">&#10005;</span> {bad}
                </span>
              </div>
              <div className="py-4 md:py-5 px-2">
                <span className="text-[#DB2777] font-bold inline-flex items-center gap-1 break-keep">
                  <span className="text-[10px]">&#10003;</span> {good}
                </span>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 text-center text-[12px] md:text-[14px] border-t border-[--border-strong]">
            <div className="py-3 md:py-4" />
            <div className="py-3 md:py-4 text-[--text-light]">제한적</div>
            <div className="py-3 md:py-4 bg-gradient-to-r from-[#EC4899] to-[#A855F7] text-white font-black tracking-wider">추천</div>
          </div>
        </div>
      </div>
    </section>
  )
}
