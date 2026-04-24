export default function UseCases() {
  const cases = [
    { icon: '🏠', name: '월세·공과금', sub: '생활비 해결' },
    { icon: '✈️', name: '여행·기념일', sub: '특별한 날' },
    { icon: '💐', name: '경조사비', sub: '갑작스런 지출' },
    { icon: '💰', name: '급전·비상금', sub: '긴급 자금' },
  ]

  return (
    <section className="bg-[--bg-alt] px-5 py-8 reveal">
      <h2 className="text-[18px] font-extrabold mb-1">이런 분들이 이용해요</h2>
      <p className="text-[13px] text-[--text-light] mb-4">다양한 상황에서 활용하세요</p>
      <div className="grid grid-cols-2 gap-2.5">
        {cases.map((c) => (
          <div key={c.name} className="bg-white rounded-xl py-5 px-3 text-center border border-[--border] hover:border-primary/30 hover:shadow-[0_4px_16px_rgba(99,102,241,0.08)] transition-all duration-300">
            <div className="text-[28px] mb-2">{c.icon}</div>
            <div className="text-[13px] font-bold text-[--text]">{c.name}</div>
            <div className="text-[11px] text-[--text-light] mt-0.5">{c.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
