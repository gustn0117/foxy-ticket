export default function Steps() {
  const steps = [
    { num: '1', title: '상담', desc: '카톡/전화 상담', color: 'bg-accent', icon: '💬' },
    { num: '2', title: '결제', desc: '카드 결제 진행', color: 'bg-primary', icon: '💳' },
    { num: '3', title: '입금', desc: '3분 내 완료', color: 'bg-[#10B981]', icon: '✅' },
  ]

  return (
    <section className="bg-[--bg-alt] px-5 py-8 reveal">
      <h2 className="text-[18px] font-extrabold mb-1">이용 절차</h2>
      <p className="text-[13px] text-[--text-light] mb-5">간단 3단계로 완료</p>

      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-[--border]">
            <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center text-[22px] shrink-0 shadow-sm`}>
              {s.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold text-white ${s.color} px-2 py-0.5 rounded`}>STEP {s.num}</span>
                <span className="text-[15px] font-bold text-[--text]">{s.title}</span>
              </div>
              <div className="text-[12px] text-[--text-light] mt-0.5">{s.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[--text-light]">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
