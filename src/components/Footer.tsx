export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1A0B2E] to-[#0F0520] py-12 md:py-16">
      <div className="container-x max-w-[960px] text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-[22px] md:text-[28px] font-black text-brand-gradient">폭시티켓</span>
        </div>
        <p className="text-[12px] md:text-[14px] text-white/50 mb-6 md:mb-8">
          안전하고 빠른 신용카드 · 소액결제 현금화 전문 서비스
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] md:text-[13px] text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            365일 24시간 상담
          </div>
          <div className="w-px h-3 bg-white/10" />
          <div className="text-[11px] md:text-[13px] text-white/60">업계 최고 94% 지급률</div>
          <div className="w-px h-3 bg-white/10" />
          <div className="text-[11px] md:text-[13px] text-white/60">5년간 무사고</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-left max-w-[720px] mx-auto mb-8 md:mb-10">
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="text-[10px] md:text-[11px] text-white/40 font-semibold mb-2">연락처 정보</div>
            <div className="text-[13px] md:text-[15px] text-white/85 font-bold leading-[1.9]">
              <div>상호명 : 폭시티켓</div>
              <div>대표전화 : <a href="tel:01034250104" className="underline decoration-[#F472B6]/40 underline-offset-2">010-3425-0104</a></div>
              <div>상담 : 채널톡 (오직 채널톡 공식 채널)</div>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="text-[10px] md:text-[11px] text-white/40 font-semibold mb-2">취급 상품</div>
            <div className="text-[13px] md:text-[14px] text-white/75 leading-[1.9]">
              문화상품권, 해피머니, 신용카드 현금화,
              정보이용료, 휴대폰 소액결제, 각종 모바일상품권
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 max-w-[760px] mx-auto text-left">
          <div className="text-[10px] md:text-[11px] text-white/40 font-bold mb-2">금융상품 조건 공시</div>
          <div className="text-[9px] md:text-[11px] text-white/30 leading-[1.8] space-y-1">
            <p>• 상환 기간: 최소 61일 ~ 최대 12개월</p>
            <p>• 최대 연이율(APR): 연 20% 이내 (수수료 포함)</p>
            <p>• 대표 예시: 100만 원 이용 시, 수수료 6만 원 포함 총 상환금액 106만 원 (지급률 94% · 상환기간 90일 기준)</p>
            <p>• 취급 수수료 및 기타 비용은 이용 금액, 카드사, 상환 기간에 따라 달라질 수 있습니다.</p>
            <p>• 과도한 이용은 개인 신용에 영향을 줄 수 있으므로 신중하게 판단하시기 바랍니다.</p>
          </div>
        </div>

        <div className="w-12 h-px bg-white/10 mx-auto my-6 md:my-8" />
        <div className="text-[11px] md:text-[12px] text-white/30">&copy; 2026 폭시티켓. All rights reserved.</div>
      </div>
    </footer>
  )
}
