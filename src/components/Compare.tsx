export default function Compare() {
  const rows = [
    ['신용점수', '하락', '영향없음'],
    ['대출기록', '남음', '없음'],
    ['이자', '높음', '무이자 할부'],
    ['심사', '까다로움', '간편 진행'],
    ['소요시간', '1~3일', '즉시 입금'],
  ]

  return (
    <section className="px-5 py-8 reveal">
      <h2 className="text-[18px] font-extrabold mb-4">
        일반대출 vs <span className="text-primary">순순페이솔루션</span>
      </h2>

      <div className="overflow-hidden rounded-2xl border border-[--border] bg-white">
        {/* Header */}
        <div className="grid grid-cols-3 text-center text-[12px] font-bold py-3.5 bg-[--bg-alt] border-b border-[--border]">
          <div className="text-[--text-light]">항목</div>
          <div className="text-[--text-sub]">일반대출</div>
          <div className="text-primary">순순페이솔루션</div>
        </div>

        {/* Rows */}
        {rows.map(([label, bad, good], i) => (
          <div key={i} className={`grid grid-cols-3 text-center text-[13px] ${i > 0 ? 'border-t border-[--border]' : ''}`}>
            <div className="font-medium text-[--text-sub] py-3.5">{label}</div>
            <div className="py-3.5">
              <span className="text-[#EF4444] inline-flex items-center gap-1">
                <span className="text-[10px]">&#10005;</span> {bad}
              </span>
            </div>
            <div className="py-3.5">
              <span className="text-primary font-bold inline-flex items-center gap-1">
                <span className="text-[10px]">&#10003;</span> {good}
              </span>
            </div>
          </div>
        ))}

        {/* Bottom CTA row */}
        <div className="grid grid-cols-3 text-center text-[12px] border-t border-[--border]">
          <div className="py-3" />
          <div className="py-3 text-[--text-light]">제한적</div>
          <div className="py-3 bg-primary text-white font-bold">추천</div>
        </div>
      </div>
    </section>
  )
}
