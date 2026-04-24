export default function UseCases() {
  const cases = [
    { icon: '🏠', name: '월세·공과금', sub: '생활비 해결' },
    { icon: '✈️', name: '여행·기념일', sub: '특별한 날' },
    { icon: '💐', name: '경조사비', sub: '갑작스런 지출' },
    { icon: '💰', name: '급전·비상금', sub: '긴급 자금' },
    { icon: '💼', name: '사업 운영비', sub: '운영 자금' },
    { icon: '🎓', name: '학원·등록금', sub: '교육비' },
    { icon: '🏥', name: '병원·의료비', sub: '갑작스런 치료비' },
    { icon: '🛠', name: '수리·수선비', sub: '가전/가구' },
  ]

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#FDF2F8] reveal">
      <div className="container-x">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block text-[12px] md:text-[13px] font-bold text-[#DB2777] bg-[--brand-pink-soft] px-3 py-1 rounded-full mb-3">
            이럴 때 폭시티켓
          </div>
          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-black leading-tight break-keep">
            이런 분들이 <span className="text-brand-gradient">많이 이용</span>해요
          </h2>
          <p className="mt-3 text-[14px] md:text-[16px] text-[--text-sub]">다양한 상황에서 긴급한 비상금이 필요할 때</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-[960px] mx-auto">
          {cases.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl py-6 md:py-8 px-3 text-center border border-[--border-strong] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(236,72,153,0.12)] hover:border-[#F472B6] transition-all duration-300"
            >
              <div className="text-[32px] md:text-[40px] mb-2 md:mb-3">{c.icon}</div>
              <div className="text-[14px] md:text-[16px] font-bold text-[--text]">{c.name}</div>
              <div className="text-[11px] md:text-[13px] text-[--text-light] mt-1">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
