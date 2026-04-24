export default function Warning() {
  return (
    <section className="px-5 pb-8 reveal">
      <h2 className="text-[18px] font-extrabold mb-4">
        타 업체 <span className="text-[#EF4444]">주의사항</span>
      </h2>

      <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-4 mb-3">
        <div className="space-y-3">
          {[
            { text: '수수료 5%라면서 실제 15~25% 공제', highlight: true },
            { text: '출장비·진행비 등 숨은 비용 요구', highlight: true },
            { text: '입금 지연 및 불친절 응대', highlight: false },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-[13px]">
              <span className="w-5 h-5 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[#EF4444] text-[10px] font-bold">&#10005;</span>
              </span>
              <span className={item.highlight ? 'text-[#EF4444] font-medium' : 'text-gray-600'}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-5 relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full" />
        <div className="absolute -right-2 -bottom-8 w-16 h-16 bg-white/5 rounded-full" />
        <div className="text-white text-[15px] font-bold mb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[11px]">&#10024;</span>
          순순페이솔루션은 다릅니다
        </div>
        <div className="space-y-2">
          {[
            '안내 금액 100% 입금 보장',
            '숨은 비용 일절 없음',
            '24시간 친절 상담',
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[13px] text-white/90">
              <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent text-[9px]">&#10003;</span>
              </span>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
